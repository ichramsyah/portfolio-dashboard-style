import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { LayoutGrid, Layers, Code } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './projects/ProjectCard';
import { projects } from './projects/projectsData';
import SearchInput from './projects/SearchInput';
import FilterButtons from './projects/FilterButtons';

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

  const projectTexts = t('projects.items', { returnObjects: true });
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
    <div className="py-14 lg:py-8 md:mt-0 mt-3">
      <SectionHeader title={t('projects.title')} description={t('projects.description')} />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-10 space-y-4 md:space-y-0 mb-8">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} t={t} />
        <FilterButtons categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} categories={categories} categoryIcons={categoryIcons} t={t} />
      </div>

      <div className="grid min-[768px]:grid-cols-2 gap-6">
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
