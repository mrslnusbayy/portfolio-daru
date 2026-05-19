import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <>
      {/* Main minimal dot trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-500/50 pointer-events-none z-[9999] hidden md:block backdrop-blur-sm bg-indigo-500/10"
        variants={variants}
        animate="default"
      />
      {/* Inner solid dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-600 rounded-full pointer-events-none z-[9999] hidden md:block transition-transform duration-75"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
