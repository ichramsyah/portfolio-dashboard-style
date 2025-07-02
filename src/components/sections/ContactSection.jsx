import SectionHeader from '../common/SectionHeader';
import SocialCards from './contact/SocialCards';

const ContactSection = () => {
  return (
    <div className="py-12">
      <SectionHeader title="Contact" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem qui impedit suscipit voluptatem accusantium quam tempora! Commodi, reiciendis repellendus!" />
      <SocialCards />
    </div>
  );
};

export default ContactSection;
