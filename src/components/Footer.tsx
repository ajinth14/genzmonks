import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-display font-extrabold tracking-tighter mb-8 block">
              GENZ<span className="text-accent-purple">MONKS</span>
            </Link>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Redefining the streetwear landscape. Born in the coastal vibes of Kanyakumari, engineered for the digital age. Built for those who walk their own path.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              {['Shop All', 'Collections', 'About Story', 'Contact Us', 'Size Guide'].map(item => (
                <li key={item}>
                  <Link to="#" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1 group">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8">Base of Operations</h4>
            <ul className="flex flex-col gap-6 text-sm text-white/50">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent-purple shrink-0" />
                <span>Marthandam, Kanyakumari,<br />Tamil Nadu, India - 629165</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-accent-purple shrink-0" />
                <span>hq@genzmonks.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-accent-purple shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="p-8 md:p-12 glass rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-accent-purple/20">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">JOIN THE BROTHERHOOD</h3>
            <p className="text-white/40 text-sm">Subscribe for early access to limited drops.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-primary/50 border border-white/10 rounded-xl px-6 py-4 flex-1 md:w-80 outline-none focus:border-accent-purple transition-colors"
            />
            <button className="bg-white text-primary rounded-xl px-8 font-bold hover:bg-accent-purple hover:text-white transition-all uppercase text-xs tracking-widest">
              Join
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2026 GENZMONKS. CRAFTED BY AJINTH KUMAR M.S.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
