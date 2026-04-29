import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Heart, User, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary min-h-screen pt-24 pb-24 overflow-hidden"
    >
      
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.5em] block mb-8 italic">Manifesto v1.0</span>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-12">
              BORN IN THE SOUTH, <br />
              <span className="text-white/20">MADE FOR THE FUTURE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-display leading-tight mb-16 max-w-2xl">
              GENZMONKS is a streetwear architecture founded by Ajinth Kumar in the coastal heart of Marthandam, Kanyakumari.
            </p>
          </div>
        </div>
        
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none" />
      </section>

      
      <section className="py-24 px-6 bg-charcoal/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "RADICAL AUTHENTICITY", text: "We don't manufacture products; we engineer identities. Every piece is a statement of rebellion against the mundane." },
              { icon: Target, title: "PRECISION CRAFT", text: "From the fabric GSM to the glitch-art prints, everything is curated for the Gen Z standard of premium quality." },
              { icon: MapPin, title: "KANYAKUMARI SOUL", text: "Our roots at the edge of the world give us a unique perspective. Modern techwear infused with coastal resilience." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[2.5rem] border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-8">
                  <item.icon size={28} className="text-accent-purple" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-10">THE ARCHITECT</h2>
               <div className="space-y-6 text-white/50 leading-relaxed text-lg">
                  <p>
                    AJINTH KUMAR M.S started GENZMONKS with a single goal: to provide Indian Gen Z with an international streetwear experience that doesn't compromise on quality or cultural identity.
                  </p>
                  <p>
                    Frustrated by the generic "fast-fashion" wave, he set up the GENZMONKS ops in Marthandam to oversee every part of the production—ensuring that every monk who wears our gear feels the weight of our dedication.
                  </p>
               </div>
               <div className="mt-12 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full border-2 border-accent-purple p-1 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
                      alt="Ajinth Kumar" 
                      className="w-full h-full object-cover rounded-full grayscale"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase tracking-widest">Ajinth Kumar M.S</p>
                    <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-accent-purple">Founder • GENZMONKS</p>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop" 
                    alt="Founder Vision" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-transparent" />
               </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 px-6 border-y border-white/5 bg-primary relative">
         <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Drops", val: "12+" },
                 { label: "Monks", val: "5K+" },
                 { label: "Uptime", val: "99.9%" },
                 { label: "Quality", val: "Grade-A" }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                    <p className="text-4xl md:text-6xl font-display font-black text-white mb-2">{stat.val}</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/30">{stat.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
           <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12">RECLAIM YOUR <span className="text-accent-purple">IDENTITY.</span></h2>
           <Link to="/shop" className="bg-white text-primary px-12 py-6 rounded-full font-display font-black uppercase tracking-widest text-sm hover:bg-accent-purple hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(157,0,255,0.4)]">
             Explore the catalog
           </Link>
        </div>
      </section>
    </motion.div>
  );
};
