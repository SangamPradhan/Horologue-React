import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-end"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative h-full w-full max-w-md bg-background-dark border-l border-primary/10 shadow-2xl flex flex-col text-slate-100 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl font-semibold">Your Selection ({totalItems})</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-8">
                    <ShoppingBag className="w-10 h-10 text-primary opacity-20" />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-2 text-white">Your selection is empty</h3>
                  <p className="text-slate-500 text-sm max-w-[240px] mb-8">Discover our extraordinary timepieces and begin your curation.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="px-10 py-4 border border-primary text-primary font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-primary hover:text-background-dark transition-all duration-300"
                  >
                    Return to Collection
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-1">{item.brand}</p>
                      <p className="font-serif italic text-lg leading-tight truncate text-white">{item.name}</p>
                      <p className="text-primary font-black mt-2 tracking-tighter">${item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className="self-start p-2 text-slate-500 hover:text-primary transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Sticky Footer */}
            {items.length > 0 && (
              <div className="border-t border-primary/10 p-8 space-y-6 bg-background-dark">
                <div className="flex justify-between items-center px-2">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="font-display text-2xl font-black text-primary tracking-tighter">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-5 bg-primary text-background-dark font-black tracking-[0.2em] text-xs rounded-xl uppercase hover:brightness-110 transition-all shadow-xl shadow-primary/20">
                    Acquire Selection
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 text-[10px] font-black text-slate-500 hover:text-primary transition-all uppercase tracking-[0.3em] flex items-center justify-center gap-2"
                  >
                    Continue Curation
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
