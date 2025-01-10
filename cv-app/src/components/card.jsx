export default function Card(props) {
    return (
        <div className="relative overflow-hidden bg-white p-0.5 min-h-full md:min-h-[30dvh] md:max-w-[27dvw] [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
            <div className="relative flex flex-col gap-4 bg-black p-6 text-gray-100 h-full md:min-h-[30dvh] [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]">
                <h3 className="text-2xl font-bold text-gray-200">
                    {props.title}
                </h3>
                
                <p className="text-gray-300 text-justify">
                    {props.children}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                    <button className="[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 transition-all duration-300">
                        {props.actionName}
                    </button>
                </div>
            </div>
        </div>
    );
}