import { motion } from 'framer-motion';
import { AtSign, Globe, Instagram, Mail, MapPin, Phone, Quote, Share2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pt-32 pb-24 px-6 md:px-20 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>

      <main className="max-w-[1440px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-gold font-bold uppercase tracking-[0.4em] mb-4 block text-sm">Concierge Services</span>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
            Begin Your <br />
            <span className="text-gold italic font-serif lowercase font-light">Journey</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0">
            Experience the pinnacle of Swiss craftsmanship. Our worldwide concierge is dedicated to providing you with a seamless and personalized acquisition experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Contact Info & Quoted Text */}
          <div className="space-y-16">
            <section>
              <h2 className="text-gold text-xs font-black uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                <span className="h-[1px] w-12 bg-gold/30"></span>
                Direct Channels
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background-dark transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Boutique Address</p>
                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight uppercase transition-colors group-hover:text-gold">
                      123 Avenue de l'Horlogerie<br />Geneva, 1201 Switzerland
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background-dark transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Global Hotlines</p>
                    <p className="text-slate-900 dark:text-white text-lg font-bold uppercase transition-colors group-hover:text-gold">
                      +41 22 555 0199<br />
                      +1 212 555 0122
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background-dark transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Electronic Mail</p>
                    <p className="text-slate-900 dark:text-white text-lg font-bold uppercase transition-colors group-hover:text-gold">
                      concierge@horologe.com<br />
                      support@horologe.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background-dark transition-all duration-500">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Digital Presence</p>
                    <div className="flex gap-4 mt-2">
                      <Instagram className="w-5 h-5 text-gold hover:scale-110 transition-transform cursor-pointer" />
                      <Share2 className="w-5 h-5 text-gold hover:scale-110 transition-transform cursor-pointer" />
                      <AtSign className="w-5 h-5 text-gold hover:scale-110 transition-transform cursor-pointer" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Quoted Text Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gold/5 border-l-2 border-gold p-12 md:p-16 relative overflow-hidden rounded-r-3xl"
            >
              <Quote className="absolute -left-4 -top-4 w-24 h-24 text-gold/10" />
              <p className="italic font-serif text-3xl md:text-4xl text-slate-900 dark:text-slate-100 leading-tight mb-8">
                "Time is the most valuable commodity. We ensure that every second spent with HOROLÓGE is a testament to excellence."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="text-gold font-black uppercase tracking-widest text-xs">A. Laurent, Founder</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-background-dark p-10 md:p-14 rounded-[2.5rem] border border-slate-100 dark:border-gold/10 shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>

            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Given Name</label>
                  <input
                    placeholder="Enter your first name"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Surname</label>
                  <input
                    placeholder="Enter your last name"
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Secure Email Address</label>
                <input
                  placeholder="name@luxury-mail.com"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                  type="email"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Purpose of Inquiry</label>
                <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none cursor-pointer text-xs font-bold uppercase tracking-widest">
                  <option value="inquiry">Boutique Appointment</option>
                  <option value="service">Heritage Restoration</option>
                  <option value="partnership">Global Partnership</option>
                  <option value="vip">Private Collection Preview</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Personal Message</label>
                <textarea
                  placeholder="How may we assist you in your horological pursuit?"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none h-40 placeholder:text-slate-400 placeholder:text-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-background-dark font-black uppercase tracking-[0.3em] py-5 rounded-2xl transition-all shadow-xl shadow-gold/20 active:scale-[0.98]"
              >
                Dispatch Inquiry
              </button>
            </form>
          </motion.div>
        </div>

        {/* Cinematic Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[3rem] overflow-hidden relative group h-[600px] border border-gold/10"
        >
          <div className="absolute inset-0 bg-gold/10 pointer-events-none mix-blend-color group-hover:bg-transparent transition-colors duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>

          <img
            alt="Geneva"
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms] scale-110 group-hover:scale-100"
            src="https://images.unsplash.com/photo-1549144483-9366df022714?w=1600"
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 animate-ping rounded-full bg-gold/40 h-24 w-24 -m-8"></div>
              <div className="bg-background-dark text-gold p-6 rounded-full border-2 border-gold shadow-[0_0_50px_rgba(197,160,89,0.5)] relative">
                <MapPin className="w-10 h-10" />
              </div>
            </motion.div>

            <div className="mt-8 bg-background-dark/80 backdrop-blur-xl px-12 py-6 rounded-3xl border border-gold/30 shadow-2xl">
              <h3 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-2">The Sanctuary</h3>
              <p className="text-white text-3xl font-serif italic tracking-tighter">HOROLÓGE HQ, Geneva</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-4">Visit the birthplace of precision</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
