import { useContext, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { LanguageContext } from '../../../contexts/LanguageContext';

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

  return (
    <div>
      <div className="flex space-x-2 mb-6">
        {['all', 'certifications', 'other'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => setFilter(filterType === 'certifications' ? 'certification' : filterType === 'other' ? 'other' : 'all')}
            className={`relative px-3 py-1 font-medium transition-colors duration-300 group ${
              (filter === 'all' && filterType === 'all') || (filter === 'certification' && filterType === 'certifications') || (filter === 'other' && filterType === 'other') ? 'text-blue-5' : 'text-gray-5 dark:text-gray-4 hover:text-blue-5'
            }`}
          >
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                (filter === 'all' && filterType === 'all') || (filter === 'certification' && filterType === 'certifications') || (filter === 'other' && filterType === 'other') ? 'bg-blue-5' : 'bg-transparent group-hover:bg-blue-5'
              }`}
            />
            {t(`achievements.${filterType}`)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => (
          <div key={achievement.id} className="flex flex-col h-full bg-whitee dark:bg-gray-8 rounded-lg border-[2px] border-gray-2 dark:border-gray-7">
            <div className="m-1 flex flex-col h-full rounded-lg overflow-hidden">
              <div className="relative group cursor-pointer aspect-[16/11] w-full overflow-hidden rounded-t-lg" onClick={() => setSelectedImage(achievement.image)}>
                <img src={achievement.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">See Image</span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 rounded-b-lg p-4">
                <div>
                  <h3 className=" text-gray-9 dark:text-whitee mb-3">{achievement.title}</h3>
                  <p className="text-gray-6 dark:text-gray-4 text-sm mb-5">{achievement.organizer}</p>
                </div>
                <p className="text-gray-6 dark:text-gray-4 text-sm">{achievement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Transition appear show={selectedImage !== null} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setSelectedImage(null)}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-whitee dark:bg-gray-8 p-4 text-left align-middle shadow-xl transition-all">
                  <div className="mt-[-5px] pb-2 flex justify-end">
                    <button onClick={() => setSelectedImage(null)} className="text-gray-500 hover:text-red-500 text-sm">
                      ✕ Close
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
