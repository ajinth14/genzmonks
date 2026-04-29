import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { ShoppingCart, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency, cn } from '../lib/utils';

export const TrendingProducts = () => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const trending = PRODUCTS.filter(p => p.trending);

  return (
    <section className="py-24 bg-charcoal/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.5em] block mb-4">Most Wanted</span>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter uppercase mb-6">
            Trending <span className="text-white/20">Now</span>
          </h2>
          <div className="w-20 h-1 bg-accent-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trending.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-primary mb-6">
                <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </Link>
                
                
                <div className="absolute inset-x-4 bottom-4 flex gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.23,1,0.32,1]">
                  <button 
                    onClick={() => addToCart(product, product.sizes[0])}
                    className="flex-1 glass-dark py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-colors"
                  >
                    <ShoppingCart size={14} /> Add
                  </button>
                  <Link 
                    to={`/product/${product.id}`}
                    className="glass-dark p-3 rounded-xl hover:bg-white hover:text-primary transition-colors"
                  >
                    <Eye size={16} />
                  </Link>
                </div>

                
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={cn(
                    "absolute top-4 right-4 p-2 rounded-full transition-all duration-300",
                    wishlist.includes(product.id) ? "bg-accent-purple text-white" : "glass-dark text-white hover:bg-white hover:text-primary"
                  )}
                >
                  <Heart size={16} fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                </button>

                
                {idx === 0 && (
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest text-accent-blue border-accent-blue/30">
                    Hot Drop
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-mono">{product.category}</p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-base font-bold uppercase group-hover:text-accent-purple transition-colors mb-2">{product.name}</h3>
                  </Link>
                </div>
                <p className="text-base font-display font-bold text-accent-blue">{formatCurrency(product.price)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link to="/shop" className="group flex flex-col items-center gap-4">
             <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 group-hover:scale-110">
                <ArrowRight size={20} />
             </div>
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">Enter Catalog</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
