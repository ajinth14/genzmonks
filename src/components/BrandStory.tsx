import { motion } from 'motion/react';

export const BrandStory = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000&auto=format&fit=crop" 
                alt="Brand Origin"
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 bg-accent-purple/10 mix-blend-overlay" />
            </motion.div>
            
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl z-20 hidden md:block max-w-[280px]"
            >
              <p className="text-4xl font-display font-black text-accent-blue mb-2">2026</p>
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Born in Kanyakumari</p>
              <p className="text-white/40 text-xs leading-relaxed font-mono">
                From the southernmost tip of India to the global stage. Rebellion engineered in Marthandam.
              </p>
            </motion.div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/5 rounded-full" />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.5em] block mb-6">Our Roots</span>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Youth Culture. <br />
                <span className="text-white/20">Aesthetic Chaos.</span> <br />
                Coastal Soul.
              </h2>
              
              <div className="space-y-6 text-white/50 leading-relaxed">
                <p>
                  GENZMONKS isn't just a label; it's the manifestation of AJINTH KUMAR's vision for a futuristic streetwear ecosystem that pays homage to its Kanyakumari roots while looking dead-straight at the future.
                </p>
                <p>
                  We believe in the power of the individual. In a world of noise, we choose to be the signal. Every stitch, every print, and every silhouette is designed for those who refuse to fit in.
                </p>
                <p className="italic text-white/80">
                   "We don't follow trends. We observe them, then we break them." — GENZMONKS
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/5 pt-12">
                <div>
                  <p className="text-2xl font-display font-bold text-white mb-1">STREET-OPS</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Premium Techwear</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-white mb-1">ZEN-MODE</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Minimalist Aesthetics</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
