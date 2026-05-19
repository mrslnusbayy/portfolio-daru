import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Hold before sliding up
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(completeTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: { 
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
  };

  const text = "DARU.";

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center text-4xl md:text-6xl font-extrabold text-white tracking-widest"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
