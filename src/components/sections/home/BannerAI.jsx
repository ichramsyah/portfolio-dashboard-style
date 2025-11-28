import { BsStars } from 'react-icons/bs';

const BannerAI = ({ setActiveSection }) => {
  return (
    <div className="mt-10 pb-2">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        @keyframes text-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-flow 1s linear infinite;
        }
      `}</style>

      <div className="relative overflow-hidden flex w-full md:p-7 p-6 rounded-lg bg-gradient-to-br from-blue-5 via-blue-4 to-gray-2 dark:bg-gradient-to-br dark:from-blue-6 dark:via-blue-4 dark:to-gray-3">
        <div className="md:w-1/2 w-full lg:pr-0 pr-8 z-10">
          <h1 className="md:text-[23px] text-[19px] font-medium text-whitee">
            Mulai chat dengan
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-4 via-blue-2 to-whitee animate-text-gradient"> Hailyo</span>, AI asisten pribadi ichramsyah
          </h1>
          <button onClick={() => setActiveSection('aichat')} className="lg:mt-4 mt-7 text-sm bg-whitee/20 hover:bg-whitee/30 transition-all px-4 py-2 rounded-lg text-whitee font-medium cursor-pointer">
            Chat Hailyo
          </button>
        </div>

        <div className="absolute bottom-[-65px] right-[-10px] text-whitee opacity-90 pointer-events-auto">
          <div className="animate-float transition-all duration-300 hover:scale-110 hover:rotate-12">
            <BsStars className="md:text-[180px] text-[160px]" />
          </div>
        </div>
        <div className="absolute left-[-25px] top-[-28px] text-whitee opacity-50 pointer-events-auto">
          <div className="animate-float transition-all duration-300 hover:scale-110 hover:rotate-12">
            <BsStars className="text-[80px] rotate-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAI;
