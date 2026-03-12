import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Moon, Sun, Menu, X, Instagram, Facebook, Twitter, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Collections', to: '/shop' },
  { label: 'Pre-Owned', to: '#' },
  { label: 'Journal', to: '#' },
  { label: 'Boutiques', to: '#' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/5 flex items-center px-6 text-[10px] font-black uppercase tracking-[0.2em]">
        <div className="flex items-center gap-4 flex-shrink-0">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
        </div>
        <div className="flex-1 overflow-hidden mx-8">
          <p className="animate-marquee whitespace-nowrap text-slate-500 dark:text-slate-400">
            FREE WORLDWIDE SHIPPING ON ORDERS OVER $5,000 &nbsp;•&nbsp; AUTHENTICATED & CERTIFIED &nbsp;•&nbsp; COMPLIMENTARY LOGISTICS &nbsp;•&nbsp; 24/7 CONCIERGE SUPPORT &nbsp;•&nbsp; FREE WORLDWIDE SHIPPING ON ORDERS OVER $5,000
          </p>
        </div>
        <div className="flex items-center gap-6 flex-shrink-0">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-slate-400 hover:text-primary transition-colors p-1"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button onClick={() => setIsOpen(true)} className="relative text-slate-400 hover:text-primary transition-colors">
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-background-dark text-[9px] font-black rounded-full flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-2xl border-b border-primary/5 h-16' : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-180" fill="currentColor">
              <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
            </svg>
            <span className="font-display text-2xl font-black tracking-[0.2em] text-slate-900 dark:text-white uppercase">HOROLÓGE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="relative text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-primary transition-colors group"
              >
                {link.label}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-500 ${
                  location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 text-slate-900 dark:text-white bg-primary/5 rounded-xl border border-primary/10"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white dark:bg-background-dark flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 p-3 text-slate-900 dark:text-white bg-primary/5 rounded-xl border border-primary/10"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col items-center gap-8 text-center">
              <Link
                to="/"
                className="font-display text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-12 opacity-10"
              >
                HOROLÓGE
              </Link>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    className={`text-4xl font-serif italic transition-all duration-300 ${
                      location.pathname === link.to ? 'text-primary scale-110' : 'text-slate-400 hover:text-primary hover:scale-110'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex gap-8"
              >
                <Instagram className="w-6 h-6 text-slate-400" />
                <Facebook className="w-6 h-6 text-slate-400" />
                <Twitter className="w-6 h-6 text-slate-400" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
