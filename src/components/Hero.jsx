
import { motion } from "framer-motion";
// import { section } from "framer-motion/client";
import { HERO_CONTENT } from "../constants";
import sharvilImg from "../assets/sharvil-amburle.webp"


const textVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const imgVariants = {
    hidden: { opacity: 0, x: 200, rotate: 0, scale:0},
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1.3,
            ease: "easeInOut",
            // type: "spring"
        }
    }
}

const Hero = () => {
  return (
    <section>
        <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
            <motion.div className="w-full md:w-1/2 p-8 md:mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible">

                <motion.h1 className="text-2xl md:text-3xl lg:text-5xl mt-28  lg:mt-0 mb-7 md:my-14"
                variants={textVariants}>
                    {HERO_CONTENT.greeting}
                </motion.h1>

                <motion.p className="text-xl md:text-2xl lg:text-[32px] mb-6 md:leading-9"
                variants={textVariants}>
                    {HERO_CONTENT.introduction}
                </motion.p>

                <motion.p className="text-xl md:text-2xl lg:text-[32px] md:leading-9"
                variants={textVariants}>
                    {HERO_CONTENT.description}
                </motion.p>

                <motion.a className="bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 font-medium inline-block rounded-2xl"
                href={HERO_CONTENT.resumeLink}
                download
                rel="noopener noreferrer"
                target="_blank"
                variants={textVariants}>
                    {HERO_CONTENT.resumeLinkText}
                </motion.a>
            </motion.div>


            <motion.div className="w-full md:w-[580px] py-8 px-8 md:mt-8" 
            variants={imgVariants}
            initial="hidden"
            animate="visible">
                <img src={sharvilImg} alt="sharvil-img" width={580} height={580} className="rounded-3xl" />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero;