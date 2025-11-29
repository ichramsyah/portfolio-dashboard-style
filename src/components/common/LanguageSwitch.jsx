import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitch = ({ options = [], activeIndex = 0, onChange }) => {
  return (
    <div
      className="flex items-center justify-center mt-[3px] w-10 h-[34px] cursor-pointer overflow-hidden rounded-lg bg-gray-3/40 dark:bg-gray-5/20 inset-shadow-sm inset-shadow-gray-4/30 dark:inset-shadow-gray-5/10 select-none"
      onClick={() => onChange((activeIndex + 1) % options.length)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={options[activeIndex].value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[20px] transition-transform duration-400 hover:scale-120 w-full h-full flex items-center justify-center"
        >
          {options[activeIndex].icon || options[activeIndex].label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitch;
