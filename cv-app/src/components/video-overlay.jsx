import VideoBg from './video-bg'

export default function VideoOverlay() {
    return (
        <div className="relative w-full inset-0 h-[100dvh]">
            <div className="h-3/4 md:h-screen absolute top-0 inset-0 from-transparent to-black z-20 bg-gradient-to-b" />
            <VideoBg />
        </div>
    )
}