import { Globe, Instagram, Share2 } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-slate-100 pt-24 pb-12 border-t border-primary/20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold" fill="currentColor">
                <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
              </svg>
              <h2 className="text-2xl font-extrabold tracking-tighter text-gold">HOROLÓGE</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The world's premier destination for iconic timepieces. Curating excellence since 1924, we bring the history of time to your wrist.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-background-dark transition-all" href="#">
                <Globe className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-background-dark transition-all" href="#">
                <Share2 className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-background-dark transition-all" href="#">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 tracking-widest uppercase text-primary">Collections</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-gold transition-colors" href="/heritage">Our Heritage</a></li>
              <li><a className="hover:text-gold transition-colors" href="/shop">Watchmaking</a></li>
              <li><a className="hover:text-gold transition-colors" href="#">Sustainability</a></li>
              <li><a className="hover:text-gold transition-colors" href="#">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 tracking-widest uppercase text-primary">Concierge</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Valuation Services</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Maintenance & Repair</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Bespoke Ordering</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Global Delivery</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Authenticity Check</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 tracking-widest uppercase text-primary">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Receive exclusive access to new acquisitions and horological insights.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-sm grow focus:ring-1 focus:ring-primary focus:outline-none" 
                placeholder="Email Address" 
                type="email"
              />
              <button className="bg-primary text-background-dark font-bold px-4 py-2 rounded text-sm hover:brightness-110">JOIN</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest">© 2024 Horológe International. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">Privacy Policy</a>
            <a className="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">Terms of Service</a>
            <a className="text-xs text-slate-500 hover:text-primary transition-colors uppercase tracking-widest" href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
