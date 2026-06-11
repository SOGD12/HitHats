const text = 'GORRAS · SACOS · STREETWEAR · HITHATS · NO PIDAS PERMISO · '

export default function Marquee() {
  return (
    <section className="marquee">
      <div className="marquee-row marquee-row--left">
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className="marquee-row marquee-row--right">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  )
}
