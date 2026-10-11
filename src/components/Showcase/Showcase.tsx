import type { Product } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'

export type LoadStatus = 'loading' | 'error' | 'success'

interface ShowcaseProps {
  title: string
  products: Product[]
  status: LoadStatus
  onSelectProduct: (product: Product) => void
}

function Showcase({
  title,
  products,
  status,
  onSelectProduct,
}: ShowcaseProps) {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <h2 id="showcase-title" className="showcase__title">
        {title}
      </h2>

      {status === 'loading' && <p role="status">Carregando produtos...</p>}

      {status === 'error' && (
        <p role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )}

      {status === 'success' && products.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      {status === 'success' && products.length > 0 && (
        <ul className="showcase__list">
          {products.map((product) => (
            <li key={product.productName}>
              <ProductCard product={product} onBuy={onSelectProduct} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Showcase
