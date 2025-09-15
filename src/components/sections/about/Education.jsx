import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from '../../common/SpotlightCard';

const Education = () => {
  const { t } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const educationItems = t('about.educationItems', { returnObjects: true });
  return (
    <div className="">
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} viewport={{ once: true }} className="flex items-center text-xl  text-gray-9 dark:text-whitee mb-6">
        <GraduationCap className="mr-2" /> {t('about.education')}
      </motion.h3>
      <div className="space-y-6">
        {educationItems.map((edu, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex-1">
              <SpotlightCard className="rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <img src={edu.logo} className="w-7 object-contain mt-[3px]" alt="" />
                  <div className="flex-1">
                    <h4 className="text-xl  text-gray-9 dark:text-whitee mb-1">{edu.school}</h4>
                    <p className="text-blue-4 dark:text-blue-3 mb-2">{edu.degree}</p>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm text-gray-5 dark:text-gray-4">{edu.year}</p>
                      <p className="text-[12px] text-gray-5 dark:text-gray-4">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
