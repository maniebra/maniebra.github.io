export default function VideoBg() {
    return (
        <video controls={false}
                autoPlay
                muted
                playsInline
                loop
                className="absolute inset-0 w-full h-3/4 md:h-screen object-cover z-0"
        >
                <source src="../public/generated_video.mp4" type="video/mp4" />
        </video>
    )
}