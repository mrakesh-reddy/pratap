import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const lessons = [
  { 
    id: '2020', 
    title: 'The Year We Chose Eachother', 
    text: 'We met for the first time on September 18th at a cafe. I spoke a lot that day, and I still remember that beautiful laugh of yours. I opened my heart completely, and you accepted me exactly as I am.' 
  },
  { 
    id: '2021', 
    title: 'The Year When My Fear Came True', 
    text: 'You fell for someone else, and my heart shattered into pieces I thought I could never put back together. But you fought through your heartbreak and realized something I had known all along - that we belonged together. That year taught me that sometimes love needs to wander to find its way home.' 
  },
  { 
    id: '2022', 
    title: 'The Surprise That Never Was', 
    text: 'I booked the seat next to yours on that Kuwait-Ahmedabad flight, imagining your face when you would see me there. But pride got in the way. We fought two days before, and I let my ego win. I did not show up. That empty seat taught me that some moments, once lost, haunt you forever. I wish I could go back and choose you over my pride.' 
  },
  { 
    id: '2023', 
    title: 'The Fragrance I Cannot Forget', 
    text: 'January 12th - my birthday. You gifted me three perfumes, each one carefully chosen. They sit on my shelf, barely touched, because no fragrance in the world compares to the way you smell. Those bottles remind me that the best things in life are not meant to be used - they are meant to be cherished, just like every memory of you.' 
  },
  { 
    id: '2024', 
    title: 'When I Wanted to Be Your Strength', 
    text: 'I watched you go through your lowest days from 6,345 kilometers away, and all I wanted was to be there - to offer my shoulder, to hold you through the storms, to be your comfort when the world felt heavy. Distance never hurt more than when I could not be there when you needed someone most. I promised myself that if I ever got another chance, I would never let you face anything alone.' 
  },
  { 
    id: '2025', 
    title: 'Hours That Felt Like Seconds', 
    text: 'Two to four dinners together when you came back to India. We sat across from each other, talking, laughing, just being. Hours passed like heartbeats - too fast, too fleeting. Those evenings felt like five-minute dreams I never wanted to wake up from. If I could freeze time anywhere, it would be in those moments with you, where everything felt right.' 
  },
  { 
    id: '2026', 
    title: 'The Midnight Message', 
    text: 'This year, something changed. For the first time in six years, you remembered my actual birth date. At exactly 12:00 AM, my phone lit up with your message. It was not grand, it was not dramatic - but it meant everything. Because it told me that maybe, just maybe, I still matter to you the way you have always mattered to me. And that small gesture gave me the courage to create this for you.' 
  }
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
            Six Years of Us
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            2020 to 2026. Every year held a piece of our story—the beautiful, the painful, and everything in between.
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
                <p className="distance-text">6,345 km</p>
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
