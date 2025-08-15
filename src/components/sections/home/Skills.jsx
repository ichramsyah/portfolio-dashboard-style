import { CodeBracketIcon } from '@heroicons/react/16/solid';
import GlassIcons from '../../common/GlassIcons';
import { FaReact, FaLaravel, FaPhp, FaBootstrap, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiHtml5 } from 'react-icons/di';

const Skills = () => {
  const items = [
    { icon: <FaReact size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'react', label: 'React' },
    { icon: <SiNextdotjs size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'nextjs', label: 'Next.js' },
    { icon: <FaLaravel size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'laravel', label: 'Laravel' },
    { icon: <SiExpress size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'express', label: 'Express.js' },
    { icon: <FaJs size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'javascript', label: 'JavaScript' },
    { icon: <SiTypescript size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'typescript', label: 'TypeScript' },
    { icon: <FaPhp size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'php', label: 'PHP' },
    { icon: <SiTailwindcss size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'tailwind', label: 'Tailwind CSS' },
    { icon: <FaBootstrap size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'bootstrap', label: 'Bootstrap' },
    { icon: <GrMysql size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'mysql', label: 'MySQL' },
    { icon: <SiMongodb size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'mongodb', label: 'MongoDB' },
    { icon: <DiHtml5 size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'html', label: 'HTML' },
    { icon: <FaCss3Alt size={40} className="text-gray-9 dark:text-gray-1 transition-color duration-500" />, colorKey: 'css', label: 'CSS' },
  ];

  return (
    <div className="w-full mx-auto mt-8 border-b border-gray-3 dark:border-gray-7">
      <div className="space-y-2">
        <h3 className="flex items-center text-xl  text-gray-9 dark:text-whitee ">
          <CodeBracketIcon className="text-sm w-6 " />
          <span className="ml-2">Skills</span>
        </h3>
        <p className=" text-gray-5 dark:text-gray-4">My professional skills.</p>
      </div>
      <div>
        <GlassIcons items={items} className="custom-class" />
      </div>
    </div>
  );
};

export default Skills;
