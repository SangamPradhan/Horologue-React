import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Globe, Instagram, Mail, MessageCircle, Quote } from 'lucide-react';
import React, { useRef } from 'react';

const Heritage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineItems = [
    {
      year: "1924",
      title: "Founded in Geneva",
      description: "Master watchmaker Henri Laurent opens the first Horológe atelier on the banks of Lake Geneva.",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800"
    },
    {
      year: "1952",
      title: "Chronometer Patent",
      description: "Introduction of the revolutionary H-1 movement, setting new global standards for magnetic resistance.",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800"
    },
    {
      year: "1988",
      title: "Global Expansion",
      description: "Horológe opens flagship boutiques in Paris, New York, and Tokyo, becoming a symbol of global luxury.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
    }
  ];

  const team = [
    {
      name: "Dr. Julian Vance",
      role: "Head of Complications",
      bio: "With 35 years of experience, Julian oversees the development of our Perpetual Calendar movements.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Elena Moretti",
      role: "Lead Case Designer",
      bio: "An architect turned horologist, Elena defines the aesthetic language of our modern collections.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Marcus Thorne",
      role: "Master Polisher",
      bio: "Specializing in 'black polishing', Marcus ensures every surface reflects perfection before assembly.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden pt-20" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            alt="Mechanical movement" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1600" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold font-bold uppercase tracking-[0.4em] mb-6 block text-sm"
          >
            Established 1924
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 uppercase tracking-tighter"
          >
            A Century of <span className="text-gold italic font-serif lowercase font-light">Craftsmanship</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Tracing the evolution of time through precision engineering and the pursuit of horological perfection for one hundred years.
          </motion.p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12"
          >
            <ChevronDown className="text-white w-10 h-10 mx-auto opacity-50 font-thin" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
          >
            <div className="absolute inset-0 bg-gold/10 z-10 group-hover:opacity-0 transition-opacity duration-1000"></div>
            <img 
              alt="Watchmaker" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800" 
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-gold text-sm font-bold uppercase tracking-[0.3em]">Our Essence</span>
            <h3 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter uppercase">
              The Art of <br/>
              <span className="italic font-serif font-light text-gold lowercase">Timekeeping</span>
            </h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              <p>At Horológe, we believe time is not merely a measurement, but a canvas for artistic expression. Every component is hand-finished, every movement is a symphony of physics and aesthetics.</p>
              <p>Our philosophy is rooted in the "Golden Ratio" of Swiss watchmaking—balancing tradition with the avant-garde to create pieces that transcend generations.</p>
            </div>
            <div className="pt-8 border-l-2 border-gold pl-8 relative">
              <Quote className="absolute -left-3 -top-3 text-gold/20 w-12 h-12" />
              <p className="italic text-2xl font-light dark:text-slate-200">
                "Precision is our minimum standard. Beauty is our ultimate goal."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="bg-slate-50 dark:bg-background-dark/50 py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Our Heritage</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="relative" ref={timelineRef}>
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gold/20 hidden md:block"></div>
            <motion.div 
              style={{ scaleY: timelineProgress }}
              className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gold origin-top hidden md:block"
            />
            
            <div className="space-y-32">
              {timelineItems.map((item, idx) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-5/12 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-12 md:mb-0`}>
                    <h4 className="text-7xl font-black text-gold/10 mb-4 tracking-tighter">{item.year}</h4>
                    <h5 className="text-3xl font-bold mb-4 uppercase tracking-tight text-gold">{item.title}</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold z-10 border-4 border-background-dark shadow-[0_0_20px_rgba(197,160,89,0.5)] hidden md:block"></div>
                  
                  <div className="md:w-5/12">
                    <div className="rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-xl">
            <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 block">The Masters</span>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Behind <br/><span className="italic font-serif font-light text-gold lowercase">Every Tick</span></h3>
          </div>
          <p className="text-slate-500 max-w-xs md:text-right font-medium text-lg italic">
            A curated team of the world's most skilled horologists, dedicated to the preservation of manual craft.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          {team.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-8 aspect-square rounded-2xl">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  src={member.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-6">
                    <Globe className="text-white cursor-pointer hover:text-gold transition-colors w-5 h-5" />
                    <Mail className="text-white cursor-pointer hover:text-gold transition-colors w-5 h-5" />
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-1 uppercase tracking-tight">{member.name}</h4>
              <p className="text-gold text-xs font-black uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold py-24 px-6 text-center text-background-dark relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="text-[15vw] font-black uppercase tracking-tighter">PRESTIGE</span>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Own a Piece of History</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl font-bold uppercase tracking-widest opacity-80">Discover our Centennial Collection, a tribute to a century of horological innovation.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-background-dark text-gold px-12 py-5 font-black uppercase tracking-[0.3em] text-xs rounded-xl shadow-2xl"
          >
            Explore The Collection
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
