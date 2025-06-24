import About from '../common/about/About';
import Education from '../common/about/Education';
import Experience from '../common/about/Experience';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-12">
      <h1 className="text-3xl font-medium text-gray-9 dark:text-whitee mb-5">{t('about.title')}</h1>
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default AboutSection;
