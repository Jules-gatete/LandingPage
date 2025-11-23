import './hero.css'

export default function Hero({
  videoSrc = '/video.mp4',
  poster = '/images/hero-poster.jpg',
  backgroundImage
}) {
  
  const style = !videoSrc && backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` } 
    : {}

  return (
    <section className="hero" style={style} id="home">

      {/* Background Video */}
      {videoSrc && (
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Center Content */}
      <div className="hero__center">
        <div className="hero__card">

          <h2 className="hero__heading">
            Safe medicine disposal starts here.
          </h2>

          <p className="hero__sub">
            Snap a medicine, get a trusted disposal instruction, and request help from a Community Health
            Worker when you need it. UmutiSafe keeps households, rivers, and soil protected.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href="https://umuti-safe-app.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Account
            </a>
            <a
              className="btn btn--alt"
              href="https://umuti-safe-app.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Log In
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}
