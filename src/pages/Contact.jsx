import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AtSign,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Quote,
  Share2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  SendHorizontal,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

const TARGET_EMAIL = 'jonthedon1673@gmail.com';

const Contact = () => {
  const formCardRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    purpose: 'Boutique Appointment',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'activation' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToCard = () => {
    setTimeout(() => {
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim() || formData.firstName,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          purpose: formData.purpose,
          message: formData.message,
          _subject: `New Horologue Concierge Inquiry: ${formData.purpose} (${formData.firstName} ${formData.lastName})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        scrollToCard();
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F3E5AB', '#AA771C', '#FFFFFF']
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          purpose: 'Boutique Appointment',
          message: '',
        });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('activation');
        scrollToCard();
      } else {
        throw new Error(data.message || 'Unable to dispatch inquiry. Please try again.');
      }
    } catch (err) {
      if (err.message && err.message.toLowerCase().includes('activation')) {
        setStatus('activation');
        scrollToCard();
      } else {
        console.error('Inquiry dispatch error:', err);
        setStatus('error');
        setErrorMessage(err.message || 'Something went wrong while sending your inquiry. Please try again.');
      }
    }
  };

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
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Direct Concierge Email</p>
                    <p className="text-slate-900 dark:text-white text-base md:text-lg font-bold transition-colors group-hover:text-gold lowercase">
                      {TARGET_EMAIL}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">concierge@horologe.com</p>
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
            ref={formCardRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-background-dark p-10 md:p-14 rounded-[2.5rem] border border-slate-100 dark:border-gold/10 shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-[0_0_40px_rgba(197,160,89,0.25)]">
                    <CheckCircle2 className="w-10 h-10 text-gold" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-gold font-black uppercase tracking-[0.3em] text-xs">Transmission Confirmed</span>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-slate-900 dark:text-white">
                      Inquiry Dispatched With Distinction
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      Your message has been dispatched directly to{' '}
                      <span className="text-gold font-semibold">{TARGET_EMAIL}</span>. Our concierge team will review your inquiry with priority.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gold/5 border border-gold/15 text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto text-left leading-relaxed">
                    <p className="font-bold text-gold uppercase tracking-wider text-[10px] mb-1">
                      First-Time Delivery Notice:
                    </p>
                    <p>
                      If this is the first submission to this address, FormSubmit sends an activation link to <strong className="text-gold">{TARGET_EMAIL}</strong>. Simply click <em>"Activate Form"</em> in that email once to ensure all future inquiries arrive directly in your inbox.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-background-dark font-black uppercase tracking-[0.25em] text-xs py-4 px-8 rounded-2xl transition-all shadow-xl shadow-gold/20 active:scale-[0.98]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Dispatch Another Inquiry
                  </button>
                </motion.div>
              ) : status === 'activation' ? (
                <motion.div
                  key="activation-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-8 space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shadow-[0_0_40px_rgba(197,160,89,0.25)]">
                    <Mail className="w-10 h-10 text-gold animate-bounce" />
                  </div>

                  <div className="space-y-3">
                    <span className="text-gold font-black uppercase tracking-[0.3em] text-xs">Action Required</span>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-slate-900 dark:text-white">
                      Please Confirm Your Email
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      FormSubmit has sent an activation link to{' '}
                      <span className="text-gold font-semibold">{TARGET_EMAIL}</span>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gold/5 border border-gold/15 text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto text-left leading-relaxed space-y-2">
                    <p className="font-bold text-gold uppercase tracking-wider text-[10px]">
                      One-Time Activation Step:
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-slate-600 dark:text-slate-300">
                      <li>Check your inbox at <strong className="text-gold">{TARGET_EMAIL}</strong> (including Spam/Junk folder).</li>
                      <li>Open the email from <em>FormSubmit</em>.</li>
                      <li>Click the <strong>"Activate Form"</strong> button to authorize incoming messages.</li>
                    </ol>
                    <p className="text-[11px] text-slate-400 pt-2 border-t border-gold/10">
                      Once activated, all future messages from this contact page will arrive directly in your inbox with zero configuration!
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-background-dark font-black uppercase tracking-[0.25em] text-xs py-4 px-8 rounded-2xl transition-all shadow-xl shadow-gold/20 active:scale-[0.98]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Back to Form
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold uppercase tracking-wider text-[10px]">Transmission Issue</p>
                        <p className="mt-0.5">{errorMessage || 'Unable to deliver message at this time. Please try again.'}</p>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Given Name *</label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your first name"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                        type="text"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Surname</label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Secure Email Address *</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@luxury-mail.com"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-slate-400 placeholder:text-xs"
                      type="email"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Purpose of Inquiry</label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none cursor-pointer text-xs font-bold uppercase tracking-widest"
                    >
                      <option value="Boutique Appointment" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Boutique Appointment</option>
                      <option value="Heritage Restoration" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Heritage Restoration</option>
                      <option value="Global Partnership" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Global Partnership</option>
                      <option value="Private Collection Preview" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Private Collection Preview</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gold pl-1">Personal Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How may we assist you in your horological pursuit?"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none h-40 placeholder:text-slate-400 placeholder:text-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gold hover:bg-gold/90 disabled:opacity-75 disabled:cursor-not-allowed text-background-dark font-black uppercase tracking-[0.3em] py-5 rounded-2xl transition-all shadow-xl shadow-gold/20 active:scale-[0.98] flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <SendHorizontal className="w-5 h-5" />
                        <span>Dispatch Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
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

