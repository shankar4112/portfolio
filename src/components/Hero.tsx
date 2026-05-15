import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 2.3 },
            scale: { duration: 1, delay: 2.3, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative mb-12 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center mt-8 md:mt-0"
        >
          {/* Outer Orbital Ring */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-12 md:-inset-16 border border-white/10 rounded-full border-dashed"
          />
          {/* Inner Orbital Ring */}
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 md:-inset-8 border border-white/20 rounded-full opacity-50"
          />
          
          {/* Avatar Container with a creative organic blob shape */}
          <div 
            className="w-full h-full glass p-[2px] relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.15)]" 
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          >
            <img 
              src="/16693208299.png" 
              alt="Gowri Shankar V" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-4xl"
        >
          Gowri <span className="text-white/40">Shankar V</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Full Stack Developer | AWS | React | Electron | Machine Learning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="/Gowri_Shankar_Resume.pdf"
            download="Gowri_Shankar_Resume.pdf"
            className="px-8 py-4 rounded-full font-medium border border-white/20 text-white hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Download size={18} /> Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium border border-transparent text-white/60 hover:text-white transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
