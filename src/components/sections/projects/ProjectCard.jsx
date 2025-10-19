import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiPostman } from 'react-icons/si';
import SpotlightCard from '../../common/SpotlightCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, techIcons, categoryIcons, t, onProjectClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.9 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: false }}
      className="relative rounded-lg p-[4px] h-full"
    >
      <div className="absolute flex top-0 right-0 z-10">
        {Array.isArray(project.category) ? (
          project.category.map((cat, index) => (
            <span
              key={index}
              className="font-medium pl-5 pr-5 pb-[10px] py-[6px] text-sm rounded-tr-[7px] rounded-bl-[28px] bg-blue-3 dark:bg-blue-4 text-white dark:text-gray-2"
              style={{
                right: index * 50,
                zIndex: project.category.length - index,
              }}
            >
              <div className="flex items-center gap-2">
                {categoryIcons[cat]}
                {cat}
              </div>
            </span>
          ))
        ) : (
          <span className="font-medium pl-5 pr-5 pb-[10px] py-[6px] text-sm rounded-tr-[7px] rounded-bl-[28px] bg-blue-3 dark:bg-gray-8 text-white dark:text-gray-2">
            <div className="flex items-center gap-2">
              {categoryIcons[project.category]}
              {project.category}
            </div>
          </span>
        )}
      </div>
      <SpotlightCard className="h-full rounded-lg bg-gray-1/40 dark:bg-gray-6/10 overflow-hidden flex flex-col">
        <div className="w-full aspect-[16/9] overflow-hidden p-1 relative cursor-pointer group" onClick={() => onProjectClick(project)}>
          <img src={project.image} className="w-full rounded-t-lg bg-gray-3 dark:bg-gray-8 h-full object-cover" alt="" />

          <div className="absolute inset-1 flex items-center justify-center bg-blackk/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
            <div className="flex items-center gap-2 text-whitee font-medium text-gray-7">
              <span>View Details</span>
              <FaArrowRight size={14} />
            </div>
          </div>
        </div>
        <div className="h-full rounded-b-lg overflow-hidden flex flex-col justify-between flex-1 p-6">
          <div>
            <h3 className="text-gray-9 dark:text-whitee mb-3">{project.title}</h3>
            <p className="text-gray-6 dark:text-gray-4 text-sm mb-4">{project.description}</p>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between items-center mt-4">
            <div className="max-[1200px]:w-1/3 max-[480px]:w-full max-[480px]:justify-center max-[480px]:mb-4 flex flex-wrap items-center gap-1">
              {project.tech.map((tech, index) => (
                <img key={index} src={tech.url} className="w-6 object-cover" alt="" />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-[9px]">
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex items-center gap-[5px] transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-gray-7 dark:text-gray-2 text-[18px]"></i>
                  <span className="text-gray-7 dark:text-gray-2 text-sm">Source Code</span>
                </a>
              )}

              {project.githubUrl && project.postmanUrl && <span className="text-gray-4 dark:text-gray-5">|</span>}

              {project.postmanUrl && (
                <a href={project.postmanUrl} className="flex items-center gap-[5px] transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <SiPostman className="text-gray-6 dark:text-gray-2 text-[18px]" />
                  <span className="text-gray-7 dark:text-gray-2 text-sm">Postman</span>
                </a>
              )}

              {(project.postmanUrl || project.githubUrl) && project.demoUrl && <span className="text-gray-4 dark:text-gray-5">|</span>}

              {project.demoUrl && (
                <a href={project.demoUrl} className="flex items-center gap-[5px] transition-all duration-300 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-gray-7 dark:text-gray-2 text-sm" />
                  <span className="text-gray-7 dark:text-gray-2 text-sm">Live Site</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default ProjectCard;
