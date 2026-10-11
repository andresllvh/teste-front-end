import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onBuy: (product: Product) => void
}

function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
        width={247}
        height={228}
        loading="lazy"
      />

      <h3 className="product-card__name">{product.productName}</h3>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__shipping">Frete grátis</p>

      <button
        type="button"
        className="product-card__buy"
        onClick={() => onBuy(product)}
      >
        Comprar
      </button>
    </article>
  )
}

export default ProductCard
