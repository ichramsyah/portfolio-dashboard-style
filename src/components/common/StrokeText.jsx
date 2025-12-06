import { motion } from 'framer-motion';

const StrokeText = ({ text, className }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterAnim = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'backOut',
      },
    },
  };

  const words = text.split(' ');

  return (
    <motion.div key={text} className={className} variants={container} initial="hidden" animate="visible" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, index) => (
        <span key={index} className="whitespace-nowrap mr-[0.25em] flex">
          {word.split('').map((char, i) => (
            <motion.span key={i} variants={letterAnim}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default StrokeText;
