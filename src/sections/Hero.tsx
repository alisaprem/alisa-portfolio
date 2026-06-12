import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Squiggle from '../components/Squiggle';
import FloatingMockups from '../components/FloatingMockups';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#fffeee]">
      <Navbar />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 pt-6 text-center sm:pb-28">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-hand text-[80px] leading-none sm:text-[120px] lg:text-[160px]">
            Alisa
          </h1>
          <Squiggle className="absolute -bottom-2 left-1/2 h-4 w-40 -translate-x-1/2 sm:w-56" />
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FloatingMockups />
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="text-2xl text-[#747474]"
          >
            Hi I am Alisa
          </motion.p>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            A Creative Product Designer who brings clarity to your ideas
          </motion.h2>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="flex items-center gap-5"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-ink px-6 py-2 text-base font-medium"
            >
              View my work
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-ink px-6 py-2 text-base font-bold text-white"
            >
              Contact me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
