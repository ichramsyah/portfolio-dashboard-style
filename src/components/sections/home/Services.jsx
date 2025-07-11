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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
        viewport={{ once: true }}
        className="flex items-center text-xl text-gray-9 dark:text-whitee mb-4"
      >
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
      </motion.div>

      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }} viewport={{ once: true }} className="text-lg text-gray-6 dark:text-gray-4">
        {t('home.services_paragraph')}
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {serviceList.map((service) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            viewport={{ once: true }}
            key={service.key}
            className="border border-gray-2 dark:border-gray-7 rounded-lg"
          >
            <div className="bg-linear-to-t h-[92%] from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 rounded-lg p-4 border border-gray-2 dark:border-gray-7 m-[5px]">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-1 dark:bg-gray-6 rounded-lg">{service.icon}</div>
                <div className="flex-1">
                  <h3 className=" text-gray-9 dark:text-whitee mb-1">{service.title}</h3>
                  <p className="text-gray-6 dark:text-gray-4 text-sm pr-2">{service.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
