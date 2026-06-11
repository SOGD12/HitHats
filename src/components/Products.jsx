const products = [
  { name: 'Gorra Clásica Negra', cat: 'GORRA', price: '89.000', img: 'https://images.unsplash.com/photo-1777447458522-79367cd8e5d3?w=600&h=600&fit=crop&auto=format' },
  { name: 'Saco Oversize Raw', cat: 'SACO', price: '189.000', img: 'https://images.unsplash.com/photo-1777899051838-cd96dad8fb31?w=600&h=600&fit=crop&auto=format' },
  { name: 'Gorra Edición Calle', cat: 'GORRA', price: '95.000', img: 'https://images.unsplash.com/photo-1761646063010-7f4913655ae3?w=600&h=600&fit=crop&auto=format' },
  { name: 'Saco Drop Shoulder', cat: 'SACO', price: '210.000', img: 'https://images.unsplash.com/photo-1749381164289-6b03830ff2b9?w=600&h=600&fit=crop&auto=format' },
]

export default function Products() {
  return (
    <section className="products">
      <span className="section-label">— LA COLECCIÓN</span>
      <h2 className="section-title reveal-title">PIEZAS QUE<br />HABLAN SOLOS</h2>

      <div className="products-grid">
        {products.map((p, i) => (
          <div className="product-card" key={i} data-index={i}>
            <div className="product-img-wrapper">
              <div className="product-img-overlay"></div>
              <img src={p.img} alt={p.name} loading={i < 2 ? 'eager' : 'lazy'} width="600" height="600" />
            </div>
            <span className="product-cat">{p.cat}</span>
            <h3 className="product-name">{p.name}</h3>
            <span className="product-price">${p.price} COP</span>
            <a href="#" className="product-link">Ver más →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
