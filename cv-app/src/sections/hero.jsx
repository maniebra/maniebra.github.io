import VideoOverlay from '../components/video-overlay';

export default function Hero() {
  return (
    <div className="relative min-h-[225dvh] md:min-h-screen flex flex-col lg:flex-row z-30">
      <VideoOverlay/>
      <div className="absolute top-0 mt-[75dvh] md:mt-0 md:space-y-12 inset-0 flex flex-col
      md:left-auto md:right-0 z-30 bg-black md:bg-black/80 p-6 md:p-12 md:w-1/3 backdrop-blur-sm">
        <div className="space-y-6 md:space-y-8 pb-8 md:pb-0 md:pt-20 items-center justify-center">
          <h1 className="text-white text-3xl pt-6 md:text-4xl font-bold text-center md:text-left">Hello There!</h1>
          <p className="text-white pt-6 text-base md:text-lg text-justify">
            I'm Mani Ebrahimi, A computer engineering student with a profound
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
          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="hidden md:block text-white bg-gray-800 p-2 rounded-md text-base md:text-lg mx-auto">
            <span className="text-white bg-gray-800 p-2 rounded-md text-base md:text-lg mx-auto">
              Scroll down to learn more about me!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
