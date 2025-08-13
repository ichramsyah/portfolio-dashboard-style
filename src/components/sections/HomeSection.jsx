import GithubContribution from '../sections/home/GithubContribution';
import Greeting from '../sections/home/Greeting';
import Services from '../sections/home/Services';

const HomeSection = () => {
  return (
    <div className="py-12">
      <div className="mx-auto">
        <Greeting />
        <GithubContribution />
        <Services />
      </div>
    </div>
  );
};

export default HomeSection;
