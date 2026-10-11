import { useEffect, useState } from 'react'
import ProductModal from './components/ProductModal/ProductModal'
import Showcase, { type LoadStatus } from './components/Showcase/Showcase'
import { fetchProducts } from './services/products'
import type { Product } from './types/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<LoadStatus>('loading')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    // Evita atualizar o estado se o componente for desmontado antes da
    // resposta chegar (o StrictMode monta, desmonta e monta de novo em dev).
    let ignore = false

    async function loadProducts() {
      try {
        const data = await fetchProducts()
        if (!ignore) {
          setProducts(data)
          setStatus('success')
        }
      } catch (error) {
        console.error(error)
        if (!ignore) setStatus('error')
      }
    }

    loadProducts()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <main>
      <Showcase
        title="Produtos relacionados"
        products={products}
        status={status}
        onSelectProduct={setSelectedProduct}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  )
}

export default App
