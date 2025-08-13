import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Greeting = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="border-b border-gray-3 dark:border-gray-7 pb-8">
      <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-gray-8 dark:text-whitee">
        {t('home.greeting')}
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="flex items-center pt-3">
        <h3 className="text-xl text-gray-7 dark:text-gray-4 ">{t('home.religion')}</h3>
        <p className="pl-2 text-gray-7 dark:text-gray-4">🇮🇩</p>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }} viewport={{ once: true }} className="text-lg text-gray-6 dark:text-gray-4 mt-4">
        {t('home.description')}
      </motion.p>
    </div>
  );
};

export default Greeting;
