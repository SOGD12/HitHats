const img = (id) => `https://images.unsplash.com/${id}?w=400&h=600&fit=crop&auto=format`

const colLeft = [
  { img: img('photo-1529139574466-a303027c1d8b'), name: 'Sofía' },
  { img: img('photo-1507003211169-0a1dd7228f2d'), name: 'Mateo' },
  { img: img('photo-1506794778202-cad84cf45f1d'), name: 'Camila' },
  { img: img('photo-1517841905240-472988babdf9'), name: 'Julián' },
  { img: img('photo-1539571496334-64b3c9db01c4'), name: 'Valentina' },
  { img: img('photo-1531421467283-6537c0a44bbd'), name: 'Andrés' },
  { img: img('photo-1544005313-94d2480232e6'), name: 'Isabella' },
  { img: img('photo-1479937282804-c487bbbf52b1'), name: 'Santiago' },
]

const colCenter = [
  { img: img('photo-1777447458522-79367cd8e5d3'), name: 'Lucía' },
  { img: img('photo-1777899051838-cd96dad8fb31'), name: 'Daniel' },
  { img: img('photo-1761646063010-7f4913655ae3'), name: 'Mariana' },
  { img: img('photo-1749381164289-6b03830ff2b9'), name: 'Felipe' },
  { img: img('photo-1765916093860-28dc1bdd2de9'), name: 'Gabriela' },
  { img: img('photo-1774413769417-29fde33e368b'), name: 'Tomás' },
  { img: img('photo-1710182240446-8ae8c223e135'), name: 'Sara' },
  { img: img('photo-1770686307114-d343925f512e'), name: 'Pablo' },
]

const colRight = [
  { img: img('photo-1504596483640-5b6d53fb8dd4'), name: 'Natalia' },
  { img: img('photo-1549478328-7b9f8c1b2a3d'), name: 'Alejandro' },
  { img: img('photo-1552053835-7153b4f18f0a'), name: 'Carolina' },
  { img: img('photo-1507003211169-0a1dd7228f2d'), name: 'Sebastián' },
  { img: img('photo-1529139574466-a303027c1d8b'), name: 'Manuela' },
  { img: img('photo-1517841905240-472988babdf9'), name: 'Diego' },
  { img: img('photo-1531421467283-6537c0a44bbd'), name: 'Paula' },
  { img: img('photo-1539571496334-64b3c9db01c4'), name: 'Jorge' },
]

function Item({ item, i }) {
  return (
    <div className="gallery-item" key={i}>
      <img src={item.img} alt={item.name} loading="lazy" width="400" height="600" />
      <div className="gallery-item-cap">{item.name}</div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-intro">
        <span className="section-label">— EN LA PIEL</span>
        <h2 className="section-title reveal-title">ASÍ SE USA<br />HITHATS</h2>
      </div>

      <div className="gallery-reverse-wrap">
        <div className="gallery-reverse-inner">
          <div className="gallery-col gallery-col--reverse">
            {colLeft.map((item, i) => <Item item={item} i={i} />)}
          </div>
          <div className="gallery-col">
            {colCenter.map((item, i) => <Item item={item} i={i} />)}
          </div>
          <div className="gallery-col gallery-col--reverse">
            {colRight.map((item, i) => <Item item={item} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}