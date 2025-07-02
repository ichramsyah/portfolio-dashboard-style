import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Search, ExternalLink, LayoutGrid, Layers, Code } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { techIcons } from '../common/techIcons';

const ProjectsSection = () => {
  const { t } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categoryIcons = {
    all: <LayoutGrid size={16} />,
    Fullstack: <Layers size={16} />,
    Frontend: <LayoutGrid size={16} />,
    Backend: <Code size={16} />,
  };

  const projectTexts = t('projects.items');

  const projects = [
    {
      id: 1,
      image: 'https://i.ytimg.com/vi/2FnM3nW0jvQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC10cIwA9dyFwRYnTuO3YaRfQ9u8w',
      tech: [techIcons.mongodb, techIcons.express, techIcons.react, techIcons.nodejs, techIcons.tailwindcss],
      githubUrl: 'https://github.com/ichramsyah/velochat-fullstack-webApp',
      demoUrl: 'https://youtu.be/2FnM3nW0jvQ?feature=shared',
    },
    {
      id: 2,
      image: '/images/rinema.webp',
      tech: [techIcons.php, techIcons.laravel, techIcons.tailwindcss, techIcons.mysql],
      githubUrl: 'https://github.com/ichramsyah/rinema-fullstack-webApp',
      demoUrl: 'https://rinemaa.paramadina.ac.id',
    },
    {
      id: 3,
      image: './images/rinema-rebuild.webp',
      tech: [techIcons.javascript, techIcons.react, techIcons.tailwindcss],
      githubUrl: 'https://github.com/ichramsyah/rinema-frontend-rebuild-filmPage',
      demoUrl: 'https://rinema-frontend-rebuild-film-page.vercel.app/',
    },
  ];

  const categories = ['all', 'Fullstack', 'Frontend', 'Backend'];

  const filteredProjects = projects
    .map((project) => {
      const text = projectTexts.find((p) => p.id === project.id);
      return {
        ...project,
        title: text?.title || '',
        description: text?.description || '',
        category: text?.category || 'Fullstack',
      };
    })
    .filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

  return (
    <div className="py-12">
      <SectionHeader title={t('projects.title')} description={t('projects.description')} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-10 space-y-4 md:space-y-0 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-4" />
          <input
            type="text"
            placeholder={t('projects.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full transition-all pl-10 pr-4 py-2 border border-gray-3 dark:border-gray-6 rounded-[8px] focus:rounded-[50px] bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`flex items-center gap-2 px-4 py-[6px] rounded-lg font-medium text-sm transition-all duration-300 ease-in-out
              ${categoryFilter === category ? 'bg-blue-4 text-whitee scale-105' : 'bg-gray-2 dark:bg-gray-7 text-gray-6 dark:text-gray-3 hover:bg-gray-3 dark:hover:bg-gray-6 hover:scale-105'}`}
            >
              {categoryIcons[category]}
              <span>{t(`projects.${category}`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid min-[768px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative rounded-lg p-[4px] border-[2px] border-gray-2 dark:border-gray-7 h-full">
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
                      <a href={project.githubUrl} className="flex items-center gap-[5px]" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-gray-7 dark:text-gray-2 text-[18px]"></i>
                        <span className="text-gray-7 dark:text-gray-2 text-sm">{t('projects.sourceCode')}</span>
                      </a>
                    )}
                    {project.githubUrl && project.demoUrl && <span className="text-gray-4 dark:text-gray-5">|</span>}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="flex items-center gap-[5px]" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="text-gray-7 dark:text-gray-2 text-sm" />
                        <span className="text-gray-7 dark:text-gray-2 text-sm">{t('projects.liveDemo')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-5 dark:text-gray-4 text-lg">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
