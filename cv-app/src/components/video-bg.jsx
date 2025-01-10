export default function VideoBg() {
    return (
        <video src="../public/generated_video.mp4"
                controls={false}
                autoPlay
                muted
                playsInline
                loop
                className="absolute inset-0 w-full h-full object-cover z-0"
        />
    )
}