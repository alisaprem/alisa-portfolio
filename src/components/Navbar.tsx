import { motion } from 'framer-motion';
import Squiggle from './Squiggle';

type NavbarProps = {
  dark?: boolean;
};

export default function Navbar({ dark = false }: NavbarProps) {
  const linkColor = dark ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink';

  return (
    <header className="relative z-20 flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <a href="#top" className="relative inline-block">
        <span className="font-hand text-4xl sm:text-5xl">Alisa</span>
        <Squiggle className="absolute -bottom-2 left-0 h-3 w-full" color={dark ? '#fff' : '#1a1a1a'} />
      </a>

      <nav className="flex items-center gap-8 text-lg">
        <motion.a
          href="#works"
          whileHover={{ y: -2 }}
          className={`transition-colors ${linkColor}`}
        >
          Works
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ y: -2 }}
          className={`transition-colors ${linkColor}`}
        >
          About
        </motion.a>
      </nav>
    </header>
  );
}
