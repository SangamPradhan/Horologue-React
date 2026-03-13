import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { id: 1, name: "Rolex", logo: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800" },
  { id: 2, name: "Patek Philippe", logo: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800" },
  { id: 3, name: "Cartier", logo: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800" },
  { id: 4, name: "Audemars Piguet", logo: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800" },
  { id: 5, name: "IWC", logo: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800" },
  { id: 6, name: "Omega", logo: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800" },
];

const BrandCarousel = () => {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section className="py-20 md:py-32 bg-[#FAF9F7] dark:bg-background-dark overflow-hidden transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6 relative"
      >
        <div className="text-center mb-4 md:mb-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4"
          >
            The Foundations
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Our Curated <span className="italic font-serif font-light lowercase text-primary/60">Partners</span>
          </motion.h2>
        </div>

        {/* 3D Card Stack Container */}
        <div className="relative h-[400px] md:h-[550px] flex items-center justify-center pt-4 md:pt-8">
          <div className="relative w-full flex items-center justify-center">
            {brands.map((brand, idx) => {
              // Exact center calculation to ensure perfect alignment
              const distance = idx - (brands.length - 1) / 2;
              
              // Responsive Parameters
              const rotation = isMobile ? distance * 8 : distance * 15;
              const xTranslation = isMobile ? distance * 45 : (isTablet ? distance * 120 : distance * 180);
              const yTranslation = Math.abs(distance) * (isMobile ? 10 : 20);
              const scale = isMobile ? 0.85 - Math.abs(distance) * 0.05 : 1 - Math.abs(distance) * 0.1;

              return (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: scale,
                    rotate: rotation,
                    x: xTranslation,
                    y: yTranslation,
                    zIndex: 10 - Math.abs(Math.round(distance))
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 80, 
                    damping: 20,
                    delay: idx * 0.05 
                  }}
                  whileHover={!isMobile ? { 
                    scale: scale + 0.05,
                    y: yTranslation - 20,
                    zIndex: 25,
                    transition: { duration: 0.3 }
                  } : {}}
                  className="absolute w-[140px] md:w-[280px] lg:w-[320px] aspect-[3/4] rounded-[16px] md:rounded-[24px] 
                             bg-[#0A1221] border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:shadow-[0_40px_80px_rgba(0,0,0,0.5)] 
                             overflow-hidden cursor-pointer group"
                >
                  <div className="absolute inset-0 velvet-texture opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none" />
                  
                  <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="w-full h-full object-cover rounded-lg md:rounded-xl filter drop-shadow-xl brightness-90 group-hover:brightness-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none opacity-[0.02] dark:opacity-[0.03] overflow-hidden">
          <span className="font-display text-[20vw] font-black tracking-tighter uppercase whitespace-nowrap">
            PRESTIGE
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandCarousel;
