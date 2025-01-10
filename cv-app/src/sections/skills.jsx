export default function Skills() {
    const skillCategories = {
        backend: [
            { name: 'Django', progress: 90 },
            { name: 'Express', progress: 100 },
            { name: 'Flask', progress: 80 }
        ],
        frontend: [
            { name: 'React', progress: 90 },
            { name: 'Vue.js', progress: 80 },
            { name: 'HTML/CSS', progress: 100 }
        ],
        devops: [
            { name: 'Docker', progress: 85 },
            { name: 'Kubernetes', progress: 75 },
            { name: 'CI/CD', progress: 80 }
        ],
        databases: [
            { name: 'PostgreSQL', progress: 85 },
            { name: 'MongoDB', progress: 90 },
            { name: 'Redis', progress: 80 },
            { name: 'MySQL', progress: 90 },
            { name: 'SQLite', progress: 100 },
            { name: 'Oracle', progress: 80 }
        ],
        software: [
            { name: 'Git', progress: 90 },
            { name: 'Linux', progress: 90 },
            { name: 'VS Code', progress: 100 }
        ],
        other: [
            { name: 'Agile', progress: 85 },
            { name: 'Problem Solving', progress: 90 },
            { name: 'Team Leadership', progress: 85 }
        ]
    };

    return (
        <div className="p-4 md:p-12 bg-black/90 backdrop-blur-lg text-white z-30">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Skills
            </h1>
            <div className="flex flex-col gap-8 pt-8 md:pt-12 w-[80dvw] mx-auto">
                {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                    <div key={category} className="w-full">
                        <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="w-full p-4">
                                    <div className="text-xl font-bold mb-2">{skill.name}</div>
                                    <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                                        <div 
                                            className="bg-white h-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: '0%',
                                                animation: `progressAnimation${categoryIndex}${index} 1.5s ease-out forwards ${(categoryIndex * 3 + index) * 0.2}s`
                                            }}
                                        />
                                    </div>
                                    <style jsx>{`
                                        @keyframes progressAnimation${categoryIndex}${index} {
                                            from { width: 0%; }
                                            to { width: ${skill.progress}%; }
                                        }
                                    `}</style>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}