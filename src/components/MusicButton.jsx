import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';

const MusicButton = () => {
  const { isPlaying, toggle } = useAudio();

  return (
    <motion.button
      className="music-toggle"
      onClick={toggle}
      onTouchStart={(e) => {
        e.stopPropagation();
        toggle();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      {isPlaying ? '🎵' : '🔇'}
    </motion.button>
  );
};

export default MusicButton;
