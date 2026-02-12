import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';

const IntroPage = () => {
  const [loading, setLoading] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const { play, isReady } = useAudio();
  const navigate = useNavigate();

  useEffect(() => {
    // Hide loading screen after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = async () => {
    if (isReady) {
      await play();
    }
  };

  const openLetter = async (e) => {
    e.stopPropagation();
    setShowLetter(true);
  };

  const closeLetter = () => {
    setShowLetter(false);
  };

  const triggerSurprise = (e) => {
    e.stopPropagation();
    setShowSurprise(true);
    setTimeout(() => setShowSurprise(false), 5000);
  };

  if (loading) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onClick={handleInteraction}
        onTouchStart={handleInteraction}
      >
        <div className="loading-content">
          <div className="heart-icon">❤️</div>
          <h1 className="loading-title">For Saloni</h1>
          <p className="loading-quote">
            "Love is not finding someone to live with,<br />
            it's finding someone you can't live without."
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleInteraction}
    >
      <section className="intro-section">
        <div className="floating-particles"></div>
        <div className="container">
          <motion.h1
            className="section-title fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Saloni,
          </motion.h1>
          <div className="intro-text">
            <motion.p
              className="fade-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              In 2020, you entered my life through a simple Instagram message.
            </motion.p>
            <motion.p
              className="fade-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              What began as a conversation became something I never expected —
            </motion.p>
            <motion.p
              className="fade-in highlight-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              A love that would teach me what it means to truly care for someone.
            </motion.p>
          </div>
          
          <motion.div
            className="intro-footer fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="distance-info">India to Germany. 7,000 kilometers. 6 years.</p>
            <p className="story-tagline">This is our story.</p>
          </motion.div>

          {/* Envelope Section */}
          <motion.div
            className="envelope-section fade-in"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="envelope-container">
              <motion.div
                className="envelope"
                onClick={openLetter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="envelope-flap"></div>
                <div className="envelope-body"></div>
                <p className="envelope-label">Open the letter</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="page-navigation" style={{ marginTop: '60px' }}>
            <motion.button
              className="nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/memories');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue →
            </motion.button>
          </div>

          {/* Hidden Hearts */}
          <div
            className="hidden-hearts"
            onClick={triggerSurprise}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              opacity: 0
            }}
          ></div>
        </div>
      </section>

      {/* Letter Overlay */}
      {showLetter && (
        <motion.div
          className="letter-overlay active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLetter}
        >
          <motion.div
            className="letter-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="letter-close" onClick={closeLetter}>×</button>
            <div className="letter-paper">
              <h2 className="letter-title">My Dearest Saloni,</h2>
              <div className="letter-text">
                <p>There are moments when words feel too small to carry what the heart holds. This is one of them.</p>
                <p>Over these 6 years, across 7,000 kilometers, through countless nights and timezone-tangled mornings, I've learned what it means to love someone from a distance — and still choose them every single day.</p>
                <p>You weren't just someone I talked to. You became the person I wanted to tell everything to. The one whose happiness mattered more than being right. The one whose peace I wanted to protect, even when I didn't know how.</p>
                <p>I've made mistakes. I've been immature, controlling, and let my pride hurt us. But distance taught me. Silence taught me. And losing you taught me most of all.</p>
                <p>I'm not asking you to forget the past. I'm asking if we can build something new — something better, something honest, something real.</p>
                <p>No pressure. No urgency. Just an invitation.</p>
                <p className="letter-signature">Forever yours,<br />Rudra</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Surprise Overlay */}
      {showSurprise && (
        <motion.div
          className="surprise-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="surprise-message"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            I've loved you quietly<br />for 6 years.
          </motion.div>
          
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-heart"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, -600],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.main>
  );
};

export default IntroPage;
