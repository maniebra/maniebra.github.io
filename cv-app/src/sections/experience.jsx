import { useEffect, useRef, useState } from 'react';

export default function Experience() {
    const experiences = {
        2022: [
            {
                title: "Computer Engineering Student",
                company: "Sharif University of Technology",
                duration: "Sep 2022 - Present",
                description: "Got accepted to the Computer Engineering department at Sharif University of Technology and have been studying there ever since."
            },
            {
                title: "Freelance Developer",
                company: "Freelance",
                duration: "Jan 2022 - Jun 2024",
                description: "Worked on a variety of projects as a freelance developer. Developed and maintained web applications using React and Node.js. Collaborated with senior developers on large-scale projects."
            }
        ],
        2023: [
            {
                title: "Head of Technical Content Creation", 
                company: "Sharif University of Technology",
                duration: "Jun 2023 - Sep 2023",
                description: "Worked as a head teaching assistant for the course of Python Programming and Alogorithmic Creativity, by Dr. Ali Sharifi Zarchi. We taught over 4000 students in this course from all over Iran."
            }
        ],
        2024: [
            {
                title: "Full Stack Developer", 
                company: "Danesh Solutions",
                duration: "Jun 2024 - Present",
                description: "Worked on TradeBin as a QA Engineer and Developer. Developed and maintained backend services using Django and PostgreSQL."
            },
            {
                title: "Founder & Full Stack Developer",
                company: "Hextellar Team", 
                duration: "Aug 2024 - Present",
                description: "Founded a team of developers and worked on a vast variety of projects."
            },
            {
                title: "Head Teaching Assistant",
                company: "Sharif University of Technology",
                duration: "Sep 2023 - Jun 2024",
                description: "Worked as a head teaching assistant for the course of Python Programming for Mr. Ali Abrishami. The course had a more practical approach to programming and focused on the use of Python in real-world applications."
            }
        ],
    };

    const [isVisible, setIsVisible] = useState(false);
    const experienceRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => {
            if (experienceRef.current) {
                observer.unobserve(experienceRef.current);
            }
        };
    }, []);

    return (
        <div className="p-4 md:p-12 bg-black text-white z-30" id="experience" ref={experienceRef}>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Experience
            </h1>
            <div className="max-w-4xl mx-auto mt-12">
                {Object.entries(experiences).map(([year, jobs], yearIndex) => (
                    <div key={year} className={`mb-12 opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out ${isVisible ? 'animate-timeline' : ''}`}
                         style={{
                             animation: isVisible ? `slideIn ${0.8}s ease-out forwards ${yearIndex * 0.3}s` : 'none'
                         }}>
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-white">{year}</div>
                            <div className="flex-grow ml-4 h-0.5 bg-white scale-x-0 origin-left"
                                 style={{
                                     animation: isVisible ? `scaleX 0.8s ease-out forwards ${yearIndex * 0.3 + 0.4}s` : 'none'
                                 }}></div>
                        </div>
                        <div className="ml-8 mt-6 space-y-8">
                            {jobs.map((job, jobIndex) => (
                                <div key={jobIndex} className="relative opacity-0"
                                     style={{
                                         animation: isVisible ? `fadeIn 0.8s ease-out forwards ${yearIndex * 0.3 + jobIndex * 0.2 + 0.6}s` : 'none'
                                     }}>
                                    <div className="absolute -left-10 top-2 w-3 h-3 bg-white rounded-full scale-0"
                                         style={{
                                             animation: isVisible ? `scaleIn 0.3s ease-out forwards ${yearIndex * 0.3 + jobIndex * 0.2 + 0.8}s` : 'none'
                                         }}></div>
                                    <div className="border-l-2 border-white pl-6 pb-8 [border-left-width:0px]"
                                         style={{
                                             animation: isVisible ? `borderWidth 0.2s ease-out forwards ${yearIndex * 0.3 + jobIndex * 0.2 + 0.9}s` : 'none'
                                         }}>
                                        <h3 className="text-xl font-bold">{job.title}</h3>
                                        <h4 className="text-lg text-gray-300">{job.company}</h4>
                                        <p className="text-sm text-gray-400 mt-1">{job.duration}</p>
                                        <p className="mt-2 text-gray-300">{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleX {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0); }
                    to { transform: scale(1); }
                }
                @keyframes borderWidth {
                    from { border-left-width: 0px; }
                    to { border-left-width: 2px; }
                }
            `}</style>
        </div>
    )
}