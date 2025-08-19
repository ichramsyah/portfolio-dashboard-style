import { useRef, useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import clsx from 'clsx';

const SpotlightCard = ({ children, className = '', spotlightColorLight = 'rgba(104, 104, 104, 0.21)', spotlightColorDark = 'rgba(255, 236, 236, 0.19)' }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { theme } = useContext(ThemeContext);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();

    // Smooth movement
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    requestAnimationFrame(() => {
      setPosition({ x, y });
    });
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx('relative rounded-xl border-2 border-gray-2 dark:border-gray-7 bg-spotlight-card dark:bg-gray-9 overflow-hidden transition-colors', className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(
            circle at ${position.x}px ${position.y}px, 
            ${theme === 'dark' ? spotlightColorDark : spotlightColorLight}, 
            transparent 80%
          )`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
