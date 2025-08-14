import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { Laptop, LayoutGrid, Palette } from 'lucide-react';
import SpotlightCard from '../../common/SpotlightCard';
import TechStackMarquee from './TechStackMarquee';
import { Home, User, Award, Briefcase, Mail, Moon, Sun, X, MessageSquareText } from 'lucide-react';
import CircularGallery from '../../common/CircularGallery';

const Services = ({ setActiveSection }) => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="mt-8">
      <div className="flex items-center text-xl text-gray-9 dark:text-whitee mb-4">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.435c0-.256.051-.512.153-.758.233-.56.854-1.046 2.095-2.018l6.206-4.856c1.241-.972 1.862-1.458 2.577-1.64.63-.16 1.308-.16 1.938 0 .715.183 1.336.668 2.577 1.64l6.206 4.856c1.241.972 1.862 1.458 2.095 2.018.102.246.153.502.153.758v3.13c0 .256-.051.512-.153.758-.233.56-.854 1.046-2.095 2.017l-6.206 4.857c-1.241.972-1.862 1.457-2.577 1.64-.63.16-1.308.16-1.938 0-.715-.183-1.336-.668-2.577-1.64L2.248 16.34C1.007 15.37.386 14.883.153 14.323A1.971 1.971 0 0 1 0 13.565v-3.13Zm9.34-3.238.887.694c.62.485.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.335 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.975.975 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-.887-.694c-.62-.486-.93-.729-1.289-.82a1.984 1.984 0 0 0-.968 0c-.358.091-.668.334-1.29.82l-.886.694c-.62.485-.93.728-1.047 1.008a.975.975 0 0 0 0 .758c.116.28.427.523 1.047 1.009Zm5.91 4.625.887.694c.62.486.931.729 1.29.82.314.08.653.08.968 0 .358-.091.668-.334 1.288-.82l.887-.694c.62-.485.931-.728 1.047-1.008a.976.976 0 0 0 0-.758c-.116-.28-.426-.523-1.047-1.009l-.887-.694c-.62-.485-.93-.728-1.288-.82a1.984 1.984 0 0 0-.969 0c-.358.092-.668.335-1.289.82l-.886.694c-.621.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Zm-11.82 0 6.797 5.32c.62.486.93.728 1.289.82.315.08.653.08.968 0 .358-.092.668-.334 1.29-.82l.886-.694c.62-.486.93-.729 1.047-1.009a.974.974 0 0 0 0-.758c-.116-.28-.427-.523-1.047-1.008l-6.797-5.32c-.62-.485-.931-.728-1.29-.82a1.984 1.984 0 0 0-.968 0c-.358.092-.668.335-1.288.82l-.887.694c-.62.486-.931.729-1.047 1.009a.975.975 0 0 0 0 .758c.116.28.426.523 1.047 1.008Z"></path>
        </svg>
        <p className="pl-2">{t('home.service')}</p>
      </div>
      <p className="text-lg text-gray-6 dark:text-gray-4">{t('home.services_paragraph')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
        {/* Baris 1 */}
        <SpotlightCard className="h-76 rounded-lg" spotlightColor="rgba(221, 221, 221, 0.2)">
          <div className="flex flex-col items-center justify-center p-5">
            <LayoutGrid width={40} height={40} className="text-gray-7 dark:text-gray-2 p-2 rounded-md" />
            <span className="pt-4 text-gray-8 dark:text-gray-2">Skills & Tools</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">A collection of my technical skills and tools.</p>
          </div>
          <TechStackMarquee />
        </SpotlightCard>

        <SpotlightCard className="h-76 rounded-lg" spotlightColor="rgba(221, 221, 221, 0.2)">
          <div className="flex flex-col items-center justify-center p-5">
            <button onClick={() => setActiveSection('about')}>
              <User width={40} height={40} className="text-gray-7 transition-all cursor-pointer hover:bg-neutral-1 hover:shadow-sm dark:hover:bg-gray-8 hover:scale-105 dark:text-gray-2 p-2 rounded-md" />
            </button>
            <span className="pt-4 text-gray-8 dark:text-gray-2">About me</span>
            <p className="text-center text-gray-6 dark:text-gray-4 text-[12px] py-2">A brief introduction about myself.</p>
          </div>
          <div className="relative mt-[-30px]">
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </SpotlightCard>

        <SpotlightCard className="h-76 rounded-lg lg:col-span-2" spotlightColor="rgba(221, 221, 221, 0.2)">
          3
        </SpotlightCard>

        {/* Baris 2 */}
        <SpotlightCard className="h-76 rounded-lg lg:col-span-2" spotlightColor="rgba(221, 221, 221, 0.2)">
          4
        </SpotlightCard>

        <SpotlightCard className="h-76 rounded-lg" spotlightColor="rgba(221, 221, 221, 0.2)">
          5
        </SpotlightCard>

        <SpotlightCard className="h-76 rounded-lg" spotlightColor="rgba(221, 221, 221, 0.2)">
          6
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Services;
