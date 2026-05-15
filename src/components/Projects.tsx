import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'LOCALSHARE',
    description: 'A LAN-based, offline-first file sharing web application. Allows concurrent file transfers across the same Wi-Fi. Features secure PBKDF2/SHA-256 password hashing and an admin-controlled account approval workflow.',
    tech: ['Python', 'Flask', 'Werkzeug', 'JSON'],
    demo: '#',
    github: 'https://github.com/shankar4112'
  },
  {
    title: 'LINGOPAD',
    description: 'Cross-platform desktop language learning app supporting 10+ languages. Features real-time translation, pronunciation feedback via Web Speech API, SQLite storage, and IPC optimization.',
    tech: ['Electron', 'ReactJS', 'SQLite', 'AWS Translate'],
    demo: '#',
    github: 'https://github.com/shankar4112'
  },
  {
    title: 'Student Activity Point Calculator',
    description: 'Automated activity point calculation system utilizing Tesseract OCR for certificate scanning, reducing manual data entry by 70%. Secured with JWT authentication and role-based access.',
    tech: ['Python', 'Flask', 'OCR', 'JWT', 'MongoDB'],
    demo: '#',
    github: 'https://github.com/shankar4112'
  },
  {
    title: 'Stock Market Prediction System',
    description: 'Advanced machine learning pipeline trained on 5+ years of historical data. Achieved 82% directional accuracy. Deployed on AWS with a real-time forecasting API and React dashboard.',
    tech: ['Python', 'Scikit-learn', 'AWS EC2', 'AWS S3', 'React'],
    demo: '#',
    github: 'https://github.com/shankar4112'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works</h2>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass p-8 rounded-2xl flex flex-col h-full hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-semibold mb-3 text-white tracking-tight">{project.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/60 bg-white/5 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-white/5">
                <a href={project.demo} className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
                  <Code size={16} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
