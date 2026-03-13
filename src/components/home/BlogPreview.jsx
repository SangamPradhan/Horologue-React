import { blogPosts } from '@/data/blogs';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6"
      >
        <div className="flex justify-between items-end mb-16">
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] font-bold mb-2">The Archive</h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-primary tracking-tighter uppercase">From the Vault</h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
            View All Stories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer bg-white dark:bg-background-dark p-4 rounded-[2rem] border border-slate-100 dark:border-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/5 dark:shadow-black/50"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-6 relative shadow-2xl shadow-black/5">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <span className="bg-white text-background-dark px-6 py-2.5 rounded font-black uppercase text-xs tracking-[0.2em] shadow-2xl">Read Story</span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded uppercase tracking-[0.2em] border border-primary/10">{post.category}</span>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900 dark:text-primary group-hover:text-primary transition-all mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 font-medium">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

        <button className="sm:hidden w-full mt-12 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-sm rounded transition-all">
          View All Stories
        </button>
      </motion.div>
    </section>
  );
};

export default BlogPreview;
