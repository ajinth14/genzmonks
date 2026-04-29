import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden mb-4">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter"
            >
              GENZ<span className="text-accent-purple">MONKS</span>
            </motion.div>
          </div>
          <div className="w-48 h-[1px] bg-white/10 relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent-purple origin-left shadow-[0_0_10px_#9D00FF]"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono"
          >
            Built Different • 2026
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
