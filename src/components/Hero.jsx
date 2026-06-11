export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">NEW DROP — SS 2025</div>

      <div className="hero-title">
        <div className="hero-line"><span className="line-mask"><span className="hero-line-text">NO PIDAS</span></span></div>
        <div className="hero-line"><span className="line-mask"><span className="hero-line-text hero-line-accent">PERMISO</span></span></div>
        <div className="hero-line"><span className="line-mask"><span className="hero-line-text">PARA SER</span></span></div>
        <div className="hero-line"><span className="line-mask"><span className="hero-line-sub">REAL.</span></span></div>
      </div>

      <p className="hero-sub">
        Gorras y sacos para los que van de frente.<br />
        Sin filtro. Sin excusas. HitHats.
      </p>

      <div className="hero-stats">
        <span>02 PRODUCTOS</span>
        <span>100% STREETWEAR</span>
        <span>HECHO PARA LA CALLE</span>
      </div>

      <div className="hero-img-wrapper">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1765916093860-28dc1bdd2de9?w=600&h=800&fit=crop&auto=format"
          alt="HitHats hero"
          loading="eager"
        />
      </div>

      <div className="hero-collection-num">COL. 001 — 2025</div>
    </section>
  )
}
