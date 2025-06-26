import { Globe } from 'lucide-react';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';

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
        <button onClick={() => setShowFullBio((prev) => !prev)} className="text-blue-600 hover:underline text-sm">
          {showFullBio ? 'Show less' : 'Show more'}
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
                <div className="bg-blue-6 h-2 rounded-full transition-all duration-1000" style={{ width: `${lang.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
