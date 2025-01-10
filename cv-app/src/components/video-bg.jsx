import { useEffect, useState } from 'react';

export default function VideoBg() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutMeSection = document.querySelector('#about-me');
            if (aboutMeSection) {
                const aboutMePosition = aboutMeSection.getBoundingClientRect().top;
                setIsFixed(aboutMePosition <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <video controls={false}
                autoPlay
                muted
                playsInline
                loop
                className={`${isFixed ? 'fixed' : 'absolute'} inset-0 w-full h-3/4 md:h-screen object-cover z-[-10]`}
        >
                <source src="../public/generated_video.mp4" type="video/mp4" />
        </video>
    )
}