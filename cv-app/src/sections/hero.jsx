import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import VideoOverlay from '../components/video-overlay';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const greetingText = "Hi, I'm Mani!";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="relative min-h-[225dvh] md:min-h-screen flex flex-col lg:flex-row z-30">
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col gap-8 items-center justify-center z-50"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="rounded-full h-16 w-16 border-t-2 border-white"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-3xl md:text-4xl font-bold"
            >
              loading...
            </motion.p>
          </motion.div>
        ) : (
          <>
            <VideoOverlay />
            <motion.div 
              className="absolute top-0 mt-[75dvh] md:mt-0 md:space-y-12 inset-0 flex flex-col
              md:left-auto md:right-0 z-30 bg-black md:bg-black/80 p-6 md:p-12 md:w-1/3 backdrop-blur-sm"
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={showContent ? "visible" : "hidden"}
                className="space-y-6 md:space-y-8 pb-8 md:pb-0 md:pt-20 items-center justify-center"
              >
                <motion.h1 
                  variants={fadeIn}
                  className="text-white text-3xl pt-6 md:text-4xl font-bold text-center md:text-left"
                >
                  {greetingText}
                </motion.h1>
                <motion.p 
                  variants={fadeIn}
                  className="text-white pt-6 text-base md:text-lg text-justify"
                >
                  I'm a computer engineering student with a profound
                  passion for cutting-edge technologies and a keen enjoyment of
                  innovation. I am constantly exploring the latest advancements in the
                  field to not only fuel my curiosity but also to apply these
                  innovations in practical projects. My academic journey is marked by a
                  commitment to understanding the intricacies of computer systems,
                  software development, and digital solutions. This enthusiasm extends
                  beyond the classroom through my participation in tech forums,
                  hackathons, and internships, where I contribute to and learn from the
                  vibrant community of tech enthusiasts. I am eager to leverage my
                  skills in software engineering and my innovative mindset to make a
                  significant impact in the tech industry, continuously seeking
                  opportunities to grow, learn, and contribute to the development of
                  groundbreaking technology solutions.
                </motion.p>
                <motion.button 
                  variants={fadeIn}
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className="hidden md:block text-white bg-gray-800 p-2 rounded-md text-base md:text-lg mx-auto"
                >
                  <span className="text-white bg-gray-800 p-2 rounded-md text-base md:text-lg mx-auto">
                    {IoIosArrowDown} Learn more about me!
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
