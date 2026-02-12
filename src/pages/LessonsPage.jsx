import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const lessons = [
  { id: '01', title: 'Distance is Just a Number', text: 'What truly separates two people is not kilometers—it is the effort they stop making.' },
  { id: '02', title: 'Trust is Everything', text: 'Without trust, love becomes anxiety. With it, even distance feels manageable.' },
  { id: '03', title: 'Communication is Love', text: 'Every unanswered question becomes a doubt. Honesty, even when it hurts, builds strength.' },
  { id: '04', title: 'Growth Takes Pain', text: 'We had to lose each other to find ourselves—and maybe, find a better version of us.' },
  { id: '05', title: 'Respect > Control', text: 'Real love does not demand. It trusts. It respects. It gives freedom and still feels chosen.' },
  { id: '06', title: 'Time Does Not Heal—Growth Does', text: 'Months passed, but it was not time that changed me. It was reflecting, learning, and becoming better.' }
];

const LessonsPage = () => {
  const [mapActive, setMapActive] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="lessons-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What Distance Taught Me
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            7,000 kilometers. 6 years. Every mile taught me something about love, loss, and growth.
          </motion.p>

          {/* Interactive Map */}
          <motion.div
            className="map-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className={`map-visual ${mapActive ? 'active' : ''}`}
              onClick={() => setMapActive(true)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="country">
                <div className="flag">🇮🇳</div>
                <p className="country-name">India</p>
              </div>
              <div className="distance-line">
                <div className="distance-pulse"></div>
                <p className="distance-text">7,000 km</p>
              </div>
              <div className="country">
                <div className="flag">🇩🇪</div>
                <p className="country-name">Germany</p>
              </div>
            </motion.div>
            <p className="map-instruction">Click the map to see our journey</p>
          </motion.div>

          {/* Timeline Section */}
          <div className="timeline-container">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <span className="lesson-number">{lesson.id}</span>
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <p className="lesson-text">{lesson.text}</p>
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
          onClick={() => navigate('/memories')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          className="nav-btn next-btn"
          onClick={() => navigate('/principles')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>
    </motion.main>
  );
};

export default LessonsPage;
