import Card from '../components/card'

export default function AboutMe() {
    return (
        <div className="p-4 md:p-12 bg-black text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 pt-8 md:pt-12 w-full md:w-8/12 mx-auto">
                <Card title="Skills" actionName="View my skills">
                    Card 1
                </Card>
                <Card title="Experience" actionName="See what I've done">
                    Card 2
                </Card>
                <Card title="Projects" actionName="Look at my projects">
                    Card 3
                </Card>
            </div>
        </div>
    )
}