import { useEffect, useRef, useState } from 'react';

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const projectsRef = useRef(null);

    const projects = [
        {
            title: "Arthur",
            description: "I have been working on a backend framework inspired by Django that utilizes Express.js and TypeScript.",
            url: "https://github.com/maniebra/arthur"
        },
        {
            title: "TradeBin", 
            description: "I contributed to the development of TradeBin, a platform for trading Iranian stocks, as a QA Engineer and Developer.",
            url: "https://tradebin.ir"
        },
        {
            title: "Sonderhub",
            description: "I worked as a full stack developer and project manager for Sonderhub, a platform for managing events.",
            url: "https://sonderhub.org"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <div className="p-4 md:p-12 bg-black/90 backdrop-blur-lg text-white z-30" id="projects" ref={projectsRef}>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Projects
            </h1>
            <div className="max-w-6xl mx-auto mt-12">
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            rel="noopener noreferrer"
                            className={`opacity-0 transition-all duration-1000`}
                            style={{
                                animation: isVisible ? `fadeIn 0.8s ease-out forwards ${index * 0.3}s` : 'none'
                            }}
                        >
                            <div className="group">
                                <div className="p-6 bg-black text-white border-2 border-transparent group-hover:border-white group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                                    <p className="text-base md:text-lg mb-6">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span>Explore Project</span>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}