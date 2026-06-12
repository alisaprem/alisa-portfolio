import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const;

function PhotoCollage() {
  const photos = [
    { rotate: -10, gradient: 'linear-gradient(135deg, #ffd6a5, #ff9770)', x: -60, y: 10 },
    { rotate: 6, gradient: 'linear-gradient(135deg, #caffe5, #46eac4)', x: 30, y: -10 },
    { rotate: -3, gradient: 'linear-gradient(135deg, #d3e9fe, #74baff)', x: 80, y: 30 },
    { rotate: 12, gradient: 'linear-gradient(135deg, #fde2e4, #c084fc)', x: -10, y: 40 },
  ];

  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[420px] sm:h-[320px]">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-[180px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-lg border-4 border-white shadow-xl"
          style={{ background: p.gradient }}
          initial={{ opacity: 0, rotate: 0, x: 0, y: 40 }}
          whileInView={{ opacity: 1, rotate: p.rotate, x: p.x, y: p.y }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
        />
      ))}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 -rotate-6 rounded-md bg-white px-3 py-2 text-center text-xs font-medium leading-relaxed shadow-md"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
      >
        Designer<br />Creator<br />Thinker<br />Builder
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-12 flex flex-col items-center gap-2 text-center"
        >
          <div className="text-3xl">🧭</div>
          <h2 className="text-2xl">The person behind the screen!</h2>
          <p className="text-base text-accent">
            <a href="mailto:premalisa6@gmail.com" className="underline decoration-from-font">
              premalisa6@gmail.com
            </a>
            {' | '}
            <a
              href="https://www.linkedin.com/in/alisaprem/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-from-font"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <PhotoCollage />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex flex-col gap-4 text-left"
          >
            <p className="text-base leading-relaxed">
              I spent 3 years making enterprise data heavy products feel less terrifying at American
              Express GBT, now I'm in Dublin doing an MSc in HCI @UCD, going to events, meetings new
              people, hunting for best vegan spots in the city, or building some chaotic little AI
              thing that may or may not work.
            </p>
            <a href="#" className="text-base italic text-accent underline decoration-from-font">
              Take a look at my adventures at UCD &amp; my life in Dublin!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
