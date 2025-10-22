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
          className="bg-whitee dark:bg-background-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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

            {project.detail?.map((item) => (
              <div className="max-w-none">
                <p className=" text-gray-6 dark:text-gray-4 mb-4">{item.paragraph}</p>
                <h3 className="font-semibold text-lg text-gray-8 dark:text-gray-1 mb-3">{item.htechstack}</h3>
                <ul className="text-gray-6 dark:text-gray-4 list-disc pl-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2">
                  {item.techstack.split(', ').map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-lg text-gray-8 dark:text-gray-1 mt-6 mb-3">{item.hfeat}</h3>
                <ul className="text-gray-6 dark:text-gray-4 pl-5 space-y-2">
                  {item.feat.split('.,').map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2">✅</span>
                      <span>{feature.trim()}.</span>
                    </li>
                  ))}
                </ul>
                {item.linkyt && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-lg text-gray-8 dark:text-gray-1 mb-3">{item.hlinkyt}</h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={item.linkyt}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        autoPlay
                        className="w-full h-[360px] rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
