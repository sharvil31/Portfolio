import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiMailFill, RiGithubFill, RiLinkedinFill } from "@remixicon/react";

const Contact = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },

    visible: (delay = 0) => ({
      opacity: 1,
      y: 50,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },

    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    }),
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px:10"
      id="contact"
    >
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
        Contact
      </h1>

      <div className="h-1 w-20 md:w-28 bg-white mb-14"></div>

      <motion.h3
        className="text-6xl md:text-8xl leading-none mb-4"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.4}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.6}
      >
        {CONTACT_CONTENT.description}
      </motion.p>

      <motion.a
        className="text-2xl md:text-3xl font-medium mt-8"
        href={`mailto: ${CONTACT_CONTENT.email}`}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        custom={0.8}
      >
        {CONTACT_CONTENT.email}
      </motion.a>

      <div className="flex space-x-6 mt-20">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
          link.icon === "RiMailFill" ? RiMailFill
            : link.icon === "RiGithubFill" ? RiGithubFill
            : RiLinkedinFill;

            return (
                <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                title={link.platform}
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                custom={1.0 + index * 0.2}>
                    <Icon size={36}></Icon>
                </motion.a>
            )
        })}
      </div>

      <motion.p className="text-sm text-stone-400 mt-24 pb-10"
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      custom={1.6}>
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
