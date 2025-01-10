import Card from '../components/card'

export default function AboutMe() {
    return (
        <div className="p-4 md:p-12 bg-black text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 pt-8 md:pt-12 w-full md:w-8/12 mx-auto h-full justify-between items-center">
                <Card title="Skills" actionName="View my skills">
                    <p>
                        I am a skilled software engineer with a passion for creating innovative solutions. I have a strong background in web development and have worked on a variety of projects, including e-commerce platforms, social media applications, and educational tools.
                    </p>
                </Card>
                <Card title="Experience" actionName="See what I've done">
                    <p>
                        I have a strong background in web development and have worked on a variety of projects, including e-commerce platforms, social media applications, and educational tools.
                    </p>
                </Card>
                <Card title="Projects" actionName="View my projects">
                    <p>
                        I have worked on a variety of projects, including e-commerce platforms, social media applications, and educational tools.
                    </p>
                </Card>
            </div>
        </div>
    )
}