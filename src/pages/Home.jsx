import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Twitter, Linkedin, Mic, Video, PenTool, Camera, Send, Zap, Eye, Star } from 'lucide-react';

// --- Extreme Utility: Magnetic Wrap ---
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
      {children}
    </motion.div>
  );
};

export default function KavyaUltraExtreme() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // High-Octane Physics
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 50 });
  const skew = useTransform(smoothVelocity, [-1, 1], [-20, 20]);
  const scale = useTransform(smoothVelocity, [-1, 1], [0.9, 1.1]);
  const rotate = useTransform(smoothVelocity, [-1, 1], [-5, 5]);

  return (
    <div ref={containerRef} className="bg-[#000] text-white selection:bg-[#ff0055] selection:text-white font-black italic">
      
      {/* GLOBAL ACID OVERLAY */}
      <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-color-dodge opacity-20 bg-[radial-gradient(circle_at_50%_50%,#00ffff,#ff00ff,#ffff00)] animate-pulse" />

      {/* SECTION 1: THE CRASH HERO */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://magazines.com/wp-content/uploads/2022/10/Placeholder.png')] bg-cover bg-center opacity-10 grayscale brightness-200" />
        
        <motion.div style={{ skew, scale, rotate }} className="relative z-10 flex flex-col items-center">
          <div className="relative group">
            <h1 className="text-[28vw] leading-none uppercase tracking-tighter mix-blend-difference drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]">
              KAVYA
            </h1>
            {/* Glitch Ghosting */}
            <motion.h1 
              animate={{ x: [-5, 5, -5], y: [2, -2, 2], opacity: [0.5, 0.2, 0.5] }}
              transition={{ repeat: Infinity, duration: 0.05 }}
              className="absolute inset-0 text-[#00ffff] z-[-1] translate-x-2"
            >KAVYA</motion.h1>
            <motion.h1 
              animate={{ x: [5, -5, 5], y: [-2, 2, -2], opacity: [0.5, 0.2, 0.5] }}
              transition={{ repeat: Infinity, duration: 0.07 }}
              className="absolute inset-0 text-[#ff00ff] z-[-2] -translate-x-2"
            >KAVYA</motion.h1>
          </div>

          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex gap-4 mt-[-4vw] bg-white text-black px-6 py-2 rotate-[-2deg] text-3xl font-[1000]"
          >
            RJ • PRESENTER • ICON
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-10 flex gap-10 text-xs tracking-[0.5em] text-cyan-400">
          <p>40.7128° N, 74.0060° W</p>
          <p>SCROLL TO DESTROY</p>
        </div>
      </section>

      {/* SECTION 2: THE KINETIC MARQUEE */}
      <div className="bg-[#ccff00] text-black py-10 rotate-[-3deg] scale-110 overflow-hidden flex whitespace-nowrap z-50 relative shadow-[0_0_50px_#ccff00]">
        {[...Array(6)].map((_, i) => (
          <motion.h2 
            key={i}
            animate={{ x: [0, -1000] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="text-9xl font-[1000] uppercase mx-10 flex items-center gap-10"
          >
            MAIN CHARACTER ENERGY <Star size={80} fill="black" />
          </motion.h2>
        ))}
      </div>

      {/* SECTION 3: THE GRID OF FIRE */}
      <section className="min-h-screen py-40 px-4 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 group relative overflow-hidden rounded-[3rem] bg-zinc-900 border-4 border-white/10 p-10">
          <motion.div style={{ skew }} className="space-y-6">
            <span className="text-[#ff0055] text-2xl font-mono tracking-tighter font-bold flex items-center gap-2"><Zap /> SYSTEM_STATUS: ONLINE</span>
            <h2 className="text-[10vw] leading-none uppercase">Sharp <br/> Communication</h2>
            <p className="text-4xl text-zinc-500 font-bold max-w-2xl italic leading-none uppercase">
              Breaking the sound barrier through the airwaves and screens. I don't follow trends. I eat them.
            </p>
          </motion.div>
          <div className="absolute bottom-[-10%] right-[-10%] text-[20vw] opacity-[0.03] pointer-events-none uppercase font-black">STORY</div>
        </div>

        <div className="md:col-span-4 bg-[#ff0055] rounded-[3rem] p-10 flex flex-col justify-between hover:rotate-2 transition-transform shadow-[0_0_80px_rgba(255,0,85,0.4)]">
           <div className="flex justify-between items-start text-black">
             <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-[#ff0055]">
                <Eye size={40} />
             </div>
             <p className="font-bold uppercase text-right leading-none">Visually <br/> Dominant</p>
           </div>
           <h3 className="text-7xl uppercase text-black leading-none">The <br/> Look</h3>
        </div>

        {/* Dynamic Skills Bar */}
        <div className="md:col-span-12 py-10 flex flex-wrap gap-4">
          {['RadioCity', 'Vogue', 'MTV', 'CNN', 'FashionWeek'].map((brand, i) => (
            <Magnetic key={i}>
              <div className="px-12 py-6 border-4 border-white rounded-full text-4xl hover:bg-white hover:text-black transition-all cursor-crosshair">
                {brand}
              </div>
            </Magnetic>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE NEON CONTACT VOID */}
      <section className="min-h-screen py-40 relative flex items-center justify-center overflow-hidden">
        {/* Animated Background Text */}
        <motion.div 
          animate={{ x: [-200, 200] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute text-[30vw] font-black text-white/[0.02] whitespace-nowrap"
        >
          BOOK KAVYA NOW BOOK KAVYA NOW
        </motion.div>

        <motion.div 
          style={{ skew, rotateX: rotate }}
          className="w-full max-w-4xl px-6 relative z-10"
        >
          <div className="bg-white text-black p-10 md:p-20 rounded-[4rem] flex flex-col gap-12 border-[20px] border-[#ccff00]">
            <h2 className="text-8xl md:text-9xl uppercase italic leading-none text-center underline decoration-[#ff0055] underline-offset-8">
              Let's <br/> Rage.
            </h2>
            
            <div className="grid gap-8">
              <input type="text" placeholder="NAME" className="bg-transparent border-b-8 border-black text-4xl md:text-6xl font-black placeholder:text-black/10 outline-none uppercase" />
              <input type="email" placeholder="EMAIL" className="bg-transparent border-b-8 border-black text-4xl md:text-6xl font-black placeholder:text-black/10 outline-none uppercase" />
              <textarea placeholder="THE PROJECT" className="bg-transparent border-b-8 border-black text-4xl md:text-6xl font-black placeholder:text-black/10 outline-none uppercase" rows="1" />
            </div>

            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9, skewX: 20 }}
              className="bg-black text-white p-10 text-5xl font-[1000] uppercase italic rounded-full flex items-center justify-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-[#ff0055] transition-colors"
            >
              SEND IT <Send size={50} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ULTRA FOOTER */}
      <footer className="py-20 px-10 flex flex-col md:flex-row justify-between items-center gap-10 border-t-8 border-[#ccff00]">
        <div className="text-4xl">©2026_KAVYA_CORP</div>
        <div className="flex gap-8">
          {[Instagram, Youtube, Twitter, Linkedin].map((Icon, idx) => (
            <Magnetic key={idx}>
              <Icon size={40} className="hover:text-[#ff0055] transition-colors" />
            </Magnetic>
          ))}
        </div>
        <div className="text-xl uppercase bg-[#ccff00] text-black px-4 font-bold">STAY LOUD</div>
      </footer>
    </div>
  );
}