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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => setIsReady(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const play = async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Audio play failed:', error);
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
      />
      {children}
    </AudioContext.Provider>
  );
};
