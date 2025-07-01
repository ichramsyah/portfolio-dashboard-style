import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Search, ExternalLink } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { techIcons } from '../common/techIcons';

const ProjectsSection = () => {
  const { t } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categoryIcons = {
    all: <LayoutGrid size={16} />,
    fullstack: <Layers size={16} />,
    frontend: <LayoutGrid size={16} />,
    backend: <Code size={16} />,
  };

  const projects = [
    {
      id: 1,
      title: 'VeloChat - Chat Realtime Web App',
      description: 'Berbagi.link is a mini-website platform for online businesses but lacks mobile functionality. This project develops an Android-based',
      image: 'https://i.ytimg.com/vi/2FnM3nW0jvQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC10cIwA9dyFwRYnTuO3YaRfQ9u8w',
      tech: [techIcons.mongodb, techIcons.express, techIcons.react, techIcons.nodejs, techIcons.tailwindcss],
      category: 'Fullstack',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 2,
      title: 'Rinema - Platform Sosial Pecinta Film Indonesia',
      description: 'Modern e-commerce solution with React and Node.js dsadsa dsa dsadsadsadsa sad sadsa dsa dsa',
      image: 'https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-websites-design-example-nightlife.jpg',
      tech: [techIcons.laravel, techIcons.tailwindcss, techIcons.mysql],
      category: 'Fullstack',
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js dsadsa dsa dsadsadsadsa sad sadsa dsa dsa',
      image: 'https://www.zenesys.com/getmedia/5dfa0f67-7e79-4705-bbd0-a1f93ff06a74/TOP-10-WEB-DESIGN-TRENDS-IN-2024.png?width=1200&height=630&ext=.png',
      tech: [techIcons.react],
      category: 'Fullstack',
      githubUrl: '#',
      demoUrl: '',
    },
  ];

  const categories = ['all', 'Fullstack', 'Frontend', 'Backend'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12">
      <SectionHeader title={t('projects.title')} description={t('projects.description')} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-4" />
          <input
            type="text"
            placeholder={t('projects.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-3 dark:border-gray-6 rounded-lg bg-whitee dark:bg-gray-8 text-gray-9 dark:text-whitee focus:ring-2 focus:ring-blue-5 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-[6px] rounded-full font-medium text-sm transition-all duration-300 ease-in-out
        ${categoryFilter === category ? 'bg-gradient-to-tr from-blue-6 to-blue-5 text-whitee scale-105' : 'bg-gray-2 dark:bg-gray-7 text-gray-6 dark:text-gray-3 hover:bg-gray-3 dark:hover:bg-gray-6 hover:scale-105'}
      `}
            >
              {t(`projects.${category}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid min-[768px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative rounded-lg p-[4px] border-[2px] border-gray-2 dark:border-gray-7 h-full">
            <div className="absolute flex top-0 right-0">
              <span
                className={`font-medium pl-10 pr-7 pb-3 py-[6px] py-1 text-sm rounded-tr-[7px] rounded-bl-[50px] ${
                  project.category === 'Fullstack' ? 'bg-gray-8 text-gray-2 dark:text-gray-2' : project.category === 'Frontend' ? 'bg-gray-7 text-gray-2 dark:text-gray-2' : 'bg-gray-6 text-gray-2 dark:text-gray-2'
                }`}
              >
                {project.category}
              </span>
            </div>
            <div className=" h-full rounded-lg overflow-hidden flex flex-col">
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src={project.image} className="w-full h-full object-cover" />
              </div>

              <div
                className="
              bg-whitee h-full dark:bg-gray-8 rounded-lg overflow-hidden bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9
              
              flex flex-col justify-between flex-1 p-6"
              >
                <div>
                  <h3 className="font-semibold text-gray-9 dark:text-whitee mb-2">{project.title}</h3>
                  <p className="text-gray-6 dark:text-gray-4 text-sm mb-4">{project.description}</p>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                  <div className="max-[1200px]:w-1/3  flex flex-wrap items-center gap-1">
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
