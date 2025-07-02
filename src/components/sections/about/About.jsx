import { Globe } from 'lucide-react';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const About = () => {
  const { t } = useContext(LanguageContext);
  const [showFullBio, setShowFullBio] = useState(false);
  const fullBio = t('about.bio');
  const previewBio = fullBio.split('\n\n')[0];

  const language = [
    { name: 'Indonesia', level: 100 },
    { name: 'English', level: 64 },
    { name: '日本語', level: 13 },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12 mb-8 pb-8 border-b border-gray-3 dark:border-gray-7">
      <div>
        <p className="text-[17px] text-gray-6 dark:text-gray-4 mb-3 whitespace-pre-line">{showFullBio ? fullBio : previewBio}</p>
        <button
          onClick={() => setShowFullBio((prev) => !prev)}
          className="inline-flex items-center gap-1 text-sm text-blue-600 bg-blue-100 dark:bg-blue-9 dark:text-blue-3 px-3 py-[5px] rounded-full transition-all hover:bg-blue-200 dark:hover:bg-blue-8"
        >
          {showFullBio ? 'Show less' : 'Show more'}
          <ChevronDown size={16} className={`transition-transform duration-300 transform ${showFullBio ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </div>

      <div>
        <h3 className="flex items-center text-xl font-semibold text-gray-9 dark:text-whitee mb-6">
          <Globe className="mr-2" /> {t('about.language')}
        </h3>
        <div className="space-y-4">
          {language.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-7 dark:text-gray-3">{lang.name}</span>
                <span className="text-gray-5 dark:text-gray-4">{lang.level}%</span>
              </div>
              <div className="w-full bg-gray-2 dark:bg-gray-7 rounded-full h-2">
                <div className="bg-blue-3 h-2 rounded-full transition-all duration-1000" style={{ width: `${lang.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
