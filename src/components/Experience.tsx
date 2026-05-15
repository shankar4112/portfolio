import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Student Intern',
    company: 'SYSTIMANX PVT. LTD.',
    period: 'Jun 2024 - Oct 2024 | Remote',
    description: 'Built a stock market prediction app using Python and scikit-learn trained on 5+ years of historical data. Achieved around 82% directional accuracy on test splits. Deployed ML pipeline using AWS EC2 and S3, reducing inference latency by 35%. Created real-time forecasting API integrated with React dashboard.',
  },
  {
    title: 'Freelance Developer',
    company: 'Dr. Gayathri Portfolio (KMCH Erode)',
    period: 'Jan 2025 | Remote',
    description: 'Developed responsive single-page portfolio website using HTML5, CSS3, and JavaScript. Achieved 98/100 Google PageSpeed score. Added smooth scrolling, testimonials carousel, and contact form validation.',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-white/40 text-sm font-medium">{exp.company}</span>
              </div>
              
              <div className="text-sm text-white/30 mb-4 font-mono">{exp.period}</div>
              <p className="text-white/60 font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
