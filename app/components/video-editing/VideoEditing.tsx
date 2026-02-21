import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/app/utils/animations";
import { videoEditingData } from "@/app/assets/assets";
import Image from "next/image";
import { assets } from "@/app/assets/assets";

const ITEMS_PER_PAGE = 4;

export function VideoEditing({ isDarkMode }: { isDarkMode: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visibleVideos = showAll ? videoEditingData : videoEditingData.slice(0, ITEMS_PER_PAGE);
  const hasMoreVideos = videoEditingData.length > ITEMS_PER_PAGE;

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
      id="video-editing"
      className="w-full px-[12%] py-16 bg-white dark:bg-darkTheme overflow-hidden transition-colors duration-300"
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
          Video Editing
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-16"
        >
          Versatile video editor specializing in creating engaging content for TikTok, YouTube, Instagram, and other social media platforms. From short-form vertical videos to long-form content, I bring creative storytelling and polished editing to every project.
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
          {visibleVideos.map((video, index) => (
            <motion.div
              key={video.title}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-darkTheme rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: '600px' }}>
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full max-w-[337.5px] h-full max-h-[600px]"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-4 text-gray-900 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMoreVideos && (
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
