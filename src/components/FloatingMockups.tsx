import { motion } from 'framer-motion';

type CardProps = {
  className?: string;
  rotate: number;
  gradient: string;
  delay?: number;
};

function MockCard({ className, rotate, gradient, delay = 0 }: CardProps) {
  return (
    <motion.div
      className={`absolute rounded-xl border-[5px] border-white shadow-xl ${className}`}
      style={{ background: gradient }}
      initial={{ opacity: 0, rotate: rotate * 1.6, y: 40 }}
      animate={{ opacity: 1, rotate, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
    />
  );
}

export default function FloatingMockups() {
  return (
    <motion.div
      className="relative mx-auto h-[260px] w-[340px] sm:h-[300px] sm:w-[400px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <MockCard
        className="left-[10%] top-[8%] h-[180px] w-[240px] bg-white"
        rotate={-16}
        gradient="#ffffff"
        delay={0.1}
      />
      <MockCard
        className="left-[20%] top-[2%] h-[180px] w-[240px]"
        rotate={16}
        gradient="linear-gradient(180deg, #ffcf74 0%, #ffee00 100%)"
        delay={0.25}
      />
      <MockCard
        className="left-[5%] top-[14%] h-[180px] w-[240px]"
        rotate={-6}
        gradient="linear-gradient(180deg, #caffe5 0%, #46eac4 100%)"
        delay={0.4}
      />
      <MockCard
        className="left-[16%] top-[16%] h-[180px] w-[240px] bg-white"
        rotate={9}
        gradient="#ffffff"
        delay={0.55}
      />
    </motion.div>
  );
}
