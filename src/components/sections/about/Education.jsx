import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
const Education = () => {
  const { t } = useContext(LanguageContext);

  const educationItems = t('about.educationItems', { returnObjects: true });
  return (
    <div className="">
      <h3 className="flex items-center text-xl font-semibold text-gray-9 dark:text-whitee mb-6">
        <GraduationCap className="mr-2" /> {t('about.education')}
      </h3>
      <div className="space-y-6">
        {educationItems.map((edu, index) => (
          <div key={index} className="flex space-x-4">
            <div className="flex-shrink-0 w-2 bg-blue-3 rounded-full"></div>
            <div className="flex-1">
              <div className="bg-linear-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9  rounded-lg p-6  border border-gray-2 dark:border-gray-7">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
