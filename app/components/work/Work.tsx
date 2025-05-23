import { assets, workData } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Prototypes } from "../prototypes/Prototypes";
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/app/utils/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Work({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <>
      <motion.div
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
            What I have worked
          </motion.h4>
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-playfair mb-6 leading-tight text-gray-900 dark:text-white"
          >
            My works
          </motion.h2>
          <motion.p 
            variants={fadeInUp} 
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            i have worked in so many places what should i do next what about the
            african commision what about the central african cases on the platform
            and the continent
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
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
                        <Image
                          src={image}
                          alt={`${project.title} image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
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
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-accent-light dark:hover:text-accent-dark transition-colors font-medium"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <Image src={isDarkMode ? assets.send_icon : assets.send_icon} alt="send icon" className="w-5" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href=""
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-max flex items-center justify-center gap-2
          text-gray-900 dark:text-white border-[0.5px] border-gray-300 dark:border-gray-700 rounded-full py-3 px-10 mx-auto
          mt-16 hover:bg-gray-50 dark:hover:bg-darkHover transition-all duration-300 font-medium"
        >
          Show more{" "}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="Right arrow"
            className="w-4"
          />
        </motion.a>
      </motion.div>
      <Prototypes />
    </>
  );
}
