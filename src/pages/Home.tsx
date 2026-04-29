import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { TrendingProducts } from '../components/TrendingProducts';
import { BrandStory } from '../components/BrandStory';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Rahul S.", text: "The quality of the oversized tees is insane. Best streetwear in India right now.", role: "Graphic Designer" },
    { name: "Priya V.", text: "GENZMONKS fits are different. The futuristic vibe is exactly what I was looking for.", role: "Content Creator" },
    { name: "Varun K.", text: "Finally a brand that understands Gen Z aesthetics. Fast shipping too!", role: "Photographer" }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-16 uppercase tracking-tighter">The <span className="text-accent-purple">Cult</span> Speaks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl border-white/5 relative"
            >
              <Quote className="text-accent-purple/20 absolute top-8 right-8" size={40} />
              <p className="text-lg text-white/70 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] text-white">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-primary"
    >
      <Hero />
      <FeaturedCollections />
      <TrendingProducts />
      <BrandStory />
      <Testimonials />
      
      <section className="py-24 bg-primary px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-display font-bold uppercase tracking-[0.2em]">@GENZMONKS_OFFICIAL</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1539109132381-3151b8a7fa53?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1529139572765-397392efef91?w=400&h=400&fit=crop"
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.95 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                     <Quote size={16} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
