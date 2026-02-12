import { createContext, useContext, useRef, useState, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsReady(true);
      // Try to autoplay when ready (will work after user interaction)
      if (!isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
          console.log('Autoplay successful');
        }).catch(() => {
          console.log('Autoplay blocked, waiting for user interaction');
        });
      }
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = (e) => {
      console.error('Audio error:', e);
    };

    // Set initial volume
    audio.volume = 0.7;

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    // Try to load audio
    audio.load();

    // Add global click handler to start music on any interaction
    const handleGlobalClick = async () => {
      if (!isPlaying) {
        try {
          // Try to play immediately
          await audio.play();
          setIsPlaying(true);
          setIsUnlocked(true);
          console.log('Music started on user interaction');
        } catch (error) {
          console.log('Play attempt failed, will retry:', error.message);
          // If first attempt fails, load and try again
          try {
            audio.load();
            await new Promise(resolve => setTimeout(resolve, 100));
            await audio.play();
            setIsPlaying(true);
            setIsUnlocked(true);
            console.log('Music started on retry');
          } catch (retryError) {
            console.error('Failed to play on interaction:', retryError);
          }
        }
      }
    };

    // Only add listeners once
    document.addEventListener('click', handleGlobalClick, { once: false });
    document.addEventListener('touchstart', handleGlobalClick, { once: false });

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('touchstart', handleGlobalClick);
    };
  }, [isPlaying, isReady]);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // Ensure audio is loaded
      if (audio.readyState < 2) {
        await new Promise((resolve) => {
          audio.addEventListener('canplay', resolve, { once: true });
          audio.load();
        });
      }

      // Unlock audio on mobile if needed
      if (!isUnlocked) {
        setIsUnlocked(true);
      }

      // Attempt to play
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        console.log('Audio playing successfully');
      }
    } catch (error) {
      console.error('Audio play failed:', error);
      
      // Retry after a short delay
      setTimeout(async () => {
        try {
          await audio.play();
          setIsPlaying(true);
          console.log('Audio playing after retry');
        } catch (retryError) {
          console.error('Retry failed:', retryError);
        }
      }, 500);
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isReady, play, pause, toggle }}>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        preload="auto"
        playsInline
        style={{ display: 'none' }}
      />
      {children}
    </AudioContext.Provider>
  );
};
