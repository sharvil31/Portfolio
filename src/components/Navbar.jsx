import React, { useState } from "react";
import { LINKS } from "../constants"
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"

const navbarvariants = {
    hidden: { opacity: 0, y: -100, rotate: 0},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.3,
            ease: "easeInOut",
            // type: "spring"
        }
    }
}

const menuVariants = {
    closed: { opacity: 0, height: 0, y: -100},

    open: {
      opacity: 1,
      y: 0,
      height: "40%",
    //   height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: {
        opacity: 0,
        // y: 50
    },

    visible: {
        opacity: 1,
        // y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}
  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav className="fixed top-0 left-0 w-full z-50 mt-2 px-2"
    variants={navbarvariants}
    initial="hidden"
    animate="visible">
     
     <div className="bg-black px-1 max-w-6xl overflow-hidden mx-auto rounded-2xl relative z-30">
      <div className="spinning-border"></div>
     <div className="flex justify-between items-center max-w-6xl mx-auto my-1 bg-black p-4 rounded-xl z-50">
        <div className="text-white font-semibold text-lg uppercase">
            <a href="#">portfolio</a>
        </div>


        <div className="hidden md:flex space-x-8">
            {LINKS.map((link, index) => (
                <motion.a href={link.href} key={index} className="text-white hover:text-stone-400 transition duration-300"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit">
                    {link.label}
                </motion.a>
            ))}
        </div>


        <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none" aria-label={menuOpen ? "Close menu" : "Open menu"}>
                {menuOpen ? (
                    <RiCloseFill className="w-6 h-6" />
                ) : (
                    <RiMenu3Fill className="w-6 h-6" />
                )
            }
            </button>
        </div>
        
      </div>
      </div>


<AnimatePresence>
      {menuOpen && ( 
        <motion.div className="md:hidden px-4 pt-8 pb-4 bg-stone-950/30 backdrop-blur-lg rounded-b-xl rounded-bl-xl flex flex-col space-y-4 max-w-6xl max-h-screen mx-auto"
        variants={menuVariants}
        initial="closed"
        animate="open"
        exit="closed">
            {
                LINKS.map((link, index) => (
                    <a href={link.href} key={index} className="text-white hover:text-stone-400 transition duration-300" onClick={handleLinkClick}>
                        {link.label}
                    </a> 
                ))
            }
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
