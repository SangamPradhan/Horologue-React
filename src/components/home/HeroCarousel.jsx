import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    brand: "ROLEX",
    tagline: "Timeless Precision.",
    highlight: "AURUM",
    subtitle: "The definitive expression of gold. Engineering precision meets the most precious of elements.",
    bg: "#0A0A0A",
    accent: "#C9A84C",
    textColor: "#F5E6C8",
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800",
    ],
  },
  {
    brand: "IWC",
    tagline: "Engineering For",
    highlight: "THE BOLD",
    subtitle: "From Schaffhausen, where Swiss excellence meets pioneering engineering for the modern age.",
    bg: "#070D1A",
    accent: "#2563EB",
    textColor: "#BFDBFE",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800",
    ],
  },
  {
    brand: "CARTIER",
    tagline: "The Art of",
    highlight: "WEARING TIME",
    subtitle: "Where jewelry meets horology in perfect harmony. A legacy of elegance on your wrist.",
    bg: "#050F0A",
    accent: "#10B981",
    textColor: "#A7F3D0",
    images: [
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
    ],
  },
  {
    brand: "PATEK PHILIPPE",
    tagline: "Begin Your Own",
    highlight: "TRADITION",
    subtitle: "You never actually own a Patek Philippe. You merely look after it for the next generation.",
    bg: "#0D0D0D",
    accent: "#9CA3AF",
    textColor: "#E5E7EB",
    images: [
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800",
      "https://images.unsplash.com/photo-1627037558426-c2d07beda3af?w=800",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800",
    ],
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [watchIdx, setWatchIdx] = useState(0);
  const slide = slides[current];

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % slides.length);
    setWatchIdx(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent(i => (i - 1 + slides.length) % slides.length);
    setWatchIdx(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7500);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWatchIdx(i => (i + 1) % slide.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [current, slide.images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ backgroundColor: slide.bg }}
        >
          {/* Subtle Dynamic Gradients */}
          <div
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at 70% 30%, ${slide.accent}15, transparent 60%),
                           radial-gradient(circle at 20% 70%, ${slide.accent}08, transparent 40%)`,
            }}
          />

          {/* Texture Layer */}
          <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

          {/* Subdued Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <motion.span
              key={`watermark-${current}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.04 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="font-display text-[22vw] font-black tracking-tighter"
              style={{ color: slide.textColor, whiteSpace: 'nowrap' }}
            >
              {slide.brand}
            </motion.span>
          </div>

          {/* Main Layout Container */}
          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-8 md:px-20 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 pt-32 pb-24 md:pt-40">
            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="font-accent text-xs tracking-[0.5em] uppercase mb-4" style={{ color: slide.accent }}>
                  {slide.brand} — Signature Edition
                </p>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[1] mb-6 uppercase tracking-tighter" style={{ color: slide.textColor }}>
                  {slide.tagline} <br />
                  <span className="italic font-serif opacity-50">{slide.highlight}</span>
                </h1>
                <p className="text-sm md:text-base mb-8 max-w-md leading-relaxed font-light" style={{ color: slide.textColor + 'aa' }}>
                  {slide.subtitle}
                </p>

                <div className="flex justify-center md:justify-start">
                  <Link
                    to="/shop"
                    className="inline-block bg-primary text-background-dark px-8 py-3.5 rounded font-black tracking-[0.15em] text-xs uppercase transition-all hover:brightness-110 hover:scale-105 shadow-lg shadow-primary/20"
                  >
                    Explore the Catalogue
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Visual Section */}
            <div className="flex-1 flex items-center justify-center relative w-full h-full max-h-[500px]">
              <div className="relative w-full aspect-square md:aspect-auto h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${current}-${watchIdx}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30, z: -100 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotateY: -30, z: 100 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Shadow Glow */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 blur-[80px] rounded-full"
                      style={{ backgroundColor: slide.accent + '33' }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                    />
                    <img
                      src={slide.images[watchIdx]}
                      alt={`${slide.brand} watch`}
                      className="max-w-full max-h-full object-contain drop-shadow-[0_45px_100px_rgba(0,0,0,0.7)]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex items-center justify-center gap-6">
        <button onClick={prev} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setWatchIdx(0); }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? slides[current].accent : 'rgba(255,255,255,0.2)',
                width: i === current ? 24 : 8,
              }}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 text-white/50 hover:text-white transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroCarousel;
