import GithubContribution from '../sections/home/GithubContribution';
import Greeting from '../sections/home/Greeting';
import Services from '../sections/home/Services';
import Skills from './home/Skills';

const HomeSection = ({ setActiveSection }) => {
  return (
    <div className="py-12">
      <div className="mx-auto">
        <Greeting />
        <Skills />

        <GithubContribution />
        <Services setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default HomeSection;
