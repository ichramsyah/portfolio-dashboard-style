import { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../../common/SpotlightCard';

const ImageLoader = () => <div className="absolute inset-0 bg-gray-3 dark:bg-gray-5/20 animate-pulse" />;

const AchievementCard = ({ achievement, onImageClick }) => {
  // 1. State untuk melacak status loading setiap gambar
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(7px)', scale: 0.8 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full rounded-lg"
    >
      <SpotlightCard className="m-1 flex flex-col h-full rounded-lg overflow-hidden p-1 bg-gray-1/40 dark:bg-gray-6/10">
        <div className="relative group cursor-pointer aspect-[16/11] w-full overflow-hidden rounded-t-lg" onClick={() => onImageClick(achievement.image)}>
          {isLoading && <ImageLoader />}

          <img src={achievement.image} alt={achievement.title} className="w-full h-full object-cover transition-opacity duration-300" style={{ opacity: isLoading ? 0 : 1 }} onLoad={() => setIsLoading(false)} />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm">See Image</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between rounded-b-lg p-4">
          <div>
            <h3 className="text-gray-9 dark:text-whitee mb-3">{achievement.title}</h3>
            <p className="text-gray-6 dark:text-gray-4 text-sm mb-5">{achievement.organizer}</p>
          </div>
          <p className="text-gray-6 dark:text-gray-4 text-sm">{achievement.date}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default AchievementCard;
