"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);


  return (
    <AnimatePresence mode="wait">
      {/* Transisi Layar Penuh */}
      {isAnimating && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.4, delay: 2.4, ease: "easeInOut"} }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
          onAnimationComplete={() => setIsAnimating(false)} // Deteksi animasi selesai
        />
      )}

      {/* Konten Halaman */}
      {!isAnimating && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
