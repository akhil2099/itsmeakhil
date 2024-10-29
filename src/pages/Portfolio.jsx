import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsGear, BsCamera, BsArrowRight } from 'react-icons/bs';
import { FaCircleNotch } from 'react-icons/fa';

// Loading overlay component
const LoadingOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-[#1a1a1a] z-50 flex flex-col items-center justify-center"
  >
    <motion.div
      className="relative w-24 h-24"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 rounded-full border-t-4 border-[#6c63ff] border-opacity-50" />
      <div className="absolute inset-0 rounded-full border-l-4 border-[#6c63ff]" />
      <div className="absolute inset-0 rounded-full border-b-4 border-[#6c63ff] border-opacity-25" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-8 text-[#6c63ff] text-xl font-medium"
    >
      Loading...
    </motion.div>
  </motion.div>
);

const Portfolio = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSectionClick = (section) => {
    setExpandedSection(section === expandedSection ? null : section);
  };

  const handleSectionHover = () => {
    setCursorVariant("hover");
  };

  const handleSectionLeave = () => {
    setCursorVariant("default");
  };

  const handlePortfolioClick = async (section) => {
    setIsLoading(true);
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Here you would normally use your router's navigation
    window.location.href = `/${section}-portfolio`;
  };

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: "#6c63ff",
      mixBlendMode: "difference",
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const glowVariants = {
    initial: { opacity: 0.3 },
    animate: { opacity: 0.6 },
    hover: { opacity: 0.8, scale: 1.1 }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>

      <div className="relative flex h-screen w-screen bg-gradient-to-br from-[#1a1a1a] to-[#101010] overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
          variants={cursorVariants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [transform-origin:0_0] [transform:perspective(500px)_rotateX(30deg)]" />

        <motion.div
          className={`relative w-1/2 h-full bg-gradient-to-br from-[#0d0d0d]/90 to-[#0a0a0a]/90 flex justify-center items-center transition-all duration-700 ease-in-out backdrop-blur-sm ${
            expandedSection === 'devops' ? 'w-full' : expandedSection === 'photography' ? 'w-0' : ''
          }`}
          onClick={() => handleSectionClick('devops')}
          onMouseEnter={handleSectionHover}
          onMouseLeave={handleSectionLeave}
          whileHover={{ width: expandedSection !== 'devops' ? '80%' : '100%' }}
        >
          <AnimatePresence>
            {(expandedSection === 'devops' || !expandedSection) && (
              <motion.div
                className="text-center text-white relative z-10"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="absolute inset-0 bg-[#6c63ff]/20 blur-3xl -z-10"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <BsGear className="mx-auto text-6xl mb-4 text-[#6c63ff]" />
                </motion.div>
                <motion.h2
                  className="text-4xl font-bold mb-4 tracking-wider"
                  whileHover={{ scale: 1.05, textShadow: "0 0 8px #6c63ff" }}
                >
                  Explore DevOps
                </motion.h2>
                <p className="text-lg mb-6 text-gray-300">
                  Discover our cutting-edge DevOps solutions for your business.
                </p>
                <motion.button
                  className="group flex items-center gap-2 mx-auto bg-transparent border border-[#6c63ff] text-[#6c63ff] px-6 py-3 rounded-full hover:bg-[#6c63ff] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePortfolioClick('devops');
                  }}
                >
                  <span>View Portfolio</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <FaCircleNotch className="absolute top-4 right-4 text-2xl text-[#6c63ff] animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className={`relative w-1/2 h-full bg-gradient-to-br from-[#0d0d0d]/90 to-[#0a0a0a]/90 flex justify-center items-center transition-all duration-700 ease-in-out backdrop-blur-sm ${
            expandedSection === 'photography' ? 'w-full' : expandedSection === 'devops' ? 'w-0' : ''
          }`}
          onClick={() => handleSectionClick('photography')}
          onMouseEnter={handleSectionHover}
          onMouseLeave={handleSectionLeave}
          whileHover={{ width: expandedSection !== 'photography' ? '80%' : '100%' }}
        >
          <AnimatePresence>
            {(expandedSection === 'photography' || !expandedSection) && (
              <motion.div
                className="text-center text-white relative z-10"
                variants={sectionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  className="absolute inset-0 bg-[#6c63ff]/20 blur-3xl -z-10"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BsCamera className="mx-auto text-6xl mb-4 text-[#6c63ff]" />
                </motion.div>
                <motion.h2
                  className="text-4xl font-bold mb-4 tracking-wider"
                  whileHover={{ scale: 1.05, textShadow: "0 0 8px #6c63ff" }}
                >
                  Discover Photography
                </motion.h2>
                <p className="text-lg mb-6 text-gray-300">
                  Explore our stunning photography portfolio and services.
                </p>
                <motion.button
                  className="group flex items-center gap-2 mx-auto bg-transparent border border-[#6c63ff] text-[#6c63ff] px-6 py-3 rounded-full hover:bg-[#6c63ff] hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePortfolioClick('photography');
                  }}
                >
                  <span>View Portfolio</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <FaCircleNotch className="absolute top-4 right-4 text-2xl text-[#6c63ff] animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;