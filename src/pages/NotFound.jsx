import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Compass, Home, Clock, Sparkles, MessageSquare, RotateCcw } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    // If user has previous in-session history, navigate back
    if (window.history.state && typeof window.history.state.idx === 'number' && window.history.state.idx > 0) {
      navigate(-1);
    } else if (window.history.length > 2) {
      navigate(-1);
    } else {
      // Fallback for direct URL entries
      navigate('/');
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-24 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[700px] h-[550px] md:h-[700px] bg-primary/10 dark:bg-primary/[0.07] rounded-[9999px] blur-[130px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-[9999px] blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        
        {/* Animated Swiss Tourbillon / Watch Dial Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto mb-8 flex items-center justify-center select-none"
        >
          {/* Subtle Outer Glow Aura */}
          <div className="absolute inset-0 rounded-[9999px] bg-gradient-to-tr from-primary/10 via-transparent to-primary/20 blur-sm pointer-events-none" />

          {/* Calibrated Chapter Ring with Roman Numerals (XII, III, VI, IX) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-[9999px] border border-primary/25 dark:border-primary/20 flex items-center justify-center shadow-lg shadow-black/5"
          >
            {/* Roman Numerals at Cardinal Points */}
            <span className="absolute top-2 text-[10px] font-serif font-bold text-gold tracking-widest">XII</span>
            <span className="absolute right-3.5 text-[10px] font-serif font-bold text-gold tracking-widest">III</span>
            <span className="absolute bottom-2 text-[10px] font-serif font-bold text-gold tracking-widest">VI</span>
            <span className="absolute left-3.5 text-[10px] font-serif font-bold text-gold tracking-widest">IX</span>

            {/* Minute / Hour Hash Marks (12 divisions) */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <span
                key={i}
                className="absolute w-[1.5px] h-2.5 bg-primary/40 rounded-[9999px]"
                style={{
                  transform: `rotate(${deg}deg) translateY(-106px)`,
                  transformOrigin: 'center center'
                }}
              />
            ))}
          </motion.div>

          {/* Counter-rotating Escapement Gear Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 sm:inset-6 rounded-[9999px] border border-dashed border-primary/30 dark:border-primary/25"
          />

          {/* Inner Balance Spring Wheel */}
          <motion.div 
            animate={{ rotate: [0, 45, -45, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-10 sm:inset-12 rounded-[9999px] border border-primary/20 dark:border-primary/15"
          />

          {/* Central Watch Face Dial */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-[9999px] bg-white/80 dark:bg-background-dark/95 backdrop-blur-md border border-primary/40 flex flex-col items-center justify-center shadow-xl shadow-black/10">
            {/* Horologue 8-point Star Crest */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold mb-0.5" fill="currentColor">
              <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
            </svg>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gold">HOROLÓGE</span>
            <span className="text-[7px] text-slate-400 dark:text-slate-500 tracking-[0.2em] uppercase font-light">GENÈVE</span>

            {/* Mechanical Watch Hands */}
            {/* Hour Hand (Gold leaf shape) */}
            <motion.div 
              animate={{ rotate: [40, 110, 240, 400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-1 h-8 bg-gradient-to-t from-gold to-[#f0d89c] rounded-t-[9999px] bottom-16 sm:bottom-18 left-1/2 -translate-x-1/2 origin-bottom shadow-sm z-10"
            />
            {/* Minute Hand (Sleek Rhodium) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-0.5 h-12 bg-slate-500 dark:bg-slate-300 rounded-t-[9999px] bottom-16 sm:bottom-18 left-1/2 -translate-x-1/2 origin-bottom shadow-sm z-10"
            />
            {/* Sweeping Seconds Hand (Subtle Gold needle) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-[1px] h-14 bg-primary/70 rounded-t-[9999px] bottom-16 sm:bottom-18 left-1/2 -translate-x-1/2 origin-bottom shadow-sm z-10"
            />

            {/* Center Pivot Synthetic Ruby Jewel */}
            <div className="absolute w-3 h-3 rounded-[9999px] bg-primary border-2 border-white dark:border-background-dark shadow-md z-20 flex items-center justify-center">
              <div className="w-1 h-1 rounded-[9999px] bg-white/80" />
            </div>
          </div>
        </motion.div>

        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[9999px] border border-primary/25 bg-primary/5 text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] mb-4 shadow-sm"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Calibre 404 • Time Out of Register</span>
        </motion.div>

        {/* 404 Big Display Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-light text-slate-900 dark:text-white tracking-tight leading-none mb-2">
            4<span className="text-gold italic font-serif">0</span>4
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-800 dark:text-slate-200 tracking-wide mb-5">
            This Moment Has Slipped Beyond the Dial
          </h2>
        </motion.div>

        {/* Explanatory Message & Unresolved URL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto space-y-4 mb-8"
        >
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            The reference destination you requested is not indexed in our horological catalogue. The balance spring has desynchronized or the registry coordinates have shifted.
          </p>

          {/* Invalid Path Indicator */}
          {location.pathname && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500 dark:text-slate-400 max-w-full">
              <span className="text-primary font-bold">Unresolved:</span>
              <span className="truncate max-w-[260px] sm:max-w-md">{location.pathname}</span>
            </div>
          )}
        </motion.div>

        {/* Primary and Secondary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14"
        >
          {/* Recent Page Redirect Button */}
          <button
            onClick={handleGoBack}
            id="redirect-recent-page-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gold hover:bg-[#b08e4d] text-background-dark font-display font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold/25 hover:shadow-gold/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Recent Page</span>
          </button>

          {/* Explore Collections Button */}
          <Link
            to="/shop"
            id="explore-collections-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl border border-primary/30 dark:border-primary/30 bg-transparent hover:bg-primary/10 text-slate-900 dark:text-slate-100 font-display font-bold text-xs uppercase tracking-[0.2em] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-gold" />
            <span>View Collections</span>
          </Link>
        </motion.div>

        {/* Quick Directory Salons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-slate-200 dark:border-primary/15 max-w-2xl mx-auto"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 mb-5">
            Synchronize With Our Atelier Salons
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              to="/"
              className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:border-gold/40 hover:bg-gold/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Home className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-mono text-slate-400">01</span>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-gold transition-colors">
                Atelier Home
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Return to the flagship salon
              </p>
            </Link>

            <Link
              to="/heritage"
              className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:border-gold/40 hover:bg-gold/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-mono text-slate-400">02</span>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-gold transition-colors">
                The Heritage
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                A century of Geneva mastery
              </p>
            </Link>

            <Link
              to="/contact"
              className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] hover:border-gold/40 hover:bg-gold/[0.04] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <MessageSquare className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-mono text-slate-400">03</span>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-gold transition-colors">
                Concierge
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Inquire with our horologists
              </p>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
