import VideoBg from './video-bg'

export default function VideoOverlay() {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20" />
            <VideoBg />
        </div>
    )
}