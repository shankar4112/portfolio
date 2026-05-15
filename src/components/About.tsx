import { motion } from 'framer-motion';

const stats = [
  { label: 'Kongu Engineering College', value: 'B.E. CSE', sub: 'CGPA: 7.85 | 2026' },
  { label: 'Adharsh Vidhyalaya (CBSE)', value: 'HSC', sub: 'Score: 77% | 2022' },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Crafting <span className="text-white/40">elegant</span> solutions to complex problems.
            </h2>
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
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
        </motion.div>
      </div>
    </section>
  );
}
