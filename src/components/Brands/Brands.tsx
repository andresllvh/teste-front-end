import Logo from '../Logo/Logo'
import './Brands.scss'

// O layout mostra o mesmo logo em todas as posições.
const BRANDS = ['marca-1', 'marca-2', 'marca-3', 'marca-4', 'marca-5']

function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">
        Navegue por marcas
      </h2>

      <ul className="brands__list">
        {BRANDS.map((brand) => (
          <li key={brand}>
            <a href="#" className="brands__item">
              <Logo width={117} alt="Econverse" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Brands
