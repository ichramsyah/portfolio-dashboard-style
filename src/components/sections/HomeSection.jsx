import Greeting from '../sections/home/Greeting';
import Services from '../sections/home/Services';
import Skills from './home/Skills';
import GithubContributionStats from './home/GithubContributionStats';

import BannerAI from './home/BannerAI';

const HomeSection = ({ setActiveSection }) => {
  return (
    <div className="py-14 lg:py-8 md:mt-0 mt-3">
      <div className="mx-auto">
        <Greeting />
        <Skills />
        <GithubContributionStats username="ichramsyah" />
        <BannerAI setActiveSection={setActiveSection} />
        <Services setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default HomeSection;
