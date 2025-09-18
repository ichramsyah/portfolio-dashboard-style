import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FilterButtons = ({ categoryFilter, setCategoryFilter, categories, categoryIcons, t }) => {
  const containerRef = useRef(null);
  const [activeTabRef, setActiveTabRef] = useState(null);
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
  }, [categoryFilter, activeTabRef]);

  return (
    <div ref={containerRef} className="relative flex flex-wrap gap-3">
      <motion.div animate={underlineStyle} transition={{ type: 'spring', stiffness: 400, damping: 30, duration: 1 }} layout className="absolute bottom-0 md:h-full h-0 rounded-sm bg-blue-3 dark:bg-gray-4/20" />
      {categories.map((category) => {
        const isActive = categoryFilter === category;
        return (
          <button
            key={category}
            ref={(el) => (isActive ? setActiveTabRef(el) : null)}
            onClick={() => setCategoryFilter(category)}
            className={`flex items-center gap-2 px-4 py-[6px] rounded-lg font-medium text-sm transition-all duration-300 ease-in-out
            ${isActive ? 'z-10 md:bg-transparent bg-blue-3 dark:bg-gray-4 text-whitee dark:text-gray-2' : 'z-10 text-gray-6 dark:text-gray-4 hover:text-blue-4 dark:hover:text-gray-3'}`}
          >
            {categoryIcons[category]}
            <span>{t(`projects.${category}`)}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
