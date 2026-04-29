import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center min-h-screen px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
            <Trash2 size={32} className="text-white/20" />
          </div>
          <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">Your Bag is <span className="text-white/20">Empty</span></h1>
          <p className="text-white/40 mb-12 max-w-sm mx-auto text-sm leading-relaxed">
            Looks like you haven't added anything to your monks' circle yet. Start your journey into the futuristic streetwear.
          </p>
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all shadow-xl"
          >
            Enter The Catalog <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-primary min-h-screen pb-24"
    >
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-12 pt-10 border-b border-white/5 pb-10">
          YOUR <span className="text-white/20">BAG</span> <span className="text-[20px] font-mono font-normal tracking-normal lowercase ml-4">[{cartCount} items]</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 flex flex-col gap-10">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex gap-6 md:gap-10 items-center border-b border-white/5 pb-10 last:border-0"
                >
                  <Link to={`/product/${item.id}`} className="shrink-0 w-24 h-32 md:w-40 md:h-52 rounded-2xl overflow-hidden bg-charcoal">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col md:flex-row justify-between gap-6">
                    <div>
                      <p className="text-accent-purple font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-2">{item.category}</p>
                      <h3 className="text-xl font-display font-bold uppercase mb-2 group hover:text-accent-blue transition-colors">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-white/40 mb-4">
                        <span>Size: <span className="text-white">{item.selectedSize}</span></span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span>Edition: <span className="text-white">Gen-01</span></span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                           <button onClick={() => updateQuantity(item.id, item.selectedSize, -1)} className="p-3 hover:bg-white/10 transition-colors">
                             <Minus size={14} />
                           </button>
                           <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                           <button onClick={() => updateQuantity(item.id, item.selectedSize, 1)} className="p-3 hover:bg-white/10 transition-colors">
                             <Plus size={14} />
                           </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-[10px] uppercase tracking-widest font-bold text-red-500/60 hover:text-red-500 transition-colors flex items-center gap-1"
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-between items-end">
                       <p className="text-2xl font-display font-black">{formatCurrency(item.price * item.quantity)}</p>
                       <div className="hidden md:flex gap-2 text-[9px] font-bold text-white/20 uppercase tracking-widest items-center">
                          <Truck size={12} /> Priority Ship
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          
          <div className="lg:col-span-4">
            <div className="glass p-10 rounded-[2.5rem] sticky top-[120px] border-accent-purple/20 shadow-2xl">
              <h2 className="text-2xl font-display font-black uppercase mb-10 pb-6 border-b border-white/10">Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 uppercase tracking-widest">Subtotal</span>
                  <span className="font-bold">{formatCurrency(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 uppercase tracking-widest">Shipping</span>
                  <span className="text-accent-blue font-bold uppercase tracking-widest text-[10px]">Calculated Next</span>
                </div>
                <div className="flex justify-between text-sm pt-6 border-t border-white/10">
                  <span className="text-white uppercase font-black tracking-widest text-lg">Total</span>
                  <span className="text-2xl font-display font-black text-white">{formatCurrency(cartTotal)}</span>
                </div>
              </div>

              <div className="space-y-4">
                 <Link 
                  to="/checkout"
                  className="w-full py-6 bg-white text-primary text-center rounded-2xl text-xs font-display font-black uppercase tracking-[0.2em] block hover:bg-accent-purple hover:text-white transition-all shadow-[0_20px_40px_-5px_rgba(255,255,255,0.1)] active:scale-95"
                 >
                   Initiate <span className="italic">Checkout</span> <ArrowRight size={16} className="inline ml-2" />
                 </Link>
                 <Link 
                  to="/shop"
                  className="w-full py-5 border border-white/10 text-center rounded-2xl text-[10px] font-bold uppercase tracking-widest block hover:bg-white/5 transition-all"
                 >
                   Continue Exploring
                 </Link>
              </div>

              <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-white/30">
                  <ShieldCheck size={18} className="text-accent-purple" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Razorpay Secure Protocol</span>
                </div>
                <div className="flex items-center gap-3 text-white/30">
                  <Truck size={18} className="text-accent-purple" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Dispatch within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
