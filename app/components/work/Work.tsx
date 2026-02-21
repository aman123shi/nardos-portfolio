import { assets, workData } from "@/app/assets/assets";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Prototypes } from "../prototypes/Prototypes";
import { VideoEditing } from "../video-editing/VideoEditing";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/app/utils/animations";
import { ImagePreviewModal } from "./ImagePreviewModal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ITEMS_PER_PAGE = 6;

export function Work({ isDarkMode }: { isDarkMode: boolean }) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? workData : workData.slice(0, ITEMS_PER_PAGE);
  const hasMoreProjects = workData.length > ITEMS_PER_PAGE;

  const handleImageClick = (projectIndex: number, imageIndex: number, imageSrc: string) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setPreviewImage(imageSrc);
  };

  const handlePrevImage = () => {
    const currentProject = visibleProjects[currentProjectIndex];
    if (!currentProject?.images) return;

    let newImageIndex = currentImageIndex - 1;
    if (newImageIndex < 0) {
      newImageIndex = currentProject.images.length - 1;
    }
    
    const image = currentProject.images[newImageIndex];
    if (typeof image === 'string') {
      setPreviewImage(image);
    } else if ('src' in image) {
      setPreviewImage(image.src);
    }
    setCurrentImageIndex(newImageIndex);
  };

  const handleNextImage = () => {
    const currentProject = visibleProjects[currentProjectIndex];
    if (!currentProject?.images) return;

    let newImageIndex = currentImageIndex + 1;
    if (newImageIndex >= currentProject.images.length) {
      newImageIndex = 0;
    }
    
    const image = currentProject.images[newImageIndex];
    if (typeof image === 'string') {
      setPreviewImage(image);
    } else if ('src' in image) {
      setPreviewImage(image.src);
    }
    setCurrentImageIndex(newImageIndex);
  };

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
    <>
      <motion.div
        ref={sectionRef}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        id="work"
        className="w-full px-[12%] py-16 scroll-mt-20 overflow-hidden bg-white dark:bg-darkTheme transition-colors duration-300"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h4
            variants={fadeInUp}
            className="mb-3 text-lg font-medium text-gray-600 dark:text-gray-400"
          >
            Featured Projects
          </motion.h4>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-playfair mb-6 leading-tight text-gray-900 dark:text-white"
          >
            Creative Design Portfolio
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Explore my collection of innovative UI/UX and graphic design projects. From mobile apps to brand identities, each project demonstrates modern design principles and creative solutions for the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <motion.div
                  className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="aspect-[16/10] relative">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000 }}
                      className="h-full w-full"
                    >
                      {project.images?.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div 
                            className="relative w-full h-full group cursor-pointer"
                            onClick={() => {
                              if (typeof image === 'string') {
                                handleImageClick(index, imgIndex, image);
                              } else if ('src' in image) {
                                handleImageClick(index, imgIndex, image.src);
                              }
                            }}
                          >
                            <Image
                              src={image}
                              alt={`${project.title} image ${imgIndex + 1}`}
                              fill
                              className="object-cover object-center translate-y-2 transition-opacity duration-300 group-hover:opacity-80"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-black bg-opacity-50 p-3 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <motion.div
                    className="p-6 md:p-8 flex-1 flex flex-col"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-xl md:text-2xl font-playfair mb-4 transform transition-transform group-hover:translate-x-1 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 transform transition-transform group-hover:translate-x-1">
                      {project.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMoreProjects && (
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
      </motion.div>
      <ImagePreviewModal
        isOpen={!!previewImage}
        onClose={() => {
          setPreviewImage(null);
          setCurrentImageIndex(0);
        }}
        imageSrc={previewImage || ''}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        hasMultipleImages={
          visibleProjects[currentProjectIndex]?.images?.length > 1
        }
      />
      <VideoEditing isDarkMode={isDarkMode} />
      <Prototypes isDarkMode={isDarkMode} />
    </>
  );
}
