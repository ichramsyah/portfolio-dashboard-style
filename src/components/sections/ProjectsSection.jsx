import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Search, LayoutGrid, Layers, Code } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './projects/ProjectCard';
import { projects } from './projects/projectsData';

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
              ${categoryFilter === category ? 'bg-blue-4 text-whitee scale-105' : 'bg-gray-2 dark:bg-gray-8 text-gray-6 dark:text-gray-3 hover:bg-gray-3 dark:hover:bg-gray-6 hover:scale-105'}`}
            >
              {categoryIcons[category]}
              <span>{t(`projects.${category}`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid min-[768px]:grid-cols-2 min-[1400px]:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} categoryIcons={categoryIcons} t={t} />
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
