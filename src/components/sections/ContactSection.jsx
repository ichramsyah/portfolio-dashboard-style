import { LanguageContext } from '../../contexts/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import SocialCards from './contact/SocialCards';
import { useContext } from 'react';

const ContactSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="py-12">
      <SectionHeader title={t('contact.title')} description={t('contact.description')} />
      <SocialCards />
    </div>
  );
};

export default ContactSection;
