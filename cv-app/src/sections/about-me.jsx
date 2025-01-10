import Card from '../components/card'

export default function AboutMe() {
    return (
        <div className="p-12 bg-black text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">
                About Me
            </h1>
            <div className="flex flex-row gap-4 h-96 pt-12 w-8/12 justify-between">
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