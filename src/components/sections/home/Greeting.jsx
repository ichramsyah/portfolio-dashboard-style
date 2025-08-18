import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';

const Greeting = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="border-b border-gray-3 dark:border-gray-7 pb-8">
      <h1 className="text-3xl font-medium text-gray-8 dark:text-whitee transition-color duration-400">{t('home.greeting')}</h1>
      <div className="flex items-center pt-3">
        <h3 className="text-xl text-gray-7 dark:text-gray-4 ">{t('home.religion')}</h3>
        <p className="pl-2 text-gray-7 dark:text-gray-4">🇮🇩</p>
      </div>
      <p className="text-[17px] text-gray-6 dark:text-gray-3 mt-4 md:pr-10 pr-0">{t('home.description')}</p>
    </div>
  );
};

export default Greeting;
