import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiPostman } from 'react-icons/si';

const ProjectCard = ({ project, techIcons, categoryIcons, t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.9 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: false }}
      className="relative rounded-lg p-[4px] border-[2px] border-gray-2 dark:border-gray-7 h-full"
    >
      <div className="absolute flex top-0 right-0">
        {/* Menggunakan map untuk menampilkan setiap kategori jika project.category adalah array */}
        {Array.isArray(project.category) ? (
          project.category.map((cat, index) => (
            <span
              key={index} // Penting untuk memberikan key unik saat melakukan map
              className="font-medium pl-5 pr-5 pb-[10px] py-[6px] text-sm rounded-tr-[7px] rounded-bl-[28px] bg-blue-3 dark:bg-blue-4 text-white dark:text-gray-2"
              style={{
                // Menyesuaikan posisi jika ada lebih dari satu kategori untuk menghindari tumpang tindih
                right: index * 50, // Contoh penyesuaian, Anda mungkin perlu menyempurnakan ini
                zIndex: project.category.length - index, // Untuk memastikan kategori pertama di atas
              }}
            >
              <div className="flex items-center gap-2">
                {categoryIcons[cat]} {/* Gunakan 'cat' karena ini adalah kategori individual */}
                {cat}
              </div>
            </span>
          ))
        ) : (
          // Jika project.category masih berupa string tunggal (untuk proyek lama atau tunggal)
          <span className="font-medium pl-5 pr-5 pb-[10px] py-[6px] text-sm rounded-tr-[7px] rounded-bl-[28px] bg-blue-3 dark:bg-blue-4 text-white dark:text-gray-2">
            <div className="flex items-center gap-2">
              {categoryIcons[project.category]}
              {project.category}
            </div>
          </span>
        )}
      </div>
      <div className="h-full rounded-lg overflow-hidden flex flex-col">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src={project.image} className="w-full bg-gray-3 dark:bg-gray-8 h-full object-cover" alt="" />
        </div>
        <div className="bg-whitee h-full dark:bg-gray-8 rounded-lg overflow-hidden bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 flex flex-col justify-between flex-1 p-6">
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
