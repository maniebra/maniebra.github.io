import Card from '../components/card'

export default function AboutMe() {
    return (
        <div className="p-4 md:p-12 bg-black text-white z-30" id="about-me">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 pt-8 md:pt-12 w-full mx-auto h-full justify-evenly items-center">
                <Card title="Skills" actionName="View my skills" actionLink="#skills">
                    <p>
                        I am a skilled software engineer who knows many programming languages and frameworks. I am most proficient in web and mobile development.
                    </p>
                </Card>
                <Card title="Experience" actionName="See what I've done" actionLink="#experience">
                    <p>
                        I have a strong background in web development and have worked on a variety of projects as a full stack developer.
                    </p>
                </Card>
                <Card title="Projects" actionName="View my projects" actionLink="#projects">
                    <p>
                        I have worked on a variety of academic and industrial projects throughout my career as a developer.
                    </p>
                </Card>
            </div>
        </div>
    )
}