import { Globe } from 'lucide-react';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useContext(LanguageContext);
  const [showFullBio, setShowFullBio] = useState(false);
  const fullBio = t('about.bio');
  const previewBio = fullBio.split('\n\n')[0];

  const language = [
    { name: 'Indonesia', level: 100 },
    { name: 'English', level: 75 },
    { name: '日本語', level: 13 },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-8 pb-8 border-b border-gray-3 dark:border-gray-7">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="text-[16px] text-gray-6 dark:text-gray-4 mb-3 whitespace-pre-line"
        >
          {showFullBio ? fullBio : previewBio}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }} viewport={{ once: true }}>
          <button
            onClick={() => setShowFullBio((prev) => !prev)}
            className="inline-flex items-center gap-1 text-sm text-blue-5 dark:text-gray-3 bg-blue-1 dark:bg-gray-5/20 hover:bg-blue-2 dark:hover:bg-gray-5/40 px-4 py-[6px] rounded-full transition-all"
          >
            <span className="mt-[-1px]">{showFullBio ? 'Show less' : 'Show more'}</span>
            <ChevronDown size={16} className={`transition-transform duration-300 transform ${showFullBio ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        </motion.div>
      </div>

      <div>
        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center text-xl text-gray-9 dark:text-whitee mb-6"
        >
          <Globe className="mr-2" /> {t('about.language')}
        </motion.h3>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }} viewport={{ once: true }} className="space-y-4">
          {language.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-7 dark:text-gray-3">{lang.name}</span>
                <span className="text-gray-5 dark:text-gray-4">{lang.level}%</span>
              </div>
              <div className="w-full bg-gray-2 dark:bg-gray-5/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-blue-3 dark:bg-gray-5/30 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 * index }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
