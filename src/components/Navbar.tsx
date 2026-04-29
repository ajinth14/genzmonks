import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Heart, Menu, X, Search, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/#collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        scrolled ? "bg-primary/80 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>

        
        <Link 
          to="/" 
          className="text-2xl font-display font-extrabold tracking-tighter hover:text-accent-purple transition-colors"
        >
          GENZ<span className="text-accent-purple">MONKS</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-purple transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        
        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden sm:block text-white/70 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="hidden sm:block text-white/70 hover:text-white transition-colors relative">
            <Heart size={20} />
          </Link>
          <Link to="/cart" className="text-white/70 hover:text-white transition-colors relative">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-purple text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80vw] bg-charcoal z-[70] p-8 md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <Link to="/" className="text-2xl font-display font-extrabold tracking-tighter">
                  GENZ<span className="text-accent-purple">MONKS</span>
                </Link>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-2xl font-display font-bold hover:text-accent-purple transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="absolute bottom-12 left-8 right-8">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-mono">Join the cult</p>
                  <Link to="/shop" className="w-full bg-white text-primary text-center py-4 rounded-xl font-bold flex items-center justify-center">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
