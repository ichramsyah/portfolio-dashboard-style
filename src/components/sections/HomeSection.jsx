import TechStackMarquee from '../common/home/TechStackMarquee';
import GithubContribution from '../common/home/GithubContribution';
import Greeting from '../common/home/Greeting';
import Services from '../common/home/Services';

const HomeSection = () => {
  return (
    <div className="py-12">
      <div className="mx-auto">
        <Greeting />
        <TechStackMarquee />
        <GithubContribution />
        <Services />
      </div>
    </div>
  );
};

export default HomeSection;
