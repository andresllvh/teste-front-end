import drinksIcon from '../../assets/categories/bebidas.webp'
import fitnessIcon from '../../assets/categories/esportes.webp'
import toolsIcon from '../../assets/categories/ferramentas.webp'
import fashionIcon from '../../assets/categories/moda.webp'
import healthIcon from '../../assets/categories/saude.webp'
import supermarketIcon from '../../assets/categories/supermercado.webp'
import technologyIcon from '../../assets/categories/tecnologia.webp'
import './Categories.scss'

const CATEGORIES = [
  { name: 'Tecnologia', icon: technologyIcon },
  { name: 'Supermercado', icon: supermarketIcon },
  { name: 'Bebidas', icon: drinksIcon },
  { name: 'Ferramentas', icon: toolsIcon },
  { name: 'Saúde', icon: healthIcon },
  { name: 'Esportes e Fitness', icon: fitnessIcon },
  { name: 'Moda', icon: fashionIcon },
]

// Como no layout, "Tecnologia" aparece destacada. Os ícones são as
// ilustrações originais, cada uma com a sua cor.
const HIGHLIGHTED_CATEGORY = 'Tecnologia'

function Categories() {
  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="categories__title">
        Compre por categoria
      </h2>

      <ul className="categories__list">
        {CATEGORIES.map(({ name, icon }) => (
          <li key={name}>
            <a
              href="#"
              className="categories__item"
              aria-current={name === HIGHLIGHTED_CATEGORY ? 'true' : undefined}
            >
              <span className="categories__icon">
                <img src={icon} alt="" width={61} height={61} />
              </span>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categories
