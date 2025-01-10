export default function Card(props) {
    return (
        <div className="relative overflow-hidden bg-cyan-600 p-1 h-full [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
            <div className="relative flex flex-col gap-4 bg-gray-900 p-6 text-gray-100 h-full [clip-path:polygon(20px_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%,0_20px)]">
                <h3 className="text-2xl font-bold text-cyan-600">
                    {props.title}
                </h3>
                
                <p className="text-gray-300">
                    {props.children}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                    <button className="[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700 transition-all duration-300">
                        {props.actionName}
                    </button>
                    <div className="h-px w-16 bg-gray-900"></div>
                </div>
            </div>
        </div>
    );
}