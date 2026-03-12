import React from 'react';
import { motion } from 'framer-motion';
import PopularItems from '@/components/home/PopularItems';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import BlogPreview from '@/components/home/BlogPreview';
import HeroCarousel from '@/components/home/HeroCarousel';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Editorial Quote */}
      <section className="py-32 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <div className="inline-block mb-8 text-primary">
            <span className="material-symbols-outlined text-5xl">format_quote</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-extralight tracking-tight text-slate-900 dark:text-slate-100 max-w-4xl mx-auto leading-tight italic font-serif">
            Every second is a <span className="font-bold not-italic border-b-2 border-primary pb-1 font-display">masterpiece</span>, a calculated symphony of engineering and soul.
          </h3>
          <p className="mt-12 text-primary tracking-[0.5em] uppercase text-sm font-bold">The Horológe Philosophy</p>
        </div>
      </section>

      {/* 3D Brand Carousel */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-background-dark border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 mb-16 flex justify-between items-end relative z-10">
          <div>
            <h4 className="text-primary uppercase tracking-widest font-bold mb-2">Curated Partners</h4>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Our Foundations</h2>
          </div>
          <a className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm" href="#">
            View All Brands <span className="material-symbols-outlined">trending_flat</span>
          </a>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar snap-x">
          {[
            { name: "Patek Philippe", icon: "diamond", desc: "Since 1839" },
            { name: "IWC Schaffhausen", icon: "verified", desc: "Engineering Excellence" },
            { name: "Rolex", icon: "crown", desc: "The Crown Icon", active: true },
            { name: "Cartier", icon: "auto_awesome", desc: "Jeweler of Kings" },
            { name: "Audemars Piguet", icon: "architecture", desc: "Swiss Haute Horlogerie" }
          ].map((brand, idx) => (
            <div key={idx} className={`min-w-[300px] aspect-square glass-card rounded-2xl flex flex-col items-center justify-center p-8 snap-center hover:scale-105 transition-transform cursor-pointer ${brand.active ? 'border-primary/40 scale-105 shadow-xl shadow-primary/10' : 'border-black/5 dark:border-white/5'}`}>
              <div className={`w-24 h-24 mb-6 rounded-full flex items-center justify-center ${brand.active ? 'bg-primary text-background-dark' : 'bg-primary/10 text-primary'}`}>
                <span className="material-symbols-outlined text-5xl">{brand.icon}</span>
              </div>
              <h5 className="text-xl font-bold mb-2 dark:text-white">{brand.name}</h5>
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center font-medium">{brand.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Redesigned Popular Items */}
      <PopularItems />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Articles Section (Restored) */}
      <BlogPreview />
    </div>
  );
};

export default Home;
