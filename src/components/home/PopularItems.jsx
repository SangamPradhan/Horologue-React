import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag, X } from 'lucide-react';
import watchesData from '@/data/watches.json';
import { useCart } from '@/context/CartContext';

const PopularItems = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [quickView, setQuickView] = useState(null);
  const { addItem } = useCart();

  const popular = watchesData.filter((w) => w.popular).slice(0, 4);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light mb-4 dark:text-white uppercase tracking-tighter">
            Icons of the <span className="text-primary italic">Collection</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto font-medium">
            Our most coveted timepieces, chosen by collectors worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popular.map((watch, i) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white dark:bg-background-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/5 dark:shadow-black/20"
            >
              {/* Image with Fade Blur Effect */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={watch.images[0]}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* The Premium Aesthetic Blur/Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-background-dark via-transparent to-transparent"></div>
                
                {/* Subtle highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/5 to-transparent"></div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setQuickView(watch)}
                    className="p-4 rounded-full bg-primary text-background-dark shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => addItem({ id: watch.id, name: watch.name, brand: watch.brand, price: watch.price, image: watch.images[0] })}
                    className="p-4 rounded-full bg-white text-background-dark shadow-2xl hover:scale-110 transition-transform"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info overlap on the gradient */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-0">
                <p className="font-bold text-[10px] uppercase tracking-[0.3em] text-primary dark:text-white mb-2">{watch.brand}</p>
                <h3 className="font-serif italic text-2xl text-slate-900 dark:text-white mb-2 leading-tight drop-shadow-sm">{watch.name}</h3>
                <p className="font-display font-black text-xl text-slate-900 dark:text-primary tracking-tighter drop-shadow-sm">${watch.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/shop"
            className="inline-block px-12 py-4 font-bold tracking-[0.2em] text-xs border border-primary text-primary rounded-lg hover:bg-primary hover:text-background-dark transition-all duration-300 uppercase"
          >
            Explore the Catalogue
          </Link>
        </motion.div>
      </motion.div>

      {/* Quick View Modal */}
      {quickView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[60] bg-background-dark/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setQuickView(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-background-dark border border-white/10 rounded-2xl max-w-3xl w-full p-10 relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

            <button onClick={() => setQuickView(null)} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors z-10">
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5 shadow-2xl">
                <img src={quickView.images[0]} alt={quickView.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <p className="font-bold text-xs tracking-[0.3em] text-primary uppercase mb-3">{quickView.brand}</p>
                <h3 className="font-serif italic text-4xl font-bold mb-4 text-white leading-tight">{quickView.name}</h3>
                <p className="text-3xl font-black mb-8 text-primary tracking-tighter">${quickView.price.toLocaleString()}</p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-400 mb-10 pb-10 border-b border-white/5">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-600 mb-1">Case Size</span>
                    <span className="text-white font-medium">{quickView.caseSize}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-600 mb-1">Movement</span>
                    <span className="text-white font-medium">{quickView.movement}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-600 mb-1">Water Res.</span>
                    <span className="text-white font-medium">{quickView.waterResistance}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-slate-600 mb-1">Material</span>
                    <span className="text-white font-medium">{quickView.caseMaterial}</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <button
                    onClick={() => { addItem({ id: quickView.id, name: quickView.name, brand: quickView.brand, price: quickView.price, image: quickView.images[0] }); setQuickView(null); }}
                    className="w-full py-5 bg-primary text-background-dark font-black tracking-[0.2em] text-xs rounded-xl uppercase hover:brightness-110 transition-all shadow-xl shadow-primary/20"
                  >
                    Acquire Timepiece
                  </button>
                  <Link
                    to={`/shop`}
                    className="w-full py-5 border border-white/10 text-white font-bold tracking-[0.2em] text-xs rounded-xl uppercase text-center hover:bg-white/5 transition-all"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PopularItems;
