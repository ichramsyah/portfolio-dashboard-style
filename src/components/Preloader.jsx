import React from 'react';
import { motion } from 'framer-motion';

const ParticleVortexPreloader = () => {
  const numParticles = 100;
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFD700'];

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.8 } }} className="fixed inset-0 z-[100] flex items-center justify-center bg-whitee dark:bg-background-dark">
      <div className="relative w-[300px] h-[300px]">
        <motion.div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-blue-500 blur-sm transform -translate-x-1/2 -translate-y-1/2" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />

        {[...Array(numParticles)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = Math.random() * 1 + 1.5;
          const radius = Math.random() * 100 + 40;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 4 + 1;

          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [0, radius * Math.cos(i), radius * Math.cos(i + Math.PI)],
                y: [0, radius * Math.sin(i), radius * Math.sin(i + Math.PI)],
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 0.5, 0],
                rotate: 360,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
      <motion.p className="absolute bottom-20 text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
        Gathering Inspiration
      </motion.p>
    </motion.div>
  );
};

export default ParticleVortexPreloader;
