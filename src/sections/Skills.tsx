import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

const skills = [
  ['Product Design (Websites, Apps, Platforms)', 'UX Research', 'Design Systems'],
  ['Figma', 'Claude, Midjourney', 'Tableau, R Studio'],
  ['Cross-functional Communication', 'Design Articulation', 'Independent Ownership'],
];

function StackOfCards() {
  const cards = [
    { rotate: -14, gradient: 'linear-gradient(135deg, #ffd6a5, #ff9770)', x: -40 },
    { rotate: 8, gradient: 'linear-gradient(135deg, #caffe5, #46eac4)', x: 20 },
    { rotate: -4, gradient: 'linear-gradient(135deg, #fde2e4, #c084fc)', x: -10 },
    { rotate: 12, gradient: 'linear-gradient(135deg, #ffe066, #ffcf74)', x: 35 },
  ];

  return (
    <div className="relative mx-auto h-[180px] w-[220px]">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-[110px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-lg border-4 border-white shadow-lg"
          style={{ background: c.gradient }}
          initial={{ opacity: 0, rotate: 0, x: 0, y: 30 }}
          whileInView={{ opacity: 1, rotate: c.rotate, x: c.x, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="bg-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="text-2xl sm:text-3xl"
        >
          Here's what I bring to the table...!
        </motion.h2>

        <div className="mt-12">
          <StackOfCards />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mt-16 divide-y divide-card border-t border-card"
        >
          {skills.map((row, i) => (
            <div key={i} className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3">
              {row.map((item) => (
                <motion.p
                  key={item}
                  variants={fadeUp}
                  className="text-base"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
