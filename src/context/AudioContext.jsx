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
      console.log('Audio is ready to play');
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
      console.log('Audio started playing');
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      console.log('Audio paused');
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

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

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
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      />
      {children}
    </AudioContext.Provider>
  );
};
