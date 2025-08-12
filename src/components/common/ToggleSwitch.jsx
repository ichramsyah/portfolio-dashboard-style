// components/ToggleSwitch.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ option1, option2, isActive, onToggle }) => {
  return (
    <div onClick={onToggle} className="relative flex w-17 px-1 h-7 cursor-pointer items-center rounded-lg bg-gray-200 p-1">
      {/* Latar belakang yang bergeser */}
      <motion.div className="absolute h-[85%] w-[45%] rounded-md bg-white dark:bg-gray-8 shadow-sm " layout transition={{ type: 'spring', stiffness: 400, damping: 35 }} animate={{ x: isActive ? '0%' : '100%' }} />

      {/* Opsi 1 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center ">
        {option1.icon}
        <span className={`text-xs font-bold transition-colors ${isActive ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>{option1.label}</span>
      </div>

      {/* Opsi 2 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center ">
        {option2.icon}
        <span className={`text-xs font-bold transition-colors ${!isActive ? 'text-gray-800 dark:text-white' : 'text-gray-500'}`}>{option2.label}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
