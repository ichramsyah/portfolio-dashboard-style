// components/ToggleSwitch.jsx
import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ option1, option2, isActive, onToggle, activeBg = 'bg-whitee', inactiveBg = 'bg-gray-3', activeColor = 'text-yellow-200', inactiveColor = 'text-whitee', distanceOverride }) => {
  const containerRef = useRef(null);
  const knobRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const c = containerRef.current;
      const k = knobRef.current;
      if (!c || !k) return;

      const styles = getComputedStyle(c);
      const padLeft = parseFloat(styles.paddingLeft) || 0;
      const padRight = parseFloat(styles.paddingRight) || 0;
      const innerWidth = c.clientWidth - padLeft - padRight;

      const d = Math.max(0, innerWidth - k.offsetWidth);
      setDistance(d);
      setReady(true);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
    };
  }, []);

  const travel = typeof distanceOverride === 'number' ? distanceOverride : distance;

  return (
    <div
      ref={containerRef}
      onClick={onToggle}
      className="relative flex w-22 h-10 cursor-pointer items-center rounded-full px-[7px] overflow-hidden bg-gray-3/40 dark:bg-gray-5/20 inset-shadow-sm inset-shadow-gray-4/30 dark:inset-shadow-gray-5/10 select-none"
      style={{ backgroundColor: isActive ? undefined : undefined }}
    >
      {/* Slider/knob */}
      <motion.div
        ref={knobRef}
        className={`absolute h-[70%] w-[41%] rounded-full ${activeBg} will-change-transform shadow-md border border-gray-3/10 dark:border-gray-5/10`}
        initial={false}
        animate={{ x: isActive ? 0 : travel }}
        transition={{ type: 'spring', stiffness: 420, damping: 52 }}
        style={{ visibility: ready ? 'visible' : 'hidden' }}
      />

      {/* Opsi 1 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center select-none">
        <span className={`text-xs transition-colors ${isActive ? activeColor : inactiveColor}`}>{option1.icon}</span>
      </div>

      {/* Opsi 2 */}
      <div className="relative z-10 flex w-1/2 h-full items-center justify-center select-none">
        <span className={`text-xs transition-colors ${!isActive ? activeColor : inactiveColor}`}>{option2.icon}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
