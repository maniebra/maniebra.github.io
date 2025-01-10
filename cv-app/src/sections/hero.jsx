import VideoOverlay from '../components/video-overlay';

export default function Hero() {
  return (
    <div className="flex flex-row relative z-30" aria-description="Hero">
      <VideoOverlay />
      <div className="absolute inset-y-0 pt-20 top-0 right-0 z-30 gap-12 bg-black/80 p-12 w-1/3">
        <h1 className="text-white text-4xl font-bold">Hello!</h1>
        <p className="text-white text-lg pt-12">
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
        <p>Scroll down to learn more about me!</p>
      </div>
    </div>
  );
}
