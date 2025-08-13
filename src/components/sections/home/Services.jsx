import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { Laptop, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useContext(LanguageContext);

  const serviceList = [
    {
      key: 'fullstack',
      icon: <Laptop size={26} className="text-gray-7 dark:text-gray-1" />,
      title: t('home.services.fullstack.title'),
      description: t('home.services.fullstack.description'),
    },
    {
      key: 'backend',
      icon: <Laptop size={26} className="text-gray-7 dark:text-gray-1" />,
      title: t('home.services.backend.title'),
      description: t('home.services.backend.description'),
    },
    {
      key: 'frontend',
      icon: <Laptop size={26} className="text-gray-7 dark:text-gray-1" />,
      title: t('home.services.frontend.title'),
      description: t('home.services.frontend.description'),
    },
    {
      key: 'UI UX Designer',
      icon: <Palette size={26} className="text-gray-7 dark:text-gray-1" />,
      title: t('home.services.uiux.title'),
      description: t('home.services.uiux.description'),
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center text-xl text-gray-9 dark:text-whitee mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book-user-icon lucide-book-user"
        >
          <path d="M15 13a3 3 0 1 0-6 0" />
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
          <circle cx="12" cy="8" r="2" />
        </svg>
        <p className="pl-1">{t('home.service')}</p>
      </div>

      <p className="text-lg text-gray-6 dark:text-gray-4">{t('home.services_paragraph')}</p>
    </div>
  );
};

export default Services;
