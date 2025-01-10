export default function Button(props) {
    return (
        <div className="mt-auto flex items-center justify-between">
            <button className="[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] bg-white px-4 py-2 font-semibold text-black hover:bg-gray-300 transition-all duration-300 w-full" onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    );
}