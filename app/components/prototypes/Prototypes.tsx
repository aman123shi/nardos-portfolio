import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/app/utils/animations";
import { prototypeData } from "@/app/assets/assets";
import Image from "next/image";
import { assets } from "@/app/assets/assets";

const ITEMS_PER_PAGE = 6;

export function Prototypes({ isDarkMode }: { isDarkMode: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visiblePrototypes = showAll ? prototypeData : prototypeData.slice(0, ITEMS_PER_PAGE);
  const hasMorePrototypes = prototypeData.length > ITEMS_PER_PAGE;

  const handleToggleShow = () => {
    // Only maintain scroll position when showing less
    if (showAll) {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.offsetTop;
        window.scrollTo({
          top: sectionTop,
          behavior: 'instant'
        });
      }
    }
    setShowAll(!showAll);
  };

  return (
    <motion.section
      ref={sectionRef}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="prototypes"
      className="w-full px-[12%] py-16 bg-primary-light dark:bg-primary-dark overflow-hidden transition-colors duration-300"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-playfair mb-6 leading-tight text-gray-900 dark:text-white"
        >
          Prototypes
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-16"
        >
          Explore my latest prototype designs and interactive demonstrations
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence>
          {visiblePrototypes.map((prototype, index) => (
            <motion.div
              key={prototype.title}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkTheme rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${prototype.videoId}`}
                  title={prototype.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-4 text-gray-900 dark:text-white">
                  {prototype.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {prototype.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMorePrototypes && (
        <motion.button
          onClick={handleToggleShow}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-max flex items-center justify-center gap-2
          text-gray-900 dark:text-white border-[0.5px] border-gray-300 dark:border-gray-700 rounded-full py-3 px-10 mx-auto
          mt-16 hover:bg-gray-50 dark:hover:bg-darkHover transition-all duration-300 font-medium"
        >
          {showAll ? "Show less" : "Show more"}{" "}
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className={`w-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </motion.button>
      )}
    </motion.section>
  );
}
