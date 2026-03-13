import React from 'react';
import { motion } from 'framer-motion';

const watches = [
  { id: 1, name: "Rolex Submariner", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800" },
  { id: 2, name: "Patek Philippe Nautilus", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800" },
  { id: 3, name: "Cartier Santos", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800" },
  { id: 4, name: "IWC Pilot", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800" },
  { id: 5, name: "Audemars Piguet Royal Oak", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800" },
  { id: 6, name: "Omega Seamaster", image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800" },
];

// Duplicate watches for seamless loop
const allItems = [...watches, ...watches, ...watches];

const CollectionCarousel = () => {
  return (
    <section className="py-24 bg-[#FAF9F7] dark:bg-background-dark overflow-hidden transition-colors duration-500">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center gap-12 md:gap-0"
      >
        
        {/* Left Side: Editorial Content */}
        <div className="md:w-[35%] w-full md:pl-20 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black tracking-[0.4em] text-gold uppercase mb-4 block">
              Our Collection
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h2 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-primary leading-[0.95] tracking-tighter">
                For the <br />
                <span className="font-bold italic">Watch You Deserve</span>
              </h2>
              <p className="md:max-w-[240px] text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium md:pt-4">
                We craft timepieces that mirror your precision, your legacy, and your story — because luxury is not just worn, it's lived.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Infinite Scroll Carousel */}
        <div className="md:w-[65%] w-full relative">
          <div className="flex overflow-hidden relative py-12 px-4 group">
            {/* The Scrolling Container */}
            <div className="flex gap-8 animate-scroll-slow hover:[animation-play-state:paused] whitespace-nowrap">
              {allItems.map((watch, idx) => (
                <div
                  key={`${watch.id}-${idx}`}
                  className="relative flex-shrink-0 w-[240px] md:w-[300px] aspect-[3/4] rounded-[24px] overflow-hidden 
                             bg-[#3D0C11] velvet-texture border border-[#C9A84C]/20 shadow-2xl transition-all duration-500
                             hover:scale-105 hover:-translate-y-2 group/card"
                >
                  {/* Subtle Inner Glow on Hover (or we can use a CSS selector for the 'center' one if we were using a different approach) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  
                  {/* Watch Image */}
                  <div className="w-full h-full p-8 flex items-center justify-center">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] 
                                 transition-transform duration-700 group-hover/card:scale-110"
                    />
                  </div>

                  {/* Gold Border Highlight */}
                  <div className="absolute inset-0 border border-gold/30 rounded-[24px] pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Gradient Fades for Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9F7] dark:from-background-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9F7] dark:from-background-dark to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CollectionCarousel;
