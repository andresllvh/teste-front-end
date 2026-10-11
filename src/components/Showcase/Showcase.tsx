import { useRef, useState } from 'react'
import type { Product } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'
import './Showcase.scss'

export type LoadStatus = 'loading' | 'error' | 'success'

// A API não informa a categoria dos produtos, então as abas só marcam
// a seleção visualmente e a lista continua a mesma.
const TABS = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
]

interface ShowcaseProps {
  title: string
  products: Product[]
  status: LoadStatus
  onSelectProduct: (product: Product) => void
}

function Showcase({ title, products, status, onSelectProduct }: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const listRef = useRef<HTMLUListElement>(null)

  // Rola a lista pela largura visível, mostrando o próximo grupo de cartões.
  function scrollList(direction: 1 | -1) {
    const list = listRef.current
    if (list)
      list.scrollBy({ left: direction * list.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <h2 id="showcase-title" className="showcase__title">
        {title}
      </h2>

      <div className="showcase__tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className="showcase__tab"
            aria-pressed={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {status === 'loading' && (
        <p className="showcase__message" role="status">
          Carregando produtos...
        </p>
      )}

      {status === 'error' && (
        <p className="showcase__message" role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )}

      {status === 'success' && products.length === 0 && (
        <p className="showcase__message">Nenhum produto encontrado.</p>
      )}

      {status === 'success' && products.length > 0 && (
        <div className="showcase__carousel">
          <button
            type="button"
            className="showcase__arrow showcase__arrow--prev"
            aria-label="Produtos anteriores"
            onClick={() => scrollList(-1)}
          >
            ‹
          </button>

          <ul ref={listRef} className="showcase__list">
            {products.map((product) => (
              <li key={product.productName} className="showcase__item">
                <ProductCard product={product} onBuy={onSelectProduct} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="showcase__arrow showcase__arrow--next"
            aria-label="Próximos produtos"
            onClick={() => scrollList(1)}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Showcase
