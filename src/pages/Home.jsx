import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useScroll as useFramerScroll } from 'framer-motion';
import { Instagram, Youtube, Twitter, Zap, ArrowRight, Mic, Video, Camera, Star, Sparkles, Command } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

// --- Funky Component: Parallax Sticker ---
const Sticker = ({ children, initialPos, speed = 0.1 }) => {
  const { scrollYProgress } = useFramerScroll();
  // Individual parallax offset per sticker
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 1000]);

  return (
    <motion.div 
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ ...initialPos, y }}
      whileInView={{ scale: 1 }}
      initial={{ scale: 0, rotate: Math.random() * 40 - 20 }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      className="absolute cursor-grab active:cursor-grabbing z-50 px-4 py-2 bg-yellow-300 text-black font-black border-4 border-black shadow-[8px_8px_0px_#000] uppercase text-xs md:text-sm"
    >
      {children}
    </motion.div>
  );
};

export default function KavyaFunkyVandal() {
  const containerRef = useRef(null);

  // 1. ION-STYLE SMOOTH SCROLL (Lenis Setup)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 400, damping: 50 });
  
  // 2. PARALLAX & KINETIC LOGIC
  const skew = useTransform(smoothVelocity, [-1, 1], [-25, 25]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  
  // Hero Parallax: Text moves slower than background
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  
  // Image Section Parallax
  const imgY = useTransform(scrollYProgress, [0.1, 0.4], [100, -100]);

  return (
    <div ref={containerRef} className="bg-[#ff00ff] text-white selection:bg-[#00ff00] selection:text-black font-black italic overflow-x-hidden">
      
      {/* 1. TOP MARQUEE (SMOOTH KINETIC) */}
      <div className="fixed top-0 w-full bg-black py-2 z-[100] border-b-4 border-black overflow-hidden flex whitespace-nowrap">
        <motion.div style={{ x: marqueeX }} className="flex gap-10">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#00ff00] text-sm md:text-xl uppercase tracking-tighter">
              KAVYA IS LIVE // NO LIMITS // KAVYA IS LIVE // NO LIMITS //
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. STICKER-BOMB HERO (PARALLAX ENABLED) */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <Sticker speed={-0.2} initialPos={{ top: '20%', left: '10%' }}>NOT A BOT 🤖</Sticker>
        <Sticker speed={0.4} initialPos={{ top: '15%', right: '15%' }}>MAIN CHARACTER 💅</Sticker>
        <Sticker speed={0.1} initialPos={{ bottom: '25%', left: '15%' }}>RADIO REBEL 📻</Sticker>
        <Sticker speed={-0.3} initialPos={{ bottom: '20%', right: '10%' }}>VANDAL MODE ⚡</Sticker>

        <motion.div 
          style={{ rotate: heroRotate, skewX: skew, y: heroY }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[28vw] md:text-[22vw] leading-[0.7] tracking-[-0.08em] uppercase drop-shadow-[15px_15px_0px_#000]">
            KAVYA
          </h1>
          <div className="mt-8 flex justify-center gap-4">
            <motion.div 
               whileHover={{ scale: 1.2, rotate: 5 }}
               className="bg-[#00ff00] text-black px-6 py-2 border-4 border-black shadow-[8px_8px_0px_#000] text-xl"
            >
              GEN Z CORE
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-[10%] text-yellow-300 hidden md:block"
        >
          <Sparkles size={80} fill="currentColor" />
        </motion.div>
      </section>

      {/* 3. THE "CLUTTER" SECTION (IMAGE PARALLAX) */}
      <section className="relative bg-white text-black py-48 px-6 md:px-20 z-20 border-y-8 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-7xl md:text-9xl leading-[0.8] uppercase italic tracking-tighter decoration-[#ff00ff] underline decoration-8">
              I SPEAK <br/> FAST. <br/> I LIVE <br/> FASTER.
            </h2>
            <div className="bg-black text-white p-6 md:p-10 rounded-none transform rotate-[-2deg]">
              <p className="text-xl md:text-4xl font-black uppercase italic">
                "I'm the middle finger to boring media."
              </p>
            </div>
          </div>

          <motion.div style={{ y: imgY }} className="md:w-1/2 relative">
             <div className="w-full aspect-square bg-[#00ff00] border-8 border-black shadow-[20px_20px_0px_#ff00ff] flex items-center justify-center overflow-hidden group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                   <span className="text-9xl group-hover:hidden">📸</span>
                   <span className="text-4xl font-black hidden group-hover:block px-10 text-center uppercase">No photos please... jk take ten.</span>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WORK GRID (STAGGERED PARALLAX) */}
      <section className="bg-black py-32 px-6">
        <h2 className="text-[#00ff00] text-5xl md:text-8xl mb-20 uppercase flex items-center gap-4">
          THE FLEX <Star fill="#00ff00" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "RADIO_GAGA", brand: "RADIO CITY", color: "bg-blue-500", icon: <Mic />, pSpeed: -50 },
            { title: "TV_CHAOS", brand: "MTV IND", color: "bg-[#ff00ff]", icon: <Video />, pSpeed: 50 },
            { title: "VOGUE_RUN", brand: "LFW", color: "bg-yellow-300", icon: <Camera />, pSpeed: -30 },
            { title: "NEWS_RIOT", brand: "VICE", color: "bg-white", icon: <Zap />, pSpeed: 70 }
          ].map((item, i) => (
            <ParallaxWrapper key={i} offset={item.pSpeed}>
              <motion.div 
                whileHover={{ x: 10, y: -10, boxShadow: "0px 0px 0px #000" }}
                className={`${item.color} p-10 border-8 border-black shadow-[15px_15px_0px_#00ff00] text-black group transition-all`}
              >
                <div className="flex justify-between items-start mb-16">
                  <div className="p-4 bg-black text-white">{item.icon}</div>
                  <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform" />
                </div>
                <h3 className="text-5xl md:text-7xl font-[1000] uppercase italic leading-none">{item.title}</h3>
                <p className="mt-4 font-mono font-bold tracking-widest uppercase">{item.brand}</p>
              </motion.div>
            </ParallaxWrapper>
          ))}
        </div>
      </section>

      {/* 5. FOOTER & CONTACT */}
      <section className="py-32 px-6 bg-[#00ff00] text-black border-t-8 border-black relative z-30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-[10vw] font-[1000] uppercase italic leading-none drop-shadow-[8px_8px_0px_#ff00ff]"
          >
            DON'T <br/> BE <br/> SHY.
          </motion.h2>
          {/* ... Form UI stays same ... */}
        </div>
      </section>
      {/* 5. FOOTER & SOCIAL CHAOS */}
      {/* 5. STYLE B: THE "STREET POSTER" FOOTER */}
   {/* 5. STYLE C: THE "TERMINAL-GLITCH" FOOTER */}
   {/* 5. STYLE G: THE "KINETIC NEWSPRINT" (SINGLE BLOCK) */}
     {/* 5. STYLE H: THE "GLITCH-POP CATALOG" (SINGLE BLOCK) */}
      <footer className="relative bg-black text-white pt-32 pb-12 overflow-hidden border-t-[20px] border-[#ff00ff]">
        
        {/* HUGE TILTED BG TEXT */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
          <h2 className="text-[40vw] font-[1000] uppercase -rotate-12 translate-y-20 leading-none">
            BYE.
          </h2>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-white">
            
            {/* LEFT: THE CALL TO ACTION */}
            <div className="lg:col-span-7 p-8 md:p-16 bg-white text-black border-b-4 lg:border-b-0 lg:border-r-4 border-white flex flex-col justify-between">
              <div>
                <h3 className="text-7xl md:text-[10vw] font-[1000] leading-[0.8] uppercase italic mb-8">
                  STAY <br/> <span className="bg-black text-[#00ff00] px-4">LOUD.</span>
                </h3>
                <p className="text-2xl font-black uppercase max-w-md leading-tight">
                  I don't check my DMs. I check my invoices. Reach out for real work only.
                </p>
              </div>

              <div className="mt-20 space-y-4">
                 <p className="font-mono font-bold text-xs uppercase opacity-50 tracking-[0.5em]">Direct_Communication_Layer</p>
                 <a href="mailto:yo@kavya.live" className="block text-4xl md:text-5xl font-black hover:text-[#ff00ff] transition-colors break-all underline decoration-4">
                    YO@KAVYA.LIVE
                 </a>
                 <a href="tel:+919876543210" className="block text-4xl md:text-5xl font-black hover:text-[#00ff00] transition-colors">
                    +91 98765 43210
                 </a>
              </div>
            </div>

            {/* RIGHT: THE SOCIAL STACK */}
            <div className="lg:col-span-5 flex flex-col divide-y-4 divide-white">
              <motion.a whileHover={{ backgroundColor: "#ff00ff", color: "#000" }} href="#" className="flex-1 p-10 flex items-center justify-between group transition-colors">
                <span className="text-5xl font-black italic">INSTA</span>
                <Instagram size={48} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
              
              <motion.a whileHover={{ backgroundColor: "#00ff00", color: "#000" }} href="#" className="flex-1 p-10 flex items-center justify-between group transition-colors">
                <span className="text-5xl font-black italic">YOUTUBE</span>
                <Youtube size={48} className="group-hover:scale-125 transition-transform" />
              </motion.a>

              <motion.a whileHover={{ backgroundColor: "#0000ff", color: "#fff" }} href="#" className="flex-1 p-10 flex items-center justify-between group transition-colors">
                <span className="text-5xl font-black italic">TWITTER</span>
                <Twitter size={48} className="group-hover:-translate-y-2 transition-transform" />
              </motion.a>

              <motion.a whileHover={{ backgroundColor: "#ffff00", color: "#000" }} href="#" className="flex-1 p-10 flex items-center justify-between group transition-colors">
                <span className="text-5xl font-black italic">RIOT</span>
                <Zap size={48} fill="currentColor" />
              </motion.a>
            </div>
          </div>

          {/* THE "MANIFESTO" BAR */}
          <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12 font-mono">
            <div className="md:w-1/3">
              <p className="text-xs font-black uppercase leading-relaxed">
                Kavya is a multi-disciplinary vandal operating in the intersection of radio, 
                broadcast, and digital chaos. Built on Gen-Z core principles and 
                high-velocity media consumption.
              </p>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex gap-1 mb-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-6 bg-[#00ff00]" />
                ))}
              </div>
              <p className="text-sm font-black italic">VER_03.2026 // KAVYA_VANDAL_PORTFOLIO</p>
              <p className="text-[10px] opacity-40">SCROLL TO TOP FOR ANOTHER ROUND</p>
            </div>
          </div>

        </div>

        {/* FLOATING DECORATIVE STRIP */}
        <div className="mt-12 w-full h-8 bg-[#00ff00] flex items-center overflow-hidden">
           <motion.div 
            animate={{ x: [0, -500] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10 text-black font-black text-sm italic"
           >
              {[...Array(20)].map((_, i) => (
                <span key={i}>KAVYA KAVYA KAVYA KAVYA KAVYA KAVYA KAVYA KAVYA</span>
              ))}
           </motion.div>
        </div>
      </footer>
    </div>
  );
}

// Simple Parallax Helper for Grid Items
function ParallaxWrapper({ children, offset }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return <motion.div ref={ref} style={{ y }}>{children}</motion.div>;
}