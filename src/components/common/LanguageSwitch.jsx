import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitch = ({ options = [], activeIndex = 0, onChange }) => {
  return (
    <div
      className="flex items-center justify-center w-9 h-7 border-3 border-gray-3/40 dark:border-gray-5/10 rounded-lg bg-gray-2 dark:bg-gray-5/20 cursor-pointer overflow-hidden"
      onClick={() => onChange((activeIndex + 1) % options.length)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={options[activeIndex].value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[16px] font-medium text-gray-9 dark:text-whitee transition-transform duration-400 hover:scale-120"
        >
          {options[activeIndex].icon || options[activeIndex].label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitch;
