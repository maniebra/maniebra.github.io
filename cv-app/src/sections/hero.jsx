import { useEffect, useState } from 'react';
import Button from '../components/button';
import VideoOverlay from '../components/video-overlay';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    
    if (!video) {
      setIsLoading(false);
      setShowContent(true);
      return;
    }

    const handleVideoLoad = () => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    };

    if (video.readyState >= 3) {
      handleVideoLoad();
    } else {
      video.addEventListener('canplay', handleVideoLoad);
    }

    return () => {
      video.removeEventListener('canplay', handleVideoLoad);
    };
  }, []);

  const greetingText = "Hi, I'm Mani!";

  return (
    <div className="relative min-h-[225dvh] md:min-h-screen flex flex-col lg:flex-row z-30">
      {isLoading ? (
        <div className="fixed inset-0 bg-black flex flex-col gap-8 items-center justify-center z-50">
          <div className="rounded-full h-16 w-16 border-t-2 border-white animate-spin" />
          <p className="text-white text-3xl md:text-4xl font-bold">
            loading...
          </p>
        </div>
      ) : (
        <>
          <VideoOverlay />
          <div className="absolute top-0 mt-[75dvh] md:mt-0 md:space-y-8 inset-0 flex flex-col
            md:left-auto md:right-0 z-30 bg-black md:bg-black/80 p-6 md:p-12 md:pt-6 md:w-1/3 backdrop-blur-md overflow-y-auto">
            <div className={`space-y-6 md:space-y-8 pb-8 md:pb-0 md:pt-20 w-full items-center justify-center ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <h1 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left">
                {greetingText}
              </h1>
              <p className="text-white pt-6 text-base md:text-lg text-justify h-min">
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
              </p>
              <div className="hidden md:flex mt-auto justify-between pl-12">
                <Button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                  Learn more about me!
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
