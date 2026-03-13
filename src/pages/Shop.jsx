import { useCart } from '@/context/CartContext';
import watchesData from '@/data/watches.json';
import { motion } from 'framer-motion';
import { ChevronRight, Eye, Filter, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const Shop = () => {
  const { addItem } = useCart();
  const [activeFilters, setActiveFilters] = useState({
    brand: [],
    style: [],
    gender: [],
    price: 200000
  });

  const handleBrandToggle = (brand) => {
    setActiveFilters(prev => ({
      ...prev,
      brand: prev.brand.includes(brand)
        ? prev.brand.filter(b => b !== brand)
        : [...prev.brand, brand]
    }));
  };

  const handleStyleToggle = (style) => {
    setActiveFilters(prev => ({
      ...prev,
      style: prev.style.includes(style)
        ? prev.style.filter(s => s !== style)
        : [...prev.style, style]
    }));
  };

  const handleGenderToggle = (gender) => {
    setActiveFilters(prev => ({
      ...prev,
      gender: prev.gender.includes(gender)
        ? prev.gender.filter(g => g !== gender)
        : [...prev.gender, gender]
    }));
  };

  const filteredWatches = watchesData.filter(watch => {
    const brandMatch = activeFilters.brand.length === 0 || activeFilters.brand.includes(watch.brand);
    const styleMatch = activeFilters.style.length === 0 || activeFilters.style.includes(watch.style);
    const genderMatch = activeFilters.gender.length === 0 || activeFilters.gender.includes(watch.gender);
    const priceMatch = watch.price <= activeFilters.price;
    return brandMatch && styleMatch && genderMatch && priceMatch;
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen px-6 lg:px-20 py-8 gap-12 pt-32 bg-background-light dark:bg-background-dark">
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="sticky top-28 space-y-10">
          <div className="bg-white dark:bg-background-dark p-8 rounded-2xl border border-primary/5 shadow-xl shadow-black/5">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 border-b border-primary/10 pb-4 flex items-center gap-3">
              <Filter className="w-4 h-4" /> Filter Selection
            </h3>
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6 dark:text-white">Brand</h4>
                <div className="space-y-4">
                  {['Rolex', 'Patek Philippe', 'Audemars Piguet', 'Cartier', 'Vacheron Constantin', 'Omega', 'IWC'].map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary bg-transparent transition-all cursor-pointer"
                          checked={activeFilters.brand.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-500 group-hover:text-primary transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6 dark:text-white">Price Range</h4>
                <div className="px-2">
                  <input
                    type="range"
                    className="w-full h-1 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={activeFilters.price}
                    onChange={(e) => setActiveFilters(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                  />
                  <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>$1k</span>
                    <span>${(activeFilters.price / 1000).toFixed(0)}k</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6 dark:text-white">Gender</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Men', 'Women', 'Unisex'].map(gender => (
                    <button
                      key={gender}
                      onClick={() => handleGenderToggle(gender)}
                      className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest border border-primary/10 rounded-lg transition-all ${activeFilters.gender.includes(gender) ? 'bg-primary text-background-dark border-primary' : 'hover:border-primary/40 dark:text-slate-400'}`}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6 dark:text-white">Style</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Dress', 'Sport', 'Dive', 'Heritage'].map(style => (
                    <button
                      key={style}
                      onClick={() => handleStyleToggle(style)}
                      className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest border border-primary/10 rounded-lg transition-all ${activeFilters.style.includes(style) ? 'bg-primary text-background-dark border-primary' : 'hover:border-primary/40 dark:text-slate-400'}`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
              <span>Home</span>
              <ChevronRight className="w-3 h-3 text-primary/40" />
              <span className="text-primary">The Archive</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter dark:text-primary uppercase leading-none">Curated <span className="text-primary italic font-serif lowercase font-light">Inventory</span></h1>
            <p className="text-slate-500 mt-4 max-w-lg font-medium">Meticulously inspected timepieces from the world's most prestigious manufactures.</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">View:</span>
            <select className="bg-white dark:bg-background-dark border border-primary/5 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-widest focus:ring-primary focus:border-primary min-w-[200px] cursor-pointer outline-none shadow-lg shadow-black/5 dark:text-white">
              <option className="bg-background-dark">Newest Arrivals</option>
              <option className="bg-background-dark">Price: High to Low</option>
              <option className="bg-background-dark">Price: Low to High</option>
              <option className="bg-background-dark">Popularity</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredWatches.map((watch, idx) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group relative bg-white dark:bg-background-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/5 dark:shadow-black/20"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={watch.images[0]}
                  alt={watch.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-background-dark via-transparent to-transparent"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background-dark/40 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <button className="p-4 rounded-full bg-gold text-background-dark shadow-2xl hover:scale-110 transition-transform border border-gold">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => addItem({ id: watch.id, name: watch.name, brand: watch.brand, price: watch.price, image: watch.images[0] })}
                    className="p-4 rounded-full bg-gold text-background-dark border border-gold shadow-2xl hover:scale-110 transition-all"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                {watch.isNew && (
                  <span className="absolute top-6 left-6 bg-gold text-background-dark text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-xl">New Arrival</span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-0">
                <p className="text-gold text-[9px] font-black uppercase tracking-[0.3em] mb-2">{watch.brand}</p>
                <h2 className="text-2xl font-serif italic text-slate-900 dark:text-primary mb-2 leading-tight drop-shadow-sm">{watch.name}</h2>
                <p className="text-xl font-black text-slate-900 dark:text-primary tracking-tighter drop-shadow-sm">${watch.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Showing {filteredWatches.length} of {watchesData.length} timepieces</p>
          <button className="px-16 py-5 bg-gold text-background-dark hover:brightness-110 transition-all duration-300 font-black text-[10px] uppercase tracking-[0.3em] rounded-xl shadow-xl shadow-gold/20">
            Display More Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
