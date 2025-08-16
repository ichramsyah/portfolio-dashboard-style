import Greeting from '../sections/home/Greeting';
import Services from '../sections/home/Services';
import Skills from './home/Skills';
import GithubContributionStats from './home/GithubContributionStats';
import GitHubCalendar from 'react-github-calendar';

const HomeSection = ({ setActiveSection }) => {
  return (
    <div className="py-12 md:mt-0 mt-3">
      <div className="mx-auto">
        <Greeting />
        <Skills />

        <GithubContributionStats username="ichramsyah" />
        <Services setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default HomeSection;
