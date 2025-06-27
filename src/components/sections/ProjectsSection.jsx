import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Search, ExternalLink, Github } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ProjectsSection = () => {
  const { t } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Berbagi.link is a mini-website platform for online businesses but lacks mobile functionality. This project develops an Android-based',
      image: 'https://idcloudhost.com/wp-content/uploads/2020/04/Shoope-ECommerce-dan-Marketplace-Terbaik-Indonesia-min.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with React and Node.js dsadsa dsa dsadsadsadsa sad sadsa dsa dsa',
      image: 'https://www.jagoanhosting.com/blog/wp-content/uploads/2023/09/Website-Toko-Online-Gratis-Cover-1200x675.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['all', 'fullstack', 'frontend', 'backend'];

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

        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${categoryFilter === category ? 'bg-blue-6 text-whitee' : 'bg-gray-1 dark:bg-gray-8 text-gray-7 dark:text-gray-3 hover:bg-gray-2 dark:hover:bg-gray-7'}`}
            >
              {t(`projects.${category}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative rounded-lg p-[4px] border-[2px] border-gray-2 dark:border-gray-7 h-full">
            <div className="absolute top-1 right-1">
              <span
                className={`pl-14 pr-10 py-1 text-lg rounded-bl-full bg-gray-1 ${
                  project.category === 'fullstack'
                    ? ' text-purple-8 dark:text-purple-2'
                    : project.category === 'frontend'
                    ? 'bg-green-1 dark:bg-green-9 text-green-8 dark:text-green-2'
                    : 'bg-orange-1 dark:bg-orange-9 text-orange-8 dark:text-orange-2'
                }`}
              >
                {project.category}
              </span>
            </div>
            <div className="bg-whitee h-full dark:bg-gray-8 rounded-lg overflow-hidden flex flex-col bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9">
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img src={project.image} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="font-semibold text-gray-9 dark:text-whitee mb-2">{project.title}</h3>
                  <p className="text-gray-6 dark:text-gray-4 text-sm mb-4">{project.description}</p>
                </div>

                <div className="flex mt-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-1 dark:bg-blue-9 text-blue-8 dark:text-blue-2 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-6 text-whitee rounded text-sm hover:bg-blue-7 transition-colors">
                      <ExternalLink size={16} />
                      <span>{t('projects.liveDemo')}</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-gray-3 dark:border-gray-6 text-gray-7 dark:text-gray-3 rounded text-sm hover:bg-gray-2 dark:hover:bg-gray-7 transition-colors">
                      <Github size={16} />
                      <span>{t('projects.sourceCode')}</span>
                    </button>
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
