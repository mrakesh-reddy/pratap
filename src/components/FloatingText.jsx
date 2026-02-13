import { motion } from 'framer-motion';

const FloatingText = () => {
  const texts = [
    "Baby girl, I fall for you every single day...",
    "Vitamin S, your smile is the reason my heart still beats...",
    "Salu, you changed my world and gave me vision...",
    "Baby girl, every word here comes from the depths of my soul...",
    "Saloni, distance couldn't break us, time couldn't erase you...",
    "Vitamin S, in your eyes I found my forever home...",
    "Baby girl, you are my greatest blessing...",
    "Salu, every moment without you taught me your worth...",
    "Saloni, if I could turn back time, I'd choose you sooner...",
    "Vitamin S, you're not just my love, you're my life's purpose...",
    "Baby girl, my heart belongs to you forever...",
    "Salu, you make every moment worth living...",
    "Saloni, loving you is the best decision I ever made...",
    "Vitamin S, you complete me in ways I never knew I needed..."
  ];

  return (
    <div className="floating-text-container">
      {texts.map((text, index) => (
        <motion.div
          key={index}
          className="floating-text"
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ]
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear"
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingText;
