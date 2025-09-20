import React from 'react';
import { motion } from 'framer-motion';

// --- Konfigurasi ---
const TEXT_TO_REVEAL = '0123456789';
const ROTATION_DURATION = 5;
const RADIUS = 120;

const Preloader = () => {
  const letters = Array.from(TEXT_TO_REVEAL);
  const numLetters = letters.length;

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeOut' } }} className="fixed inset-0 z-[100] flex items-center justify-center bg-whitee dark:bg-background-dark">
      <div className="relative w-[300px] h-[300px]">
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: ROTATION_DURATION,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="absolute w-[600px] h-[600px] left-1/2 -top-[300px]"
            style={{
              transform: 'translateX(-50%)',
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 80%, #b3f1ffff 98%, transparent 100%)',
              maskImage: 'radial-gradient(circle at center, white 5%, transparent 60%)',
            }}
          />
        </motion.div>

        {letters.map((char, i) => {
          const angle = (i / numLetters) * 360;
          const x = RADIUS * Math.cos((angle - 90) * (Math.PI / 180));
          const y = RADIUS * Math.sin((angle - 90) * (Math.PI / 180));

          const activationDelay = (i / numLetters) * ROTATION_DURATION;

          return (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 text-2xl font-bold"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                color: '#444', // Warna awal saat "gelap"
              }}
              initial={{ color: '#444' }}
              animate={{ color: ['#444', '#fff', '#444'] }}
              transition={{
                duration: 1.5,
                delay: activationDelay,
                repeat: Infinity,
                repeatDelay: ROTATION_DURATION - 1.5,
                ease: 'easeOut',
                times: [0, 0.2, 1], // Cepat menyala, lambat meredup
              }}
            >
              {char}
            </motion.span>
          );
        })}

        {/* Titik Pusat (Mercusuar) yang Berdenyut */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            backgroundColor: ['#383838ff', '#f0f9ff', '#2d2d2dff'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
