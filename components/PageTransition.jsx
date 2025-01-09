"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  // Mengatur animasi selesai sebelum render halaman baru
  useEffect(() => {
    setIsAnimating(true); // Aktifkan animasi setiap kali pathname berubah
    const timer = setTimeout(() => setIsAnimating(false), 1400); // Sesuaikan dengan durasi animasi
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {/* Transisi Layar Penuh */}
      {isAnimating && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
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
