import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark text-slate-100 pt-24 pb-12 border-t border-primary/20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
              <h2 className="text-2xl font-extrabold tracking-tighter text-primary">HOROLÓGE</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The world's premier destination for iconic timepieces. Curating excellence since 1924, we bring the history of time to your wrist.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="#">
                <span className="material-symbols-outlined text-xl font-bold">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background-dark transition-all" href="#">
                <span className="material-symbols-outlined text-xl">camera</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 tracking-widest uppercase text-primary">Collections</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a className="hover:text-primary transition-colors" href="#">Dive Watches</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Chronographs</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Dress Watches</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Limited Editions</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pre-Owned Classics</a></li>
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
