import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, Truck, CreditCard, ChevronRight, CheckCircle2, Lock, ArrowLeft } from 'lucide-react';
import { formatCurrency, cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <p className="text-white/40 mb-8 uppercase tracking-widest">No items to checkout.</p>
        <Link to="/shop" className="text-accent-purple underline font-bold uppercase text-xs">Back to Catalog</Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="pt-40 text-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto glass p-16 rounded-[4rem] border-accent-blue/30 shadow-[0_0_80px_-20px_rgba(0,209,255,0.2)]"
        >
          <div className="w-24 h-24 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={48} className="text-accent-blue" />
          </div>
          <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-6">ORDER <span className="text-accent-blue">COMMITTED</span></h1>
          <p className="text-white/40 text-sm leading-relaxed mb-12">
            Your gear is being prepared for dispatch at the GENZMONKS HQ. 
            Confirmation hash: <span className="text-white font-mono">#GZM-9921-X</span>
          </p>
          <button 
             onClick={() => navigate('/')}
             className="w-full bg-white text-primary py-6 rounded-2xl text-xs font-display font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white transition-all shadow-xl"
          >
             Return To Nexus
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 bg-primary min-h-screen pb-24 px-6"
    >
      <div className="container mx-auto py-12">
        <div className="flex items-center gap-4 mb-16 overflow-x-auto no-scrollbar pb-4 md:pb-0">
          {['Identity', 'Logistics', 'Protocol'].map((s, i) => (
            <React.Fragment key={s}>
               <div className={cn(
                 "flex items-center gap-3 shrink-0",
                 step > i ? "text-accent-blue" : step === i + 1 ? "text-white" : "text-white/20"
               )}>
                 <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">0{i+1}</span>
                 <span className="text-xs uppercase tracking-[0.2em] font-bold">{s}</span>
               </div>
               {i < 2 && <div className="w-12 h-[1px] bg-white/10 shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  className="space-y-12"
                >
                  <div className="space-y-8">
                    <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Your Identity</h2>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-[9px] uppercase tracking-widest font-bold text-white/30 ml-4">Codename</label>
                         <input type="text" placeholder="Ajinth Kumar" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-purple" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-[9px] uppercase tracking-widest font-bold text-white/30 ml-4">Digital Frequency</label>
                         <input type="email" placeholder="nomad@network.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-purple" />
                       </div>
                    </div>
                  </div>
                  <button onClick={() => setStep(2)} className="w-full py-6 glass border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all">
                    Proceed to Logistics <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                   key="step2"
                   initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Logistics Node</h2>
                      <button onClick={() => setStep(1)} className="text-[10px] text-white/30 uppercase underline">Back</button>
                    </div>
                    <div className="space-y-6">
                       <div className="space-y-2">
                         <label className="text-[9px] uppercase tracking-widest font-bold text-white/30 ml-4">Sector (Address)</label>
                         <input type="text" placeholder="123 Future Lane" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-purple" />
                       </div>
                       <div className="grid grid-cols-2 gap-6">
                         <input type="text" placeholder="City" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-purple" />
                         <input type="text" placeholder="Pincode" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-purple" />
                       </div>
                    </div>
                  </div>
                  <button onClick={() => setStep(3)} className="w-full py-6 glass border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-primary transition-all">
                    Finalize Protocol <ChevronRight size={16} />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                   key="step3"
                   initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                   className="space-y-12"
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-display font-black uppercase tracking-tighter">Payment Protocol</h2>
                      <button onClick={() => setStep(2)} className="text-[10px] text-white/30 uppercase underline">Back</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="glass p-6 rounded-2xl border-white/20 flex flex-col justify-between h-40 relative group cursor-pointer hover:border-accent-purple transition-all">
                          <CreditCard className="text-accent-purple" />
                          <div>
                            <p className="text-xs font-black">UPI / Razorpay</p>
                            <p className="text-[10px] text-white/40">Secure instant transfer</p>
                          </div>
                          <div className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 border-accent-purple flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-accent-purple" />
                          </div>
                       </div>
                       <div className="glass p-6 rounded-2xl border-white/5 flex flex-col justify-between h-40 opacity-40 cursor-not-allowed">
                          <Lock size={20} />
                          <div>
                            <p className="text-xs font-black">Crypto Node</p>
                            <p className="text-[10px] text-white/40">Encryption only</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className={cn(
                      "w-full py-8 text-primary rounded-[2rem] font-display font-black uppercase tracking-[0.3em] transition-all relative overflow-hidden group",
                      isProcessing ? "bg-accent-blue" : "bg-white hover:bg-accent-purple hover:text-white"
                    )}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center gap-3">
                         <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                         Encrypting Order...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Deploy Final Buy <ShieldCheck size={18} />
                      </span>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5">
             <div className="glass p-10 rounded-[3rem] border-white/5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 pb-6 border-b border-white/5 opacity-40">Cargo manifest</h3>
                <div className="space-y-6 max-h-[300px] overflow-y-auto no-scrollbar mb-10 pr-4">
                   {cart.map(item => (
                     <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                           <div className="w-12 h-16 rounded-xl overflow-hidden bg-charcoal shrink-0">
                              <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="text-xs font-bold uppercase">{item.name}</p>
                              <p className="text-[9px] text-white/40 uppercase font-mono">{item.selectedSize} × {item.quantity}</p>
                           </div>
                        </div>
                        <p className="text-sm font-bold font-mono">{formatCurrency(item.price * item.quantity)}</p>
                     </div>
                   ))}
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/5">
                   <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                      <span>Gear Total</span>
                      <span>{formatCurrency(cartTotal)}</span>
                   </div>
                   <div className="flex justify-between text-xs uppercase tracking-widest text-accent-blue">
                      <span>Express Logistics</span>
                      <span>Free</span>
                   </div>
                   <div className="flex justify-between text-xl font-display font-black pt-6 uppercase tracking-tighter border-t border-white/5">
                      <span>Commitment</span>
                      <span>{formatCurrency(cartTotal)}</span>
                   </div>
                </div>

                <div className="mt-10 p-6 bg-accent-purple/5 rounded-2xl border border-accent-purple/20">
                  <div className="flex gap-4 items-center">
                    <Truck size={20} className="text-accent-purple" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-accent-purple">Express Deployment</p>
                      <p className="text-[9px] text-white/40 uppercase font-mono">Incoming in 2-3 Solar Cycles (Days)</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
