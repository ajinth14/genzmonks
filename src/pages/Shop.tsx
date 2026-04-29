import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { TrendingProducts } from '../components/TrendingProducts';
import { Search, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'Featured' | 'Newest' | 'Price: Low' | 'Price: High'>('Featured');
  
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (sortBy === 'Price: Low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'Price: High') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const shopCategories = ['All', ...CATEGORIES.map(c => c.name)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-primary"
    >
      <section className="py-20 px-6 border-b border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-accent-purple font-mono text-[10px] uppercase tracking-[0.4em] block mb-4 italic">GENZMONKS Catalog</span>
              <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none mb-4">
                STREET <span className="text-white/20">DROP 01</span>
              </h1>
              <p className="text-white/40 max-w-md text-sm">
                Futuristic gear engineered for the modern nomad. Quality materials meets aesthetic chaos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky top-[80px] z-30 bg-primary/90 backdrop-blur-md border-b border-white/5 px-6">
        <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {shopCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-all duration-300",
                  selectedCategory === cat ? "bg-white text-primary" : "border border-white/10 hover:border-white/30 text-white/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-80">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input 
                type="text" 
                placeholder="Find gear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-[10px] outline-none focus:border-accent-purple transition-colors"
              />
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 glass px-4 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold">
                <SlidersHorizontal size={14} /> Sort
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              <AnimatePresence>
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                     <div className="relative aspect-[4/5] bg-charcoal rounded-3xl overflow-hidden mb-6">
                        <Link to={`/product/${product.id}`}>
                           <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                           />
                        </Link>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute inset-x-4 bottom-4 flex translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                           <button 
                             onClick={() => addToCart(product, product.sizes[0])}
                             className="w-full bg-white text-primary py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-accent-purple hover:text-white transition-colors shadow-2xl"
                            >
                             Add to Bag
                           </button>
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1 font-mono">{product.category}</p>
                          <Link to={`/product/${product.id}`}>
                            <h3 className="text-sm font-bold uppercase group-hover:text-accent-purple transition-colors">{product.name}</h3>
                          </Link>
                        </div>
                        <p className="text-sm font-display font-bold">{formatCurrency(product.price)}</p>
                     </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-40 text-center">
               <p className="text-white/20 uppercase tracking-widest">No gear found matching your search.</p>
               <button 
                  onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                  className="mt-4 text-xs text-accent-purple underline font-bold"
                >
                 Reset Filters
               </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
