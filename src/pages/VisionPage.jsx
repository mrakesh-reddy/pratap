import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const visions = [
  { title: 'Building Trust', text: 'No secrets. No lies. Just two people choosing honesty every single day.' },
  { title: 'Closing the Distance', text: 'I will work towards a future where we are in the same timezone, the same city, the same home.' },
  { title: 'Growing Together', text: 'Supporting your dreams while building ours. No competition, only teamwork.' },
  { title: 'Creating New Memories', text: 'Traveling together. Laughing together. Building a life that feels like home.' },
  { title: 'Healing Together', text: 'We will talk about the past when needed, but we will not live in it. Forward, always forward.' },
  { title: 'A Love That Lasts', text: 'Not perfect. Not easy. But real, committed, and worth every effort.' }
];

const VisionPage = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="vision-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The Future I See
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Not a fantasy. A vision built on lessons learned,<br />
            mistakes acknowledged, and a heart that's finally ready.
          </motion.p>

          {/* Timeline Section */}
          <div className="timeline-container">
            {visions.map((vision, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <h3 className="vision-title">{vision.title}</h3>
                  <p className="vision-text">{vision.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            className="final-message"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="final-title">This is my promise to you, Saloni.</h3>
            <p className="final-text">
              I can't change the past. I can't erase the mistakes.<br />
              But I can offer you a future where those mistakes are lessons,<br />
              where love is a choice we make every day, and where the 7,000 kilometers<br />
              that once separated us become the story of how we found our way back.
            </p>
            <p className="final-signature">Forever yours,<br />Rudra</p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <div className="page-navigation">
        <motion.button
          className="nav-btn prev-btn"
          onClick={() => navigate('/proposal')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          className="nav-btn next-btn"
          onClick={() => navigate('/intro')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ↻ Start Again
        </motion.button>
      </div>
    </motion.main>
  );
};

export default VisionPage;
