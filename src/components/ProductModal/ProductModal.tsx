import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  // showModal() abre o <dialog> nativo: escurece o fundo, prende o foco
  // dentro do modal e fecha com a tecla Esc sem código extra.
  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  // Fechar sempre pelo close() do próprio <dialog> faz o navegador
  // devolver o foco ao botão que abriu o modal. O evento "close"
  // avisa o App em todos os casos: botão X, clique no fundo e Esc.
  function closeModal() {
    dialogRef.current?.close()
  }

  // Um clique no fundo escuro chega com o próprio <dialog> como alvo;
  // cliques no conteúdo chegam com o elemento interno clicado.
  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) closeModal()
  }

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1))
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1)
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={handleDialogClick}
    >
      <div className="product-modal__content">
        <button
          type="button"
          className="product-modal__close"
          aria-label="Fechar"
          onClick={closeModal}
        >
          ×
        </button>

        <img
          className="product-modal__image"
          src={product.photo}
          alt={product.productName}
          width={363}
          height={363}
        />

        <div className="product-modal__info">
          <h2 id="product-modal-title" className="product-modal__name">
            {product.productName}
          </h2>
          <p className="product-modal__price">{formatPrice(product.price)}</p>
          <p className="product-modal__description">
            {product.descriptionShort}
          </p>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
              >
                −
              </button>
              <output aria-live="polite" aria-label="Quantidade">
                {String(quantity).padStart(2, '0')}
              </output>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button type="button" className="product-modal__buy">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default ProductModal
