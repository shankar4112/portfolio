import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "MySQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ReactJS", "NodeJS", "Flask", "Tailwind CSS", "Electron"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "AWS S3", "AWS VPC", "AWS ECS", "Docker", "Git", "Postman"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQLite", "DynamoDB", "Firebase"]
  },
  {
    title: "Core Concepts",
    skills: ["REST APIs", "JWT Authentication", "OCR", "Machine Learning", "CI/CD"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Technical Arsenal</h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i * 0.1) + (j * 0.05) }}
                    className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm text-sm text-white/80 hover:bg-white/10 hover:border-white/30 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
