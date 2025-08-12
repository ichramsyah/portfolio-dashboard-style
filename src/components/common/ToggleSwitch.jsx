import { motion } from 'framer-motion';

const ToggleSwitch = ({ option1, option2, isActive, onToggle, activeBg = 'bg-whitee', inactiveBg = 'bg-gray-3', activeColor = 'text-yellow-200', inactiveColor = 'text-whitee' }) => {
  return (
    <div onClick={onToggle} className="relative flex w-15 h-7 cursor-pointer items-center rounded-lg bg-gray-2 dark:bg-gray-8 p-1">
      {/* Latar belakang yang bergeser */}
      <motion.div className={`absolute h-[75%] w-[45%] rounded-md ${activeBg}`} layout transition={{ type: 'spring', stiffness: 400, damping: 60 }} animate={{ x: isActive ? '0%' : '95%' }} />

      {/* Opsi 1 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center">
        <span className={`text-xs transition-colors ${isActive ? activeColor : inactiveColor}`}>{option1.icon}</span>
      </div>

      {/* Opsi 2 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center">
        <span className={`text-xs transition-colors ${!isActive ? activeColor : inactiveColor}`}>{option2.icon}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
