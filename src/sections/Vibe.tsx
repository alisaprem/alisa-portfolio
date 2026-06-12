import { useState } from 'react';
import { motion } from 'framer-motion';
import FlipCard from '../components/FlipCard';

const cards = [
  { front: 'FLIP ME!', back: '🎨', bg: '#ffd6a5', rotate: -6 },
  { front: 'ME TOO!', back: '✨', bg: '#caffe5', rotate: 4 },
  { front: 'ME AS WELL!', back: '🌱', bg: '#d6c2ff', rotate: -3 },
  { front: 'Me', back: '🤖', bg: '#caffe5', rotate: 8 },
  { front: 'Mee', back: '☕', bg: '#ffd6a5', rotate: -8 },
  { front: 'FLIPME!', back: '🎧', bg: '#ffe066', rotate: 5 },
  { front: 'Vhmm maa too!', back: '📍 Dublin', bg: '#fde2e4', rotate: -4 },
  { front: 'FLIP! FLIP!', back: '💛', bg: '#caffe5', rotate: 7 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

export default function Vibe() {
  const [flipped, setFlipped] = useState<boolean[]>(() => cards.map(() => false));

  const toggle = (i: number) => {
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  const flipAll = () => {
    setFlipped((prev) => {
      const allFlipped = prev.every(Boolean);
      return prev.map(() => !allFlipped);
    });
  };

  return (
    <section className="bg-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl"
        >
          SO...Do you think we vibe?
        </motion.h2>

        <motion.button
          onClick={flipAll}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 rounded-full bg-accent px-6 py-2 font-hand text-xl text-white"
        >
          Flip All
        </motion.button>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          {cards.map((c, i) => (
            <FlipCard
              key={c.front}
              front={c.front}
              back={c.back}
              bg={c.bg}
              rotate={c.rotate}
              flipped={flipped[i]}
              onClick={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
