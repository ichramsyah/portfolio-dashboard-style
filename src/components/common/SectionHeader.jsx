import { motion } from 'framer-motion';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="pb-8 mb-5 border-b border-gray-3 dark:border-gray-7">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-gray-9 dark:text-gray-1 mb-3">
        {title}
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="text-[17px] text-gray-6 dark:text-gray-4">
        {description}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
