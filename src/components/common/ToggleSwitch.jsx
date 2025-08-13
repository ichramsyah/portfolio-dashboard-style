// components/ToggleSwitch.jsx
import { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({
  option1,
  option2,
  isActive,
  onToggle,
  activeBg = 'bg-whitee',
  inactiveBg = 'bg-gray-3', // (opsional)
  activeColor = 'text-yellow-200',
  inactiveColor = 'text-whitee',
  distanceOverride,
}) => {
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
    <div ref={containerRef} onClick={onToggle} className="relative flex w-18 h-7 cursor-pointer items-center rounded-lg bg-gray-2 dark:bg-gray-8 p-1 overflow-hidden">
      {/* Slider/knob */}
      <motion.div
        ref={knobRef}
        className={`absolute h-[75%] w-[45%] rounded-md ${activeBg} will-change-transform`}
        initial={false}
        animate={{ x: isActive ? 0 : travel }}
        transition={{ type: 'spring', stiffness: 420, damping: 48 }}
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
