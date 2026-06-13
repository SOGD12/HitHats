export default function AboutMedia({ src, poster }) {
  return (
    <div className="about-media">
      {src ? (
        <video
          className="about-media-video"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="about-media-placeholder">
          <div className="about-media-gradient" />
        </div>
      )}
    </div>
  )
}
