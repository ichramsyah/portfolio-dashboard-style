import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, techIcons, categoryIcons, t }) => {
  return (
    <div className="relative rounded-lg p-[4px] border-[2px] border-gray-2 dark:border-gray-7 h-full">
      <div className="absolute flex top-0 right-0">
        <span className="font-medium pl-7 pr-5 pb-[11px] py-[6px] text-sm rounded-tr-[7px] rounded-bl-[50px] bg-blue-4 text-white dark:text-gray-2">
          <div className="flex items-center gap-2">
            {categoryIcons[project.category]}
            {project.category}
          </div>
        </span>
      </div>
      <div className="h-full rounded-lg overflow-hidden flex flex-col">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src={project.image} className="w-full bg-gray-3 dark:bg-gray-8 h-full object-cover" alt="" />
        </div>
        <div className="bg-whitee h-full dark:bg-gray-8 rounded-lg overflow-hidden bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 flex flex-col justify-between flex-1 p-6">
          <div>
            <h3 className="font-semibold text-gray-9 dark:text-whitee mb-2">{project.title}</h3>
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
                <a href={project.githubUrl} className="flex items-center gap-[5px] transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github text-gray-7 dark:text-gray-2 text-[18px]"></i>
                  <span className="text-gray-7 dark:text-gray-2 text-sm">{t('projects.sourceCode')}</span>
                </a>
              )}
              {project.githubUrl && project.demoUrl && <span className="text-gray-4 dark:text-gray-5">|</span>}
              {project.demoUrl && (
                <a href={project.demoUrl} className="flex items-center gap-[5px] transition-all hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-gray-7 dark:text-gray-2 text-sm" />
                  <span className="text-gray-7 dark:text-gray-2 text-sm">{t('projects.liveDemo')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
