import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import { Instagram, Youtube, Twitter, Zap, ArrowRight, Mic, Video, Camera, Star, Sparkles } from 'lucide-react';
import Lenis from '@studio-freight/lenis';

// --- Funky Component: Parallax Sticker ---
const Sticker = ({ children, initialPos, speed = 0.1 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 600]);

  return (
    <motion.div 
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ ...initialPos, y }}
      initial={{ scale: 0, rotate: Math.random() * 40 - 20 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 0 }}
      className="absolute cursor-grab active:cursor-grabbing z-40 px-3 py-1 md:px-4 md:py-2 bg-yellow-300 text-black font-black border-2 md:border-4 border-black shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] uppercase text-[10px] md:text-sm whitespace-nowrap"
    >
      {children}
    </motion.div>
  );
};

export default function KavyaFunkyVandal() {
  const containerRef = useRef(null);

  // 1. SMOOTH SCROLL (Lenis Setup)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2, // Better feel on mobile touch
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
  
  const skew = useTransform(smoothVelocity, [-1, 1], [-15, 15]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const imgY = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);

  return (
    <div ref={containerRef} className="bg-[#ff00ff] text-white selection:bg-[#00ff00] selection:text-black font-black italic overflow-x-hidden w-full">
      
      {/* 1. TOP MARQUEE */}
      <div className="fixed top-0 w-full bg-black py-2 z-[100] border-b-2 md:border-b-4 border-black overflow-hidden flex whitespace-nowrap">
        <motion.div style={{ x: marqueeX }} className="flex gap-4 md:gap-10">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[#00ff00] text-xs md:text-xl uppercase tracking-tighter">
              KAVYA IS LIVE // NO LIMITS // KAVYA IS LIVE // NO LIMITS //
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-10 overflow-hidden px-4">
        {/* Adjusted Sticker Positions for Mobile */}
        <Sticker speed={-0.1} initialPos={{ top: '15%', left: '5%' }}>NOT A BOT 🤖</Sticker>
        <Sticker speed={0.2} initialPos={{ top: '12%', right: '5%' }}>MAIN CHARACTER 💅</Sticker>
        <Sticker speed={0.05} initialPos={{ bottom: '15%', left: '8%' }}>RADIO REBEL 📻</Sticker>
        <Sticker speed={-0.15} initialPos={{ bottom: '18%', right: '8%' }}>VANDAL ⚡</Sticker>

        <motion.div 
          style={{ skewX: skew, y: heroY }}
          className="relative z-10 text-center w-full"
        >
          <h1 className="text-[26vw] md:text-[22vw] leading-[0.8] tracking-[-0.08em] uppercase drop-shadow-[8px_8px_0px_#000] md:drop-shadow-[15px_15px_0px_#000]">
            KAVYA
          </h1>
          <div className="mt-6 md:mt-8 flex justify-center">
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="bg-[#00ff00] text-black px-4 py-2 md:px-6 md:py-2 border-2 md:border-4 border-black shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] text-sm md:text-xl"
            >
              GEN Z CORE
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-[5%] text-yellow-300 opacity-50 md:opacity-100"
        >
          <Sparkles size={40} className="md:w-20 md:h-20" fill="currentColor" />
        </motion.div>
      </section>

      {/* 3. CLUTTER SECTION */}
      <section className="relative bg-white text-black py-20 md:py-48 px-4 md:px-20 z-20 border-y-4 md:border-y-8 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-5xl md:text-9xl leading-[0.9] uppercase italic tracking-tighter decoration-[#ff00ff] underline decoration-4 md:decoration-8">
              I SPEAK <br/> FAST. <br/> I LIVE <br/> FASTER.
            </h2>
            <div className="bg-black text-white p-6 md:p-10 rounded-none transform rotate-[-1deg] md:rotate-[-2deg]">
              <p className="text-lg md:text-4xl font-black uppercase italic leading-tight">
                "I'm the middle finger to boring media."
              </p>
            </div>
          </div>

          <motion.div style={{ y: imgY }} className="w-full md:w-1/2 relative">
             <div className="w-full aspect-square bg-[#00ff00] border-4 md:border-8 border-black shadow-[10px_10px_0px_#ff00ff] md:shadow-[20px_20px_0px_#ff00ff] flex items-center justify-center overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} className="w-full h-full flex items-center justify-center p-4">
                   <span className="text-7xl md:text-9xl group-hover:hidden">📸</span>
                   <span className="text-xl md:text-4xl font-black hidden group-hover:block text-center uppercase">No photos please... jk take ten.</span>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WORK GRID */}
      <section className="bg-black py-20 md:py-32 px-4 md:px-6">
        <h2 className="text-[#00ff00] text-4xl md:text-8xl mb-12 md:mb-20 uppercase flex items-center gap-3 md:gap-4">
          THE FLEX <Star fill="#00ff00" className="w-8 h-8 md:w-16 md:h-16" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { title: "RADIO_GAGA", brand: "RADIO CITY", color: "bg-blue-500", icon: <Mic />, pSpeed: -20 },
            { title: "TV_CHAOS", brand: "MTV IND", color: "bg-[#ff00ff]", icon: <Video />, pSpeed: 20 },
            { title: "VOGUE_RUN", brand: "LFW", color: "bg-yellow-300", icon: <Camera />, pSpeed: -15 },
            { title: "NEWS_RIOT", brand: "VICE", color: "bg-white", icon: <Zap />, pSpeed: 25 }
          ].map((item, i) => (
            <ParallaxWrapper key={i} offset={item.pSpeed}>
              <motion.div 
                className={`${item.color} p-6 md:p-10 border-4 md:border-8 border-black shadow-[8px_8px_0px_#00ff00] md:shadow-[15px_15px_0px_#00ff00] text-black group transition-all`}
              >
                <div className="flex justify-between items-start mb-10 md:mb-16">
                  <div className="p-2 md:p-4 bg-black text-white">{item.icon}</div>
                  <ArrowRight size={30} className="md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-4xl md:text-7xl font-[1000] uppercase italic leading-none">{item.title}</h3>
                <p className="mt-2 md:mt-4 font-mono font-bold tracking-widest uppercase text-xs md:text-base">{item.brand}</p>
              </motion.div>
            </ParallaxWrapper>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="relative bg-black text-white pt-20 md:pt-32 pb-10 overflow-hidden border-t-[10px] md:border-t-[20px] border-[#ff00ff]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 border-2 md:border-4 border-white">
            <div className="lg:col-span-7 p-6 md:p-16 bg-white text-black border-b-2 lg:border-b-0 lg:border-r-4 border-white">
              <h3 className="text-5xl md:text-[10vw] font-[1000] leading-[0.8] uppercase italic mb-6">
                STAY <br/> <span className="bg-black text-[#00ff00] px-2 md:px-4">LOUD.</span>
              </h3>
              <p className="text-base md:text-2xl font-black uppercase max-w-md leading-tight mb-10">
                I don't check my DMs. I check my invoices. Reach out for real work only.
              </p>
              <div className="space-y-4">
                 <p className="font-mono font-bold text-[10px] uppercase opacity-50 tracking-[0.2em]">Communication_Layer</p>
                 <a href="mailto:yo@kavya.live" className="block text-2xl md:text-5xl font-black hover:text-[#ff00ff] transition-colors break-all underline decoration-2 md:decoration-4">
                    YO@KAVYA.LIVE
                 </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col divide-y-2 md:divide-y-4 divide-white">
              {[
                { label: 'INSTA', icon: <Instagram />, color: '#ff00ff' },
                { label: 'YOUTUBE', icon: <Youtube />, color: '#00ff00' },
                { label: 'TWITTER', icon: <Twitter />, color: '#0000ff' },
                { label: 'RIOT', icon: <Zap />, color: '#ffff00' },
              ].map((soc) => (
                <motion.a 
                  key={soc.label}
                  whileHover={{ backgroundColor: soc.color, color: "#000" }} 
                  href="#" 
                  className="flex-1 p-6 md:p-10 flex items-center justify-between group transition-colors"
                >
                  <span className="text-3xl md:text-5xl font-black italic">{soc.label}</span>
                  <div className="group-hover:scale-110 transition-transform">{soc.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row justify-between items-start gap-8 font-mono">
            <p className="text-[10px] md:text-xs font-black uppercase leading-relaxed md:w-1/3">
              Kavya is a multi-disciplinary vandal operating in radio and digital chaos.
            </p>
            <div className="flex flex-col items-start md:items-end w-full md:w-auto">
              <p className="text-xs font-black italic">VER_03.2026 // KAVYA_VANDAL_PORTFOLIO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ParallaxWrapper({ children, offset }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Reduced offset for mobile to prevent huge gaps
  const y = useTransform(scrollYProgress, [0, 1], [offset * -0.5, offset * 0.5]);

  return <motion.div ref={ref} style={{ y }}>{children}</motion.div>;
}