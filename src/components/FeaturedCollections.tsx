import { motion } from 'motion/react';
import { CATEGORIES } from '../data/products';
import { Link } from 'react-router-dom';

export const FeaturedCollections = () => {
  return (
    <section id="collections" className="py-24 bg-primary px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
             <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.3em] block mb-2">Curated Drops</span>
             <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter uppercase">
               Featured <span className="text-white/40">Collections</span>
             </h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-accent-purple transition-colors">
            View All Series
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent-blue font-mono text-[10px] uppercase tracking-[0.2em] mb-2">{cat.tagline}</p>
                <h3 className="text-3xl font-display font-bold uppercase mb-4">{cat.name}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-xs uppercase tracking-widest font-bold">Discover</span>
                  <div className="w-12 h-[1px] bg-white mt-1" />
                </div>
              </div>

              
              <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
