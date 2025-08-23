import { useState } from 'react';
import { motion } from 'framer-motion';

// Ini adalah komponen loader/skeleton sederhana.
// Anda bisa menggantinya dengan spinner atau animasi lain jika suka.
const ImageLoader = () => <div className="absolute inset-0 bg-gray-3 dark:bg-gray-7 animate-pulse" />;

const AchievementCard = ({ achievement, onImageClick }) => {
  // 1. State untuk melacak status loading setiap gambar
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(7px)', scale: 0.8 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full bg-whitee dark:bg-gray-8 rounded-lg border-[2px] border-gray-2 dark:border-gray-7"
    >
      <div className="m-1 flex flex-col h-full rounded-lg overflow-hidden">
        <div className="relative group cursor-pointer aspect-[16/11] w-full overflow-hidden rounded-t-lg" onClick={() => onImageClick(achievement.image)}>
          {/* 2. Tampilkan loader jika isLoading true */}
          {isLoading && <ImageLoader />}

          {/* 3. Sembunyikan gambar asli sampai selesai dimuat */}
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: isLoading ? 0 : 1 }} // Gunakan opacity untuk transisi halus
            // 4. Event 'onLoad' akan mengubah isLoading menjadi false setelah gambar siap
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm">See Image</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between bg-gradient-to-t from-gray-1 to-whitee hover:from-gray-2 hover:to-whitee dark:from-gray-8 dark:to-gray-9 dark:hover:from-gray-7 dark:hover:to-gray-9 rounded-b-lg p-4">
          <div>
            <h3 className="text-gray-9 dark:text-whitee mb-3">{achievement.title}</h3>
            <p className="text-gray-6 dark:text-gray-4 text-sm mb-5">{achievement.organizer}</p>
          </div>
          <p className="text-gray-6 dark:text-gray-4 text-sm">{achievement.date}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
