import type { Product, ProductsResponse } from '../types/product'

// Caminho atendido pelo proxy configurado em vite.config.ts.
const PRODUCTS_URL = '/api/produtos'

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error(`Falha ao buscar produtos (HTTP ${response.status})`)
  }

  const data: ProductsResponse = await response.json()

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta da API em formato inesperado')
  }

  return data.products
}
