import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitch = ({ options = [], activeIndex = 0, onChange }) => {
  return (
    <div className="flex items-center justify-center w-20 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer overflow-hidden" onClick={() => onChange((activeIndex + 1) % options.length)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={options[activeIndex].value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-sm font-medium text-gray-900 dark:text-white"
        >
          {options[activeIndex].icon || options[activeIndex].label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitch;
