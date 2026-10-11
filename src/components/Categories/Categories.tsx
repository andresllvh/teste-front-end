import { useState, type ComponentType } from 'react'
import type { IconProps } from '../icons/Icon'
import {
  DrinksIcon,
  FashionIcon,
  FitnessIcon,
  HealthIcon,
  SupermarketIcon,
  TechnologyIcon,
  ToolsIcon,
} from '../icons/categoryIcons'
import './Categories.scss'

interface Category {
  name: string
  Icon: ComponentType<IconProps>
}

const CATEGORIES: Category[] = [
  { name: 'Tecnologia', Icon: TechnologyIcon },
  { name: 'Supermercado', Icon: SupermarketIcon },
  { name: 'Bebidas', Icon: DrinksIcon },
  { name: 'Ferramentas', Icon: ToolsIcon },
  { name: 'Saúde', Icon: HealthIcon },
  { name: 'Esportes e Fitness', Icon: FitnessIcon },
  { name: 'Moda', Icon: FashionIcon },
]

function Categories() {
  // Assim como as abas da vitrine, a seleção é só visual: a API não
  // informa a categoria de cada produto.
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name)

  return (
    <section className="categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="categories__title">
        Compre por categoria
      </h2>

      <ul className="categories__list">
        {CATEGORIES.map(({ name, Icon }) => (
          <li key={name}>
            <button
              type="button"
              className="categories__item"
              aria-pressed={name === activeCategory}
              onClick={() => setActiveCategory(name)}
            >
              <span className="categories__icon">
                <Icon size={56} strokeWidth={1} />
              </span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Categories
