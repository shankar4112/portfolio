import { motion } from 'framer-motion';

const stats = [
  { label: 'Kongu Engineering College', value: 'B.E. CSE', sub: 'CGPA: 7.85 | 2026' },
  { label: 'Adharsh Vidhyalaya (CBSE)', value: 'HSC', sub: 'Score: 77% | 2022' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 relative group"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass p-2 relative z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white/5 relative">
                <img 
                  src="/16693208299.jpg" 
                  alt="Gowri Shankar V" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -z-10 inset-0 bg-white/5 blur-3xl rounded-full scale-90 group-hover:bg-white/10 transition-colors duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Crafting <span className="text-white/40">elegant</span> solutions to complex problems.
            </h2>
            <div className="w-12 h-[1px] bg-white/20 mb-8"></div>
            <p className="text-white/60 leading-relaxed font-light text-lg mb-6">
              I am Gowri Shankar V, a passionate Full Stack Developer focused on building scalable web 
              applications, desktop applications, and intelligent systems. I enjoy creating elegant 
              user experiences with modern UI design and solving real-world problems through software.
            </p>
            <p className="text-white/60 leading-relaxed font-light text-lg">
              My expertise spans across modern web technologies like React, powerful desktop applications 
              with Electron, scalable architectures on AWS, and integrating Machine Learning 
              models seamlessly using tools like Flask and Python.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-center items-start group hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform origin-left text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 mb-1 font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-white/40 tracking-wider uppercase">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
