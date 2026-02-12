import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const principles = [
  { title: 'Honesty Over Comfort', text: 'I will tell you the truth, even when it is hard. No hiding, no games.' },
  { title: 'Your Peace is Priority', text: 'I will not make you question your worth. Your happiness will always matter more than my ego.' },
  { title: 'Trust, Not Control', text: 'I will never try to control you again. Love should feel freeing, not suffocating.' },
  { title: 'Communication, Always', text: 'No more silence. No more assumptions. We will talk, even when it is uncomfortable.' },
  { title: 'Growth Together', text: 'We will support each other\'s dreams, not compete. Your success is mine, and mine is yours.' },
  { title: 'Patience and Effort', text: 'Love is not just a feeling. It is a choice I will make every single day.' }
];

const PrinciplesPage = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="principles-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Begin Again
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Not as who we were, but as who we've become.<br />
            These are the principles I promise to live by.
          </motion.p>

          {/* Timeline Section */}
          <div className="timeline-container">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-text">{principle.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="page-navigation">
        <motion.button
          className="nav-btn prev-btn"
          onClick={() => navigate('/lessons')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          className="nav-btn next-btn"
          onClick={() => navigate('/proposal')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>
    </motion.main>
  );
};

export default PrinciplesPage;
