import { useContext, useState, Fragment, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import AchievementCard from './AchievementCard';

const FilterTabs = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const items = t('achievements.items', { returnObjects: true });

  const achievements = items.map((item, index) => ({
    id: index + 1,
    type: item.type,
    image: item.image,
    title: item.title,
    organizer: item.organizer,
    date: item.date,
  }));

  const filteredAchievements = filter === 'all' ? achievements : achievements.filter((a) => a.type === filter);
  const [activeTabRef, setActiveTabRef] = useState(null);
  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (activeTabRef && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = activeTabRef.getBoundingClientRect();
      setUnderlineStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    }
  }, [filter, activeTabRef]);

  return (
    <div>
      <div ref={containerRef} className="relative flex space-x-2 mb-6">
        {/* Sliding underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0, originX: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          layout
          className="absolute bottom-0 h-full rounded-sm bg-blue-3 dark:bg-gray-5/30"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        />

        {['all', 'certifications', 'other'].map((filterType) => {
          const mappedFilter = filterType === 'certifications' ? 'certification' : filterType === 'other' ? 'other' : 'all';

          const isActive = filter === mappedFilter;

          return (
            <button
              key={filterType}
              ref={(el) => isActive && setActiveTabRef(el)}
              onClick={() => setFilter(mappedFilter)}
              className={`relative px-3 py-1 font-medium transition-colors duration-300 ${isActive ? 'text-whitee dark:text-gray-2' : 'text-gray-4 dark:text-gray-4 hover:text-blue-4 dark:hover:text-gray-3'}`}
            >
              {t(`achievements.${filterType}`)}
            </button>
          );
        })}
      </div>

      {/* Achievement Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} onImageClick={setSelectedImage} />
        ))}
      </div>

      {/* Image Modal */}
      <Transition appear show={selectedImage !== null} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setSelectedImage(null)}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-whitee dark:bg-gray-5/20 p-4 text-left align-middle shadow-xl transition-all">
                  <div className="mt-[-5px] pb-2 flex justify-end">
                    <button onClick={() => setSelectedImage(null)} className="text-gray-5 hover:text-red-500 text-sm font-bold">
                      ✕
                    </button>
                  </div>
                  <img src={selectedImage} alt="Preview" className="rounded w-full max-h-[80vh] object-contain" />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FilterTabs;
