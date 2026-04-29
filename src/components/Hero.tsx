import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
    
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
          alt="Streetwear Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
       
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1 rounded-full border border-white/10 glass text-[10px] uppercase tracking-[0.4em] font-mono text-white/60">
            Evolution of Streetwear
          </span>
        </motion.div>

        <div className="relative pt-4 pb-8 overflow-hidden">
          <motion.h1 
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] md:text-[10vw] font-display font-extrabold leading-[0.8] tracking-tighter uppercase"
          >
            BUILT <span className="text-accent-purple">DIFFERENT</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-md text-white/50 mb-12 text-sm md:text-base leading-relaxed"
        >
          GENZMONKS is more than a brand. It's a rebellion against the ordinary. 
          Futuristic aesthetics, premium materials, and the soul of Kanyakumari.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 1.5, duration: 0.5 }}
           className="flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="/shop"
            className="group px-10 py-5 bg-white text-primary font-display font-bold uppercase tracking-widest text-xs rounded-full flex items-center gap-2 hover:bg-accent-purple hover:text-white transition-all duration-300"
          >
            Shop Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/about"
            className="px-10 py-5 border border-white/20 glass text-white font-display font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all duration-300"
          >
            The Story
          </Link>
        </motion.div>
      </div>

    
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 md:right-20 hidden lg:block opacity-20"
      >
        <div className="w-40 h-40 border border-white/30 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 border border-white/10 rounded-full scale-110 border-dashed animate-spin-slow" />
          <span className="text-4xl font-display font-black tracking-tighter">GM</span>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest text-white/20 font-mono">Scroll for more</span>
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" 
        />
      </div>
    </section>
  );
};
