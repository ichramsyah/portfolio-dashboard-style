import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { Award, Brush, Layers, LayoutGrid, MessageSquareText } from 'lucide-react';
import SpotlightCard from '../../common/SpotlightCard';
import TechStackMarquee from './TechStackMarquee';
import { User } from 'lucide-react';
import CircularGallery from '../../common/CircularGallery';
import CardSwap, { Card } from '../../common/CardSwap';
import TrueFocus from '../../common/TrueFocus';
import Stack from '../../common/Stack';

const Services = ({ setActiveSection }) => {
  const { t } = useContext(LanguageContext);

  const images = [
    { id: 1, img: './images/certificate/frontenddevelopment.png' },
    { id: 2, img: './images/certificate/hackaton.jpg' },
    { id: 3, img: './images/certificate/javascriptintermediate.jpg' },
    { id: 4, img: './images/certificate/Sertifikat IBM.png' },
    { id: 5, img: './images/certificate/legacyfrontend.png' },
    { id: 6, img: './images/certificate/javascriptalgorithm.png' },
    { id: 7, img: './images/certificate/responsivewebdesign.png' },
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center text-xl text-gray-9 dark:text-whitee mb-4">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.435c0-.256.051-.512.153-.758.233-.56.854-1.046 2.095-2.018l6.206-4.856c1.241-.972 1.862-1.458 2.577-1.64.63-.16 1.308-.16 1.938 0 .715.183 1.336.668 2.577 1.64l6.206 4.856c1.241.972 1.862 1.458 2.095 2.018.102.246.153.502.153.758v3.13c0 .256-.051.512-.153.758-.233.56-.854 1.046-2.095 2.017l-6.206 4.857c-1.241.972-1.862 1.457-2.577 1.64-.63.16-1.308.16-1.938 0-.715-.183-1.336-.668-2.577-1.64L2.248 16.34C1.007 15.37.386 14.883.153 14.323A1.971 1.971 0 0 1 0 13.565v-3.13Zm9.34-3.238.887.694c.62.485.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.335 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.975.975 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-.887-.694c-.62-.486-.93-.729-1.289-.82a1.984 1.984 0 0 0-.968 0c-.358.091-.668.334-1.29.82l-.886.694c-.62.485-.93.728-1.047 1.008a.975.975 0 0 0 0 .758c.116.28.427.523 1.047 1.009Zm5.91 4.625.887.694c.62.486.931.729 1.29.82.314.08.653.08.968 0 .358-.091.668-.334 1.288-.82l.887-.694c.62-.485.931-.728 1.047-1.008a.976.976 0 0 0 0-.758c-.116-.28-.426-.523-1.047-1.009l-.887-.694c-.62-.485-.93-.728-1.288-.82a1.984 1.984 0 0 0-.969 0c-.358.092-.668.335-1.289.82l-.886.694c-.621.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Zm-11.82 0 6.797 5.32c.62.486.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.334 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.974.974 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-6.797-5.32c-.62-.485-.931-.728-1.29-.82a1.984 1.984 0 0 0-.968 0c-.358.092-.668.335-1.288.82l-.887.694c-.62.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Z"></path>
        </svg>
        <p className="pl-2">{t('home.service')}</p>
      </div>
      <p className="text-lg text-gray-6 dark:text-gray-4">{t('home.services_paragraph')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-[10px] gap-3 mt-6">
        {/* 1 */}
        <SpotlightCard className="h-76 rounded-lg">
          <div className="flex flex-col items-center justify-center p-5">
            <LayoutGrid width={40} height={40} className="text-gray-7 dark:text-gray-2 p-2 rounded-md" />
            <span className="pt-4 text-gray-8 dark:text-gray-2">{t('home.skills')}</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.skills_paragraph')}</p>
          </div>
          <TechStackMarquee />
        </SpotlightCard>

        {/* 2 */}
        <SpotlightCard className="h-76 rounded-lg">
          <div className="flex flex-col items-center justify-center p-5">
            <button onClick={() => setActiveSection('about')}>
              <User width={40} height={40} className="text-gray-7 transition-all cursor-pointer hover:bg-neutral-1 hover:shadow-sm dark:hover:bg-gray-8 hover:scale-105 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <span className="pt-4 text-gray-8 dark:text-gray-2">{t('home.service_about')}</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.service_about_desc')}</p>
          </div>
          <div className="relative mt-[-30px]">
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </SpotlightCard>

        {/* 3 */}
        <SpotlightCard className="h-76 rounded-lg lg:col-span-2 w-full h-full flex">
          <div className="w-1/2 py-5 px-6">
            <button onClick={() => setActiveSection('projects')}>
              <Layers width={40} height={40} className="text-gray-7 transition-all cursor-pointer hover:bg-neutral-1 hover:shadow-sm dark:hover:bg-gray-8 hover:scale-105 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <div className="pt-2">
              <span className="text-gray-8 dark:text-gray-2">{t('home.service_project')}</span>
              <p className="text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.service_project_desc')}</p>
            </div>
          </div>
          <div className="w-1/2 h-[160px] max-sm:h-[305px]">
            <CardSwap width={280} height={160} delay={3000} cardDistance={60} verticalDistance={70} pauseOnHover={false}>
              <Card>
                <img className="rounded-lg" src="./images/portfolio-dashboard.png" alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
              <Card>
                <img className="rounded-lg" src="./images/velochat.png" alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
              <Card>
                <img className="rounded-lg" src="./images/rinema.png" alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
              <Card>
                <img className="rounded-lg" src="./images/rinema-rebuild.png" alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
              <Card>
                <img className="rounded-lg" src="./images/portfolio-landingpage.png" alt="Card Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Card>
            </CardSwap>
          </div>
        </SpotlightCard>

        {/* 4 */}
        <SpotlightCard className="h-76 rounded-lg lg:col-span-2 w-full h-full flex">
          <div className="w-1/2 py-5 px-6">
            <button>
              <Brush width={40} height={40} className="text-gray-7 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <div className="pt-2">
              <span className="text-gray-8 dark:text-gray-2">{t('home.service_services')}</span>
              <p className="text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.service_services_desc')}</p>
            </div>
          </div>
          {/* Kontainer yang sudah diperbaiki */}
          <div className="w-1/2 h-[160px] max-sm:h-[305px] flex items-center justify-center md:mt-13 mt-0">
            <TrueFocus sentence="Web UI/UX" manualMode={false} blurAmount={5} animationDuration={1} pauseBetweenAnimations={2} />
          </div>
        </SpotlightCard>

        {/* 5 */}
        <SpotlightCard className="h-76 rounded-lg">
          <div className="flex flex-col items-center justify-center p-5">
            <button onClick={() => setActiveSection('chatroom')}>
              <MessageSquareText width={40} height={40} className="text-gray-7 transition-all cursor-pointer hover:bg-neutral-1 hover:shadow-sm dark:hover:bg-gray-8 hover:scale-105 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <span className="pt-4 text-gray-8 dark:text-gray-2">{t('home.service_chatroom')}</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.service_chatroom_desc')}</p>
          </div>
          <div className="px-2 space-y-3">
            <div className="flex justify-start">
              <div className="max-w-xs rounded-xl rounded-tl-none bg-gray-2 p-3 text-gray-8 dark:bg-gray-8 dark:text-gray-2 chat-bubble-1">
                <p className="text-sm">Hi, is this your website?</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-xs rounded-xl rounded-tr-none bg-blue-5 p-3 text-white chat-bubble-2">
                <p className="text-sm">Yes, I built it myself!</p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* 6 */}
        <SpotlightCard className="h-76 rounded-lg">
          <div className="flex flex-col items-center justify-center p-5">
            <button onClick={() => setActiveSection('achievements')}>
              <Award width={40} height={40} className="text-gray-7 transition-all cursor-pointer hover:bg-neutral-1 hover:shadow-sm dark:hover:bg-gray-8 hover:scale-105 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <span className="pt-4 text-gray-8 dark:text-gray-2">{t('home.service_achievements')}</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">{t('home.service_achievements_desc')}</p>
          </div>
          <div className="flex-grow flex items-center justify-center w-full p-4">
            <Stack cardsData={images} sendToBackOnClick={false} />
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;
