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
  const hasInteractedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsReady(true);
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
    const handleGlobalClick = async (e) => {
      // Check if audio is paused or hasn't started
      if (audio.paused) {
        try {
          console.log('Attempting to play audio on user interaction...');
          await audio.play();
          hasInteractedRef.current = true;
          console.log('Music started successfully');
        } catch (error) {
          console.error('Failed to play audio:', error);
        }
      }
    };

    // Add listeners - they will persist and check audio state each time
    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('touchstart', handleGlobalClick);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('touchstart', handleGlobalClick);
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

      // Mark user interaction
      hasInteractedRef.current = true;

      // Attempt to play
      await audio.play();
      console.log('Audio playing successfully');
    } catch (error) {
      console.error('Audio play failed:', error);
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
