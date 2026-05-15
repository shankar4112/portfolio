import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import CursorGlow from './components/CursorGlow';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optionally trigger something on mount
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <div className="noise-bg" />
      
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CursorGlow />
          <Background3D />
          <Navbar />
          <main className="relative z-10 flex flex-col items-center w-full">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>
          
          <footer className="relative z-10 py-8 text-center text-sm text-white/40 border-t border-white/5 mt-20 w-full">
            <p>© {new Date().getFullYear()} Gowri Shankar V. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
