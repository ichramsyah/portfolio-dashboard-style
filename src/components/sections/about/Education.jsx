import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center text-xl font-semibold text-gray-9 dark:text-whitee mb-6"
      >
        <GraduationCap className="mr-2" /> {t('about.education')}
      </motion.h3>
      <div className="space-y-6">
        {educationItems.map((edu, index) => (
          <div key={index} className="flex space-x-4">
            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.3 }} viewport={{ once: false }} className="flex-shrink-0 w-2 bg-blue-3 rounded-full origin-top" />
            <div className="flex-1">
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: false }}
                className="bg-linear-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9  rounded-lg p-6  border border-gray-2 dark:border-gray-7"
              >
                <div className="flex items-start space-x-4">
                  <img src={edu.logo} className="w-7 object-contain mt-[3px]" alt="" />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-9 dark:text-whitee mb-1">{edu.school}</h4>
                    <p className="text-blue-4 dark:text-blue-3 mb-2">{edu.degree}</p>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm text-gray-5 dark:text-gray-4">{edu.year}</p>
                      <p className="text-[12px] text-gray-5 dark:text-gray-4">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
