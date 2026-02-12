import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProposalPage = () => {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleYes = () => {
    setResponse('yes');
  };

  const handleNeedTime = () => {
    setResponse('time');
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="valentine-section">
        <div className="container">
          <AnimatePresence mode="wait">
            {!response ? (
              <motion.div
                key="proposal"
                className="proposal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="heart-animation"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ❤️
                </motion.div>
                <h2 className="section-title">Saloni,</h2>
                <p className="proposal-question">Will you be my Valentine?</p>
                <p className="proposal-description">
                  Not just for today. For all the days ahead.<br />
                  For the quiet mornings and the long nights.<br />
                  For the distance and the closeness.<br />
                  For the life we could build together.
                </p>

                <div className="proposal-buttons">
                  <motion.button
                    className="proposal-btn yes-btn"
                    onClick={handleYes}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Yes ❤️
                  </motion.button>
                  <motion.button
                    className="proposal-btn time-btn"
                    onClick={handleNeedTime}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    I Need Time 🌸
                  </motion.button>
                </div>
              </motion.div>
            ) : response === 'yes' ? (
              <motion.div
                key="yes-response"
                className="response-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="big-heart"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  ❤️
                </motion.div>
                <h2 className="response-title">Thank You, Saloni</h2>
                <div className="response-text">
                  <p className="highlight-text">You've made me the happiest.</p>
                  <p>
                    Not because you said yes to a question,<br />
                    but because you said yes to us.
                  </p>
                  <p>
                    I promise to honor this choice.<br />
                    To be worthy of your trust.<br />
                    To build something beautiful with you.
                  </p>
                  <p className="final-message">Here's to us. To distance conquered. To love chosen. 💕</p>
                </div>
                <motion.button
                  className="nav-btn next-btn"
                  onClick={() => navigate('/vision')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ marginTop: '40px' }}
                >
                  Our Future Together →
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="time-response"
                className="response-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <motion.div
                  className="flower-icon"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  🌸
                </motion.div>
                <h2 className="response-title">I Understand</h2>
                <div className="response-text">
                  <p className="highlight-text">Love should never feel rushed.</p>
                  <p>
                    Take all the time you need.<br />
                    Process. Reflect. Feel.
                  </p>
                  <p>
                    I'm not going anywhere.<br />
                    I'll be here — patiently, respectfully, hopefully.
                  </p>
                  <p className="final-message">Because love should feel safe. 🌸</p>
                </div>
                <p className="wait-message">I will wait. You're worth it.</p>
                <motion.button
                  className="nav-btn next-btn"
                  onClick={() => navigate('/vision')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ marginTop: '40px' }}
                >
                  What I Envision →
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Navigation */}
      {!response && (
        <div className="page-navigation">
          <motion.button
            className="nav-btn prev-btn"
            onClick={() => navigate('/principles')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>
        </div>
      )}
    </motion.main>
  );
};

export default ProposalPage;
