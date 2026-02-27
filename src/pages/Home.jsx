import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame } from 'framer-motion';
import { Instagram, Youtube, Twitter, Zap, ArrowRight, Eye, Volume2, Command, Target } from 'lucide-react';

// --- Extreme Utility: Fluid Text Mask ---
const ScrambleText = ({ text }) => {
  return (
    <motion.span 
      whileHover={{ scaleY: 1.5, skewX: 20 }}
      className="inline-block transition-all duration-75 hover:text-[#00ff00]"
    >
      {text}
    </motion.span>
  );
};

export default function KavyaCyberVandal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // High-Inertia Physics
  const velocitySpring = useSpring(scrollVelocity, { stiffness: 600, damping: 100 });
  const skew = useTransform(velocitySpring, [-1, 1], [-25, 25]);
  const tunnelZ = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const bgFlash = useTransform(scrollYProgress, [0, 0.5, 1], ["#000", "#1a0033", "#000"]);

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgFlash }}
      className="text-white selection:bg-[#00ff00] selection:text-black font-black italic overflow-x-hidden cursor-crosshair"
    >
      
      {/* SCANLINE EFFECT */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* SECTION 1: THE WARP HERO */}
      <section className="h-[150vh] relative flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: useTransform(scrollYProgress, [0, 0.3], [1, 5]), opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
          className="fixed z-10 text-center"
        >
          <div className="relative inline-block">
            <h1 className="text-[30vw] leading-[0.7] tracking-tighter uppercase font-[1000] mb-0 shadow-cyan-500/50 drop-shadow-2xl">
              KAVYA
            </h1>
            <motion.div 
               animate={{ x: [-10, 10, -10] }} 
               transition={{ repeat: Infinity, duration: 0.02 }}
               className="absolute top-0 left-0 w-full h-full text-[#ff0000] opacity-30 mix-blend-screen"
            >
              <h1 className="text-[30vw] leading-[0.7] tracking-tighter uppercase font-[1000]">KAVYA</h1>
            </motion.div>
          </div>
          
          <div className="flex justify-center gap-10 mt-10">
            {["RADIO", "VIDEO", "JOURNAL", "MODEL"].map((v) => (
              <span key={v} className="text-2xl border-2 border-white px-4 py-1 hover:bg-[#00ff00] hover:text-black transition-all">
                {v}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating Background Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 w-1 h-20"
              initial={{ top: Math.random() * 100 + "%", left: Math.random() * 100 + "%" }}
              animate={{ y: [0, 1000] }}
              transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: THE DATA LEAK (ABOUT) */}
      <motion.section style={{ skewY: skew }} className="min-h-screen py-40 px-6 relative bg-white text-black z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 border-8 border-black">
          <div className="p-12 border-b-8 lg:border-b-0 lg:border-r-8 border-black flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 bg-black text-white w-fit px-3 py-1 animate-bounce">
                <Zap size={20} fill="white" /> LIVE_NOW
              </div>
              <h2 className="text-[12vw] lg:text-[8vw] font-[1000] leading-none uppercase italic tracking-tighter">
                UNFILTERED <br/> AUDACITY.
              </h2>
            </div>
            <p className="text-3xl font-bold uppercase leading-tight mt-20">
              The voice of a generation that doesn't sleep. Kavya is a cross-media anomaly.
            </p>
          </div>
          
          <div className="relative h-full min-h-[500px] bg-[#00ff00] overflow-hidden group">
            <motion.div 
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-full h-full flex items-center justify-center text-8xl font-black text-black/20"
            >
              [RAW_FILES]
            </motion.div>
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase">REC_MODE: AUTO</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: THE VORTEX (WORK) */}
      <section className="py-60 bg-black overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#00ff00]/20 to-transparent z-10" />
        
        <div className="flex flex-col gap-10">
          {[
            { tag: "01", title: "RADIO_REBEL", brand: "RADIO CITY", bg: "bg-blue-600" },
            { tag: "02", title: "FASHION_KILL", brand: "VOGUE", bg: "bg-fuchsia-600" },
            { tag: "03", title: "NEWS_VANDAL", brand: "VICE", bg: "bg-[#ccff00]" },
            { tag: "04", title: "SCREEN_HOST", brand: "MTV", bg: "bg-orange-500" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.95, x: 100 }}
              className="flex items-center gap-10 border-y border-white/10 py-10 px-10 group cursor-pointer overflow-hidden relative"
            >
              <span className="text-4xl font-mono text-white/20 group-hover:text-[#00ff00] transition-colors">{item.tag}</span>
              <h3 className="text-[12vw] font-[1000] uppercase leading-none italic group-hover:tracking-widest transition-all duration-500">
                {item.title}
              </h3>
              <div className="absolute right-20 opacity-0 group-hover:opacity-100 transition-all flex items-center gap-4">
                <span className="text-2xl font-black">{item.brand}</span>
                <ArrowRight size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE VOID (BOOKING) */}
      <section className="min-h-screen py-40 flex items-center justify-center relative px-6">
        <div className="w-full max-w-6xl grid lg:grid-cols-12 items-center gap-20">
          
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-9xl font-black uppercase italic tracking-tighter leading-none">
              HIRE <br/> THE <br/> <span className="text-[#00ff00]">CHAOS.</span>
            </h2>
            <div className="flex gap-10">
              <motion.div whileHover={{ y: -10 }} className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-white/40">Ping Me</span>
                <Instagram size={40} className="hover:text-[#00ff00]" />
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-white/40">Watch Me</span>
                <Youtube size={40} className="hover:text-[#ff0000]" />
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="flex flex-col gap-2">
                <span className="text-xs font-mono uppercase text-white/40">Follow Me</span>
                <Twitter size={40} className="hover:text-cyan-400" />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#00ff00] text-black p-10 lg:p-20 skew-x-[-5deg] rotate-[-2deg] shadow-[30px_30px_0px_white]">
            <form className="space-y-10">
              <div className="space-y-2 border-b-4 border-black">
                <p className="text-xs font-mono font-bold uppercase">Identity</p>
                <input type="text" placeholder="NAME_HERE" className="w-full bg-transparent p-4 text-4xl font-black uppercase placeholder:text-black/30 outline-none" />
              </div>
              <div className="space-y-2 border-b-4 border-black">
                <p className="text-xs font-mono font-bold uppercase">Transmission</p>
                <input type="email" placeholder="EMAIL_ADDRESS" className="w-full bg-transparent p-4 text-4xl font-black uppercase placeholder:text-black/30 outline-none" />
              </div>
              <motion.button 
                whileHover={{ scale: 0.9, skewX: 10 }}
                whileTap={{ scale: 1.1 }}
                className="w-full bg-black text-[#00ff00] p-10 text-5xl font-black uppercase italic tracking-tighter flex justify-between items-center"
              >
                DEPLOY <Command size={48} />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* SYSTEM_SHUTDOWN FOOTER */}
      <footer className="py-10 border-t-2 border-white/10 flex justify-between px-10 items-center bg-black">
        <div className="flex gap-2 items-center text-[#00ff00] animate-pulse">
          <Target size={20} /> <span className="font-mono text-xs uppercase tracking-[0.5em]">System_Online: Kavya_v4.0</span>
        </div>
        <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
          No Cookies. No tracking. Just vibes. © 2026
        </p>
      </footer>
    </motion.div>
  );
}