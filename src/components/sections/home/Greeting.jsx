import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';

const Greeting = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="border-b border-gray-3 dark:border-gray-7 pb-8">
      <h1 className="text-3xl font-medium text-gray-8 dark:text-whitee">{t('home.greeting')} Abdurrachman</h1>
      <div className="flex items-center pt-3">
        <h3 className="text-xl text-gray-7 dark:text-gray-3 ">{t('home.religion')}</h3>
        <p className="ml-2 px-[5px] py-[1px] text-[12px] font-medium bg-gray-2 dark:bg-gray-4 rounded-sm">ID</p>
      </div>
      <p className="text-lg text-gray-6 dark:text-gray-4 mt-4">{t('home.description')}</p>
    </div>
  );
};

export default Greeting;
