import { motion } from 'framer-motion';
import { Code, Briefcase, Mail, Send, TerminalSquare } from 'lucide-react';

export default function Contact() {
  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    
    const subject = `Portfolio Contact from ${name}`;
    const body = `Hi Gowri Shankar,\n\nI'm ${name} (${email}).\n\n${message}`;
    
    // Using the universal Gmail compose link so it works for all visitors
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shankar4112004@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Start a Conversation</h2>
          <div className="w-12 h-[1px] bg-white/20 mb-6"></div>
          <p className="text-white/50 max-w-lg font-light text-sm md:text-base">
            Whether you have a question, an idea for a project, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col space-y-6"
          >
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shankar4112004@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium">shankar4112004@gmail.com</span>
            </a>
            
            <a href="https://github.com/shankar4112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Code size={18} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a href="https://linkedin.com/in/shankar4112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <Briefcase size={18} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a href="https://leetcode.com/shankar4112" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                <TerminalSquare size={18} />
              </div>
              <span className="text-sm font-medium">LeetCode</span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                className="block px-0 py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block px-0 py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className="block px-0 py-3 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-end">
              <button
                onClick={handleEmail}
                className="group relative px-6 py-3 bg-white text-black rounded-full font-medium overflow-hidden flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
