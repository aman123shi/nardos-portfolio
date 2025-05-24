import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/app/utils/animations";
import { prototypeData } from "@/app/assets/assets";

export function Prototypes() {
  return (
    <motion.section
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
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {prototypeData.map((prototype, index) => (
          <motion.div key={index} variants={fadeInUp} className="group h-full">
            <motion.div
              className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-lg h-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-[16/10] relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${prototype.videoId}`}
                  title={prototype.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <motion.div
                className="p-6 md:p-8 flex-1 flex flex-col"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-xl md:text-2xl font-playfair mb-4 transform transition-transform group-hover:translate-x-1 text-gray-900 dark:text-white">
                  {prototype.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed transform transition-transform group-hover:translate-x-1">
                  {prototype.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
