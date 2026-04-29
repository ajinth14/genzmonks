import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-primary min-h-screen pb-24"
    >
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-12 pt-10 border-b border-white/5 pb-10">
          SAVED <span className="text-white/20">RELICS</span>
        </h1>

        {wishlistProducts.length === 0 ? (
          <div className="py-40 text-center">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
              <Heart size={32} className="text-white/20" />
            </div>
            <p className="text-white/40 mb-12 max-w-sm mx-auto text-sm leading-relaxed font-mono">
              Your wishlist is empty. Explore the drops and save your favorites.
            </p>
            <Link to="/shop" className="bg-white text-primary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-all shadow-xl">
              Browse Drops
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal mb-6 relative">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-3 glass rounded-full bg-accent-purple text-white hover:bg-white hover:text-primary transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono mb-1">{product.category}</p>
                     <h3 className="text-sm font-bold uppercase">{product.name}</h3>
                   </div>
                   <p className="text-sm font-display font-bold font-mono">{formatCurrency(product.price)}</p>
                </div>
                <button 
                  onClick={() => addToCart(product, product.sizes[0])}
                  className="w-full mt-6 py-4 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={14} /> Add to Bag
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
