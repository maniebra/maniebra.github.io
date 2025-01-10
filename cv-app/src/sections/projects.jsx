import Card from "../components/card";

export default function Projects() {
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

    return (
        <div className="p-4 md:p-12 bg-black/90 backdrop-blur-lg text-white z-30" id="projects">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project, index) => (
                    <a href={project.url} 
                       key={index}
                       target="_blank"
                       rel="noopener noreferrer">
                        <Card 
                            title={project.title}
                            actionName="View Project"
                        >
                            {project.description}
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}