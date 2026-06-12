import { motion } from 'framer-motion';

type FlipCardProps = {
  front: string;
  back: string;
  bg: string;
  rotate: number;
  flipped: boolean;
  onClick: () => void;
};

export default function FlipCard({ front, back, bg, rotate, flipped, onClick }: FlipCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative h-24 w-40 cursor-pointer [perspective:800px] sm:h-28 sm:w-48"
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="relative h-full w-full rounded-lg shadow-md [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg p-3 font-hand text-xl [backface-visibility:hidden] sm:text-2xl"
          style={{ background: bg }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg p-3 text-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: bg }}
        >
          {back}
        </div>
      </motion.div>
    </motion.button>
  );
}
