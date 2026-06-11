export default function Statement() {
  return (
    <section className="statement">
      <span className="statement-corner statement-corner--tl">{'\u00D7'}</span>
      <span className="statement-corner statement-corner--tr">{'\u00D7'}</span>
      <span className="statement-corner statement-corner--bl">{'\u00D7'}</span>
      <span className="statement-corner statement-corner--br">{'\u00D7'}</span>

      <h2 className="statement-heading">
        <span className="statement-line">LA CALLE</span>
        <span className="statement-line">TE VIO</span>
        <span className="statement-line">PRIMERO</span>
      </h2>

      <p className="statement-sub">
        HitHats nació en Colombia para los que no esperan que nadie
        les dé permiso de ser quienes son.
      </p>
    </section>
  )
}
