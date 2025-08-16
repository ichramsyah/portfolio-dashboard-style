import FilterTabs from '../sections/achievements/FilterTabs';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import SectionHeader from '../common/SectionHeader';

const AchievementsSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-12 md:mt-0 mt-3">
      <SectionHeader title={t('achievements.title')} description={t('achievements.description')} />
      <FilterTabs />
    </div>
  );
};

export default AchievementsSection;
