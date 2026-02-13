import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    image: '4.jpeg',
    title: 'After the first connect',
    subtitle: 'Your First Birthday After We Connected, 2020',
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
    image: '9.jpeg',
    title: 'When You Saved Me',
    subtitle: 'The Call That Changed Everything',
    description: "When I was at my lowest point — my company went bankrupt, and I felt like I had lost everything — your phone call gave me hope and strength to believe in life again. You didn't just listen; you made me feel like I wasn't alone in the darkness. You were my light when I couldn't find my own."
  },
  {
    id: 4,
    type: 'video',
    image: 'video_1.mp4',
    title: 'When I Fell Completely',
    subtitle: 'Your Innocence Captured My Heart',
    description: "This is the day I completely fell for your innocence. There was something pure, genuine, and beautiful about the way you were — no pretense, no walls, just you. In that moment, I knew I had found something rare. Someone whose heart was as beautiful as her smile."
  },
  {
    id: 5,
    image: '8.jpeg',
    title: 'Realization',
    subtitle: 'The Day I Realized You Are My Life Long Vitamin',
    description: "The day when I realized you are the real Vitamin of my life — the one who boosts me, energizes me, and makes everything better. You're not just someone I love; you're someone I see my entire life with. You give me strength when I'm weak, hope when I'm lost, and purpose when I feel empty."
  },
  {
    id: 6,
    image: '5.jpeg',
    title: 'More Valuable Than Time',
    subtitle: 'You Are My Most Precious Treasure',
    description: "People say time is the most valuable thing in this world. But you... you are more valuable than time itself. Every second with you is worth more than all the moments I've lived without you. This isn't just about minutes or hours — it's about how you make every moment matter."
  },
  {
    id: 7,
    type: 'video',
    image: 'video_2.mp4',
    title: 'The Video Calls I Replay',
    subtitle: 'My Favorite Moments Despite the Distance',
    description: "The video calls with you are the moments I replay most in my heart. Though 6,345 kilometers separated us, I never forgot you — not for a second. These calls weren't just conversations; they were lifelines, glimpses of your smile, echoes of your laughter that made distance feel a little less cruel. Every time we connected, even through a screen, you made me happier than I knew how to express. These weren't just calls. They were proof that distance could never erase what we had."
  },
  {
    id: 8,
    image: '6.jpeg',
    title: 'My Dream With You',
    subtitle: "Vitamin S, Baby Girl, Let's Travel the World",
    description: "My Vitamin S, my baby girl — these aren't just names I call you. They're promises. You energize my soul and fill my heart with purpose. I dream of traveling the world with you, exploring every corner of this earth together, making memories in places we've only talked about. Distance and mistakes taught me lessons I needed to learn, but they also taught me this: I don't want to see the world without you. I want to hold your hand through every adventure, every sunset, every new city. Let's make this dream real."
  },
  {
    id: 9,
    image: '10.jpeg',
    title: 'Awestruck',
    subtitle: 'You in Red',
    description: "I was completely awestruck seeing you in that traditional red saree. You looked so beautiful, so elegant, so radiant. In that moment, I couldn't breathe. I couldn't speak. I could only stand there, mesmerized by how someone could be so effortlessly stunning. You didn't just wear that saree — you owned it."
  },
  {
    id: 10,
    image: '11.jpeg',
    title: 'Your Smile in Red',
    subtitle: 'When I Almost Fainted in Love',
    description: "Your smile in that red saree... I almost fainted in love. It wasn't just about how you looked — it was about the joy in your eyes, the confidence in your smile, the way you glowed from within. That image is etched in my heart forever. You were, and still are, absolutely breathtaking."
  },
  {
    id: 11,
    image: '12.jpeg',
    title: 'Cooking for You',
    subtitle: 'The Love I Want to Serve',
    description: "I cook nicely — not better than you, of course, but well enough to make you smile. Whenever you're feeling low, whenever you're hungry or just need comfort, I want to cook for you. I want to feed you with my own hands, watch you enjoy every bite, and know that I'm the reason you feel cared for and loved."
  },
  {
    id: 12,
    image: '1.jpeg',
    title: 'Your Glow',
    subtitle: 'The Day at the Chinese Restaurant',
    description: "This day we went out to your favorite Chinese cuisine restaurant. Your parents sent you, and your glow that day was unmatchable. You radiated happiness, warmth, and beauty in a way that stopped time. I took this picture not just as a memory, but as proof that heaven exists — and it looks like your smile."
  },
  {
    id: 13,
    image: '3.jpeg',
    title: 'Innocence from the Start',
    subtitle: 'Your Childhood Cuteness',
    description: "How cute you were from childhood! This picture of little you makes my heart melt. Even back then, there was something special about you — the innocence, the sweetness, the pure joy in your eyes. You've always been beautiful, inside and out, from the very beginning."
  },
  {
    id: 14,
    image: '13.jpeg',
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
                {memory.type === 'video' ? (
                  <video 
                    src={`/videos/${memory.image}`} 
                    autoPlay
                    muted
                    controls 
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img src={`/images/${memory.image}`} alt={memory.title} />
                )}
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
