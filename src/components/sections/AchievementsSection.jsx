import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Award, Star, Calendar } from 'lucide-react';

const AchievementsSection = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');

  const achievements = [
    { id: 1, type: 'certification', title: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2024', icon: Award },
    { id: 2, type: 'award', title: 'Best Developer Award', issuer: 'Tech Company', date: '2023', icon: Star },
    { id: 3, type: 'certification', title: 'React Developer Certification', issuer: 'Meta', date: '2023', icon: Award },
    { id: 4, type: 'award', title: 'Innovation Prize', issuer: 'Startup Accelerator', date: '2022', icon: Star },
  ];

  const filteredAchievements = filter === 'all' ? achievements : achievements.filter((a) => a.type === filter);

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-gray-9 dark:text-whitee mb-8">{t('achievements.title')}</h1>

      <div className="flex space-x-4 mb-8">
        {['all', 'certifications', 'awards'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType === 'certifications' ? 'certification' : filterType === 'awards' ? 'award' : 'all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              (filter === 'all' && filterType === 'all') || (filter === 'certification' && filterType === 'certifications') || (filter === 'award' && filterType === 'awards')
                ? 'bg-blue-600 text-whitee'
                : 'bg-gray-1 dark:bg-gray-8 text-gray-7 dark:text-gray-3 hover:bg-gray-2 dark:hover:bg-gray-7'
            }`}
          >
            {t(`achievements.${filterType}`)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div key={achievement.id} className="bg-whitee dark:bg-gray-8 rounded-lg p-6 shadow-sm border border-gray-2 dark:border-gray-7 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Icon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-9 dark:text-whitee mb-1">{achievement.title}</h3>
                  <p className="text-gray-6 dark:text-gray-4 text-sm mb-2">{achievement.issuer}</p>
                  <div className="flex items-center text-sm text-gray-5 dark:text-gray-4">
                    <Calendar size={16} className="mr-1" />
                    {achievement.date}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
