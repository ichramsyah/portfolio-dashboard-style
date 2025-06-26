import FilterTabs from '../sections/achievements/FilterTabs';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import SectionHeader from '../common/SectionHeader';

const AchievementsSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-12">
      <SectionHeader title={t('achievements.title')} description={t('achievements.description')} />
      <FilterTabs />
    </div>
  );
};

export default AchievementsSection;
