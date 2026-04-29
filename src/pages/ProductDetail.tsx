import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ChevronRight, Heart, Share2, Ruler, ShieldCheck, Truck, RefreshCcw, Plus, Minus, ArrowRight } from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) setSelectedSize(product.sizes[0]);
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-2xl font-bold uppercase tracking-widest mb-8">Product Not Found</h1>
        <Link to="/shop" className="text-accent-purple underline uppercase text-xs font-bold">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, selectedSize);
    setTimeout(() => setIsAdding(false), 2000);
  };

  const nextProduct = PRODUCTS[(PRODUCTS.indexOf(product) + 1) % PRODUCTS.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-primary min-h-screen"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 mb-12 font-mono">
           <Link to="/" className="hover:text-white transition-colors">Home</Link>
           <span>/</span>
           <Link to="/shop" className="hover:text-white transition-colors">Catalog</Link>
           <span>/</span>
           <span className="text-white/60">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 overflow-x-auto no-scrollbar md:w-20">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "w-20 aspect-square rounded-xl overflow-hidden border-2 transition-all shrink-0",
                    activeImage === idx ? "border-accent-purple" : "border-transparent opacity-50"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-charcoal group">
               <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <button className="absolute top-6 right-6 p-4 glass rounded-full hover:bg-white hover:text-primary transition-all">
                  <Share2 size={18} />
               </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-10">
              <div className="flex gap-2 items-center mb-4">
                <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.3em] font-bold">{product.category}</span>
                <span className="w-8 h-[1px] bg-white/10" />
                {product.trending && <span className="text-accent-blue font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Limited Drop</span>}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 leading-none">
                {product.name}
              </h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl font-display font-bold text-white">{formatCurrency(product.price)}</p>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase text-white/40">In Stock</div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md">
              {product.description} Built for the rebellious spirit. Premium materials with attention to every minimalist detail.
            </p>
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">Select Size</h4>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-accent-purple transition-colors">
                  <Ruler size={14} /> Size Guide
                </button>
              </div>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-14 h-14 rounded-2xl text-xs font-bold uppercase transition-all duration-300 border flex items-center justify-center",
                      selectedSize === size 
                        ? "bg-white text-primary border-white" 
                        : "bg-transparent text-white border-white/10 hover:border-white/40"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mb-10">
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className={cn(
                  "flex-1 py-5 rounded-2xl text-xs font-display font-bold uppercase tracking-widest transition-all duration-500 overflow-hidden relative",
                  isAdding ? "bg-accent-blue" : "bg-accent-purple hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(157,0,255,0.4)]"
                )}
              >
                <AnimatePresence mode="wait">
                  {isAdding ? (
                    <motion.span 
                      key="added"
                      initial={{ y: 20 }} animate={{ y: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      Added To Bag <ShieldCheck size={16} />
                    </motion.span>
                  ) : (
                    <motion.span 
                      key="add"
                      initial={{ y: -20 }} animate={{ y: 0 }}
                    >
                      Add To Bag
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={cn(
                  "p-5 rounded-2xl border transition-all duration-300",
                  wishlist.includes(product.id) ? "bg-white text-primary border-white" : "border-white/10 hover:bg-white/5"
                )}
              >
                <Heart size={20} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
              <div className="text-center">
                 <Truck size={20} className="mx-auto mb-3 text-white/30" />
                 <p className="text-[9px] uppercase font-bold tracking-widest text-white/40">Fast Delta Shipping</p>
              </div>
              <div className="text-center">
                 <RefreshCcw size={20} className="mx-auto mb-3 text-white/30" />
                 <p className="text-[9px] uppercase font-bold tracking-widest text-white/40">7-Day Swap Policy</p>
              </div>
              <div className="text-center">
                 <ShieldCheck size={20} className="mx-auto mb-3 text-white/30" />
                 <p className="text-[9px] uppercase font-bold tracking-widest text-white/40">Verified Premium</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-20 border-t border-white/5">
           <div className="flex items-end justify-between mb-12">
              <h3 className="text-3xl font-display font-black uppercase tracking-tighter">You Might Also <span className="text-white/20">Vibe With</span></h3>
              <Link to="/shop" className="text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-1">Shop Everything</Link>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity">
              {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                   <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal mb-4">
                      <img src={p.images[0]} alt="" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" />
                   </div>
                   <h4 className="text-[10px] font-bold uppercase">{p.name}</h4>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};
