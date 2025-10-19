import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectDetailModal = ({ project, onClose, t }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-blackk/60 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-whitee dark:bg-gray-9 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button onClick={onClose} className="absolute top-3 right-3 bg-gray-6 bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 z-10">
              <X size={20} />
            </button>
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-9 dark:text-whitee mb-2">{project.title}</h2>
            <span className="inline-block bg-blue-1 text-blue-4 dark:bg-blue-4/20 dark:text-blue-4 px-3 py-1 text-sm font-medium rounded-full mb-6">{project.category}</span>

            <div className="prose dark:prose-invert max-w-none text-gray-6 dark:text-gray-4 mb-4">
              {project.detail?.map((item, index) => (
                <p key={index}>{item.paragraph}</p>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-8 dark:text-gray-2 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {project.tech.map((tech, index) => (
                <img key={index} src={tech.url} className="w-7 h-7 object-contain" title={tech.name} alt={tech.name} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
