import About from '../sections/about/About';
import Education from '../sections/about/Education';
import Experience from '../sections/about/Experience';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-14 lg:py-8 md:mt-0 mt-3 mr-2">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} viewport={{ once: true }} className="text-3xl font-medium text-gray-9 dark:text-gray-1 mb-5">
        {t('about.title')}
      </motion.h1>
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default AboutSection;
