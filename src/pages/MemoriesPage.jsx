import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: '4.jpeg',
    title: 'The First Effort',
    subtitle: 'Your First Birthday After We Met, 2020',
    description: "I wanted to make you smile. A bouquet, a cake, a teddy bear - small gestures that meant the world to me. It was the first time I felt the joy of giving without expecting anything in return. That day, I learned that love is about showing up, even when it's just through flowers and hope."
  },
  {
    id: 2,
    image: '2.jpeg',
    title: 'The Mistake',
    subtitle: 'When I Let Ego Win',
    description: "I chose pride over you. I was controlling, insecure, and made you feel like I didn't trust your love. This memory haunts me — not because I lost you, but because I hurt you. It taught me that real love isn't about possession; it's about trust, respect, and letting someone be free while choosing to stay."
  },
  {
    id: 3,
    image: '8.jpeg',
    title: 'When We Almost Had It',
    subtitle: 'The Days We Were Just... Us',
    description: "There was a time when things felt easy. We laughed, we planned futures, we talked about small things that felt important. This was the version of us I want back — where love felt natural, not complicated. I miss how you made ordinary days feel like something worth living."
  },
  {
    id: 4,
    image: '5.jpeg',
    title: 'Your Strength',
    subtitle: 'When You Chose Yourself',
    description: "You left when it became too much. At first, I didn't understand. But now I see it — you chose your peace over something that was breaking you. That took courage I didn't have. You taught me that loving someone also means knowing when to step back, heal, and find yourself again."
  },
  {
    id: 5,
    image: '6.jpeg',
    title: 'What Distance Taught Me',
    subtitle: '7,000 Kilometers of Growth',
    description: "Every kilometer between us became a reminder of what I took for granted. The timezone differences, the delayed texts, the longing — they all taught me patience, empathy, and the true weight of missing someone. Distance didn't weaken my love. It clarified it."
  },
  {
    id: 6,
    image: '7.jpeg',
    title: 'The Memories I Replay',
    subtitle: 'Late Night Calls and Morning Texts',
    description: "I replay our conversations. The way you laughed at something silly. The way you opened up about your fears. The way you made me feel seen even from thousands of miles away. These aren't just memories. They're proof that what we had was real, rare, and worth fighting for."
  },
  {
    id: 7,
    image: '9.jpeg',
    title: 'When I Realized',
    subtitle: 'The Moment That Changed Everything',
    description: "There was a moment when silence became louder than words. I realized I hadn't just lost you — I had lost myself. That emptiness forced me to confront who I was, what I wanted, and how badly I had failed you. Without that pain, I wouldn't have grown into someone worthy of asking for a second chance."
  },
  {
    id: 8,
    image: '10.jpeg',
    title: 'What You Deserve',
    subtitle: 'The Love I Should Have Given',
    description: "You deserve someone who doesn't make you question if you're enough. Someone who sees your worth without needing to test it. Someone who chooses you not out of fear of losing you, but because life feels incomplete without you. I want to be that person — not the one I was, but the one I've become."
  },
  {
    id: 9,
    image: '11.jpeg',
    title: 'The Future I Imagine',
    subtitle: 'If You Give Me a Chance',
    description: "I imagine a future where we don't have to heal from each other — we heal together. Where love feels safe, not suffocating. Where 7,000 kilometers become zero, and I can finally show you in person what words have tried to say for years. I imagine us, not perfect, but real."
  },
  {
    id: 10,
    image: '12.jpeg',
    title: 'Your Happiness',
    subtitle: 'What Matters Most',
    description: "Above everything — my regrets, my hope, my love — your happiness matters most. If moving forward means moving on, I'll accept it. But if there's even a small part of you that still wonders what we could be, I'm asking for that chance. Not to go back. To start new."
  },
  {
    id: 11,
    image: '13.jpeg',
    title: 'Gratitude',
    subtitle: 'For Everything You Were',
    description: "Thank you for believing in me when I was still learning to believe in myself. Thank you for your patience, even when I didn't deserve it. Thank you for teaching me what it means to truly love someone. Even if this is where our story ends, you've left a mark on me that will never fade."
  },
  {
    id: 12,
    image: '1.jpeg',
    title: 'The Question',
    subtitle: 'What Now?',
    description: "We've been through distance, mistakes, silence, and growth. Now I'm standing here, not as the person I was, but as someone who's learned from every failure. The question isn't whether I love you — I do, and I always will. The question is: do you believe we can build something better together?"
  },
  {
    id: 13,
    image: '3.jpeg',
    title: 'This Moment',
    subtitle: 'Right Here, Right Now',
    description: "This isn't just a proposal. It's an invitation. To laugh again. To trust again. To see if what we had can become what we need. No pressure. No urgency. Just honesty, hope, and the belief that some love stories deserve a second chapter."
  }
];

const MemoriesPage = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Memories Header */}
      <section className="memories-header">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Memories
          </motion.h2>
          <motion.p
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Each moment with you has taught me something.<br />
            Here are the memories that shaped us, the ones I carry with gratitude, accountability, and love.
          </motion.p>
        </div>
      </section>

      {/* Memory Cards */}
      {memories.map((memory, index) => (
        <section
          key={memory.id}
          className={`memory-card ${index % 2 !== 0 ? 'reverse' : ''}`}
        >
          <div className="container">
            <motion.div
              className="memory-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="memory-image">
                <img src={`/images/${memory.image}`} alt={memory.title} />
              </div>
              <div className="memory-text">
                <h3 className="memory-title">{memory.title}</h3>
                <p className="memory-subtitle">{memory.subtitle}</p>
                <p className="memory-description">{memory.description}</p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Navigation */}
      <div className="page-navigation">
        <motion.button
          className="nav-btn prev-btn"
          onClick={() => navigate('/intro')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>
        <motion.button
          className="nav-btn next-btn"
          onClick={() => navigate('/lessons')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>
    </motion.main>
  );
};

export default MemoriesPage;
