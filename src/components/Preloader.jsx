import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-whitee dark:bg-background-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-4 dark:border-blue-3"></div>
        <p className="text-gray-7 dark:text-gray-4">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Preloader;
