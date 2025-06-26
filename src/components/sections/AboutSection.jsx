import About from '../sections/about/About';
import Education from '../sections/about/Education';
import Experience from '../sections/about/Experience';
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
