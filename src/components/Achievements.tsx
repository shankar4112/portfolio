import { motion } from 'framer-motion';
import { Award, Medal, Trophy, Users, BadgeCheck } from 'lucide-react';

const awards = [
  {
    title: "1st Place",
    event: "Thinkathon 2K23",
    description: "Secured first place in the college-level Thinkathon competition.",
    icon: <Trophy className="text-white/80" size={24} />
  },
  {
    title: "2nd Place",
    event: "KEC Hackathon 2K24 & PoC",
    description: "Awarded second place in KEC Hackathon and Proof of Concept event.",
    icon: <Medal className="text-white/80" size={24} />
  }
];

const certifications = [
  {
    title: "MongoDB Associate Developer",
    event: "Certification",
    description: "Official MongoDB certification demonstrating database proficiency.",
    icon: <BadgeCheck className="text-white/80" size={24} />
  },
  {
    title: "Anthropic Claude Code in Action",
    event: "Certification",
    description: "Certification in utilizing Anthropic's Claude AI for practical coding.",
    icon: <Award className="text-white/80" size={24} />
  }
];

const leadership = [
  {
    title: "Treasurer & Exec. Member",
    event: "Cloud Users Group",
    description: "Led the Cloud Users Group as an Executive Member (2023–24) and Treasurer (2024–25).",
    icon: <Users className="text-white/80" size={24} />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Milestones & Honors</h2>
          <div className="w-12 h-[1px] bg-white/20"></div>
        </motion.div>

        <div className="flex flex-col gap-16">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 text-center">Awards & Hackathons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {awards.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.05] group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-xs font-mono mb-4">{item.event}</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {certifications.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.05] group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-xs font-mono mb-4">{item.event}</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8 text-center">Leadership & Clubs</h3>
            <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto">
              {leadership.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/[0.05] group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/40 text-xs font-mono mb-4">{item.event}</p>
                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
