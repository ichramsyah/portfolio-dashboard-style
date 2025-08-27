import React from 'react';
import { motion } from 'framer-motion';

// 1. Definisikan "variants" untuk animasi parent dan child
// Ini adalah kunci untuk membuat animasi yang terkoordinasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Memberi jeda antar animasi anak
    },
  },
};

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', // Efek seperti pegas
      stiffness: 120,
    },
  },
};

const iconVariants = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 0)',
    transition: {
      default: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
    },
  },
};

const Preloader = () => {
  const loadingText = 'Loading...';
  const letters = Array.from(loadingText);

  return (
    // Div utama untuk fade out saat keluar
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-whitee dark:bg-background-dark gap-6">
      {/* 2. Ikon SVG dengan animasi path drawing */}
      <motion.svg width="80" height="80" viewBox="0 0 100 100" className="stroke-blue-4 dark:stroke-blue-3" style={{ strokeWidth: 5, fill: 'none' }}>
        <motion.path
          d="M 50, 5
             A 45,45 0 1 1 49.9,5.001" // Path untuk lingkaran yang hampir sempurna
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>

      {/* 3. Container untuk teks yang akan dianimasikan secara bergiliran */}
      <motion.div
        className="flex overflow-hidden" // Overflow hidden agar huruf muncul dari bawah
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants} className="text-xl font-medium text-gray-7 dark:text-gray-4">
            {letter === ' ' ? '\u00A0' : letter} {/* Menangani spasi */}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
