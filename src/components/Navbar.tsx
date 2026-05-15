import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-white">
          GS<span className="text-white/50">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-1">
          <div className="glass px-6 py-3 rounded-full flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:scale-105 transition-transform duration-300"
        >
          Let's Talk
        </a>

        {/* Mobile menu button could go here */}
      </div>
    </motion.nav>
  );
}
