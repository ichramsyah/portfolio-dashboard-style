import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import StrokeText from '../../common/StrokeText';

const Greeting = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="border-b border-gray-3 dark:border-gray-5/30 pb-8">
      <StrokeText text={t('home.greeting')} className="text-3xl text-gray-8 dark:text-neutral-200 transition-color duration-300" />
      <div className="flex items-center pt-2 text-[17px] text-gray-7 dark:text-gray-4/90">
        <h3 className="">{t('home.religion')}</h3>
        <p className="pl-2">🇮🇩</p>
      </div>
      <p className="text-[16px] text-gray-6 dark:text-gray-3 mt-4 md:pr-10 pr-0 leading-loose">{t('home.description')}</p>
    </div>
  );
};

export default Greeting;
