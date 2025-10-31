import { CodeBracketIcon } from '@heroicons/react/16/solid';
import GlassIcons from '../../common/GlassIcons';
import { FaReact, FaLaravel, FaPhp, FaBootstrap, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma, FaPython, FaNodeJs, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiMongodb, SiPostman, SiAdobeillustrator, SiCpanel, SiFirebase, SiDjango, SiDocker } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiHtml5 } from 'react-icons/di';
import { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import IconPm2 from '../../common/icon/IconPm2';
import IconGunicorn from '../../common/icon/IconGunicorn';

const Skills = () => {
  const { t } = useContext(LanguageContext);
  const items = [
    { icon: <FaReact size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'react', label: 'React' },
    { icon: <SiNextdotjs size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'nextjs', label: 'Next.js' },
    { icon: <FaLaravel size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'laravel', label: 'Laravel' },
    { icon: <SiExpress size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'express', label: 'Express.js' },
    { icon: <SiDjango size={26} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'django', label: 'Django' },
    { icon: <FaJs size={30} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'javascript', label: 'JavaScript' },
    { icon: <SiTypescript size={27} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'typescript', label: 'TypeScript' },
    { icon: <FaNodeJs size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'nodejs', label: 'Node.js' },
    { icon: <FaPhp size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'php', label: 'PHP' },
    { icon: <FaPython size={30} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'python', label: 'Python' },
    { icon: <SiFirebase size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'firebase', label: 'Firebase' },
    { icon: <FaLinux size={30} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'linux', label: 'Linux' },
    { icon: <FaUbuntu size={30} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'ubuntu', label: 'Ubuntu' },
    { icon: <SiDocker size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'docker', label: 'Docker' },
    { icon: <IconPm2 size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'pm2', label: 'PM2' },
    { icon: <IconGunicorn size={100} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'gunicorn', label: 'Gunicorn' },
    { icon: <SiTailwindcss size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'tailwind', label: 'Tailwind CSS' },
    { icon: <FaBootstrap size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'bootstrap', label: 'Bootstrap' },
    { icon: <GrMysql size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'mysql', label: 'MySQL' },
    { icon: <SiMongodb size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'mongodb', label: 'MongoDB' },
    { icon: <DiHtml5 size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'html', label: 'HTML5' },
    { icon: <FaCss3Alt size={32} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'css', label: 'CSS3' },
    { icon: <FaGitAlt size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'git', label: 'Git' },
    { icon: <FaGithub size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'github', label: 'GitHub' },
    { icon: <SiPostman size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'postman', label: 'Postman' },
    { icon: <FaFigma size={32} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'figma', label: 'Figma' },
    { icon: <SiAdobeillustrator size={28} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'adobeillustrator', label: 'Adobe Illustrator' },
    { icon: <SiCpanel size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'cpanel', label: 'cPanel' },
  ];

  return (
    <div className="w-full mx-auto mt-8 border-b border-gray-3 dark:border-gray-7">
      <div className="space-y-2">
        <h3 className="flex items-center text-xl  text-gray-9 dark:text-gray-3 ">
          <CodeBracketIcon className="text-sm w-6 " />
          <span className="ml-2">{t('home.skills')}</span>
        </h3>
        <p className="text-gray-5 dark:text-gray-4">{t('home.skills_paragraph')}</p>
      </div>
      <div className="md:mb-1 mb-0">
        <GlassIcons items={items} className="custom-class" />
      </div>
    </div>
  );
};

export default Skills;
