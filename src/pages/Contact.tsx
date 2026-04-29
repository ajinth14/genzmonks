import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-primary min-h-screen"
    >
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              
              <div>
                <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.5em] block mb-6">Contact Ops</span>
                <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8 leading-none">
                  JOIN OUR <span className="text-white/20">NETWORK</span>
                </h1>
                <p className="text-white/50 mb-12 max-w-md leading-relaxed">
                  Have a question about a drop? Need size counseling? Or just want to vibe with the team? Reach out to the monks.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail size={18} className="text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Electronic Mail</p>
                      <p className="text-lg font-display font-bold">hq@genzmonks.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone size={18} className="text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Cell Protocol</p>
                      <p className="text-lg font-display font-bold">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin size={18} className="text-accent-purple" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Physical Base</p>
                      <p className="text-lg font-display font-bold">Marthandam, Kanyakumari, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-6">
                   {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="p-4 rounded-xl border border-white/10 hover:bg-white hover:text-primary transition-all">
                      <Icon size={20} />
                    </a>
                   ))}
                </div>
              </div>

              
              <div className="lg:pt-20">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass p-12 rounded-[3rem] text-center border-accent-purple/20 shadow-2xl"
                  >
                    <div className="w-20 h-20 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-8">
                       <Send size={32} className="text-accent-purple" />
                    </div>
                    <h3 className="text-3xl font-display font-black uppercase mb-4 tracking-tighter">Transmission Sent</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8">
                      Your message has been encoded into our network. Our frequency analysts will return a response shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-widest text-accent-purple underline"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass p-10 md:p-14 rounded-[3rem] border-white/5 shadow-2xl space-y-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Codename</label>
                       <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-primary/50 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-accent-purple transition-all"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Frequency (Email)</label>
                       <input 
                        required
                        type="email" 
                        placeholder="nomad@network.com"
                        className="w-full bg-primary/50 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-accent-purple transition-all"
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Transmission</label>
                       <textarea 
                        required
                        rows={4}
                        placeholder="Your message here..."
                        className="w-full bg-primary/50 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-accent-purple transition-all resize-none"
                       />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-6 bg-white text-primary rounded-2xl font-display font-black uppercase tracking-[0.3em] hover:bg-accent-purple hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                    >
                      Deploy Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="h-[500px] w-full bg-charcoal relative overflow-hidden grayscale opacity-40">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0B0B0B_100%)] z-10" />
         <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000&auto=format&fit=crop" 
          alt="Map"
          className="w-full h-full object-cover"
         />
      </section>
    </motion.div>
  );
};
