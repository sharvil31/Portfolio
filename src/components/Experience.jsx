import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-10" id="experience">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
        Experience
      </h1>

      <div className="h-1 w-24 md:w-36 bg-white mt-4 mb-14"></div>

      <motion.div
        className="space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                {experience.yearRange}
              </div>

              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blur-3xl bg-stone-600/10 p-4 rounded-lg">
                    <h2 className="text-xl mb-2">{experience.title}</h2>
                    <p className="text-sm italic mb-4">{experience.location}</p>

                    <ul className="list-disc list-inside space-y-2">
                        {
                            experience.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))
                        }
                    </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
