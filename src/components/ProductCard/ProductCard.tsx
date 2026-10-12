import type { Product } from '../../types/product'
import { calculateInstallment } from '../../utils/calculateInstallment'
import { formatPrice } from '../../utils/formatPrice'
import './ProductCard.scss'

// A API não informa parcelamento; o cartão mostra o preço dividido em 2x
// sem juros, como no layout.
const INSTALLMENTS = 2

interface ProductCardProps {
  product: Product
  onBuy: (product: Product) => void
}

function ProductCard({ product, onBuy }: ProductCardProps) {
  const installmentPrice = calculateInstallment(product.price, INSTALLMENTS)

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
        width={278}
        height={228}
        loading="lazy"
      />

      <h3 className="product-card__name">{product.productName}</h3>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">
        ou {INSTALLMENTS}x de {formatPrice(installmentPrice)} sem juros
      </p>
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
