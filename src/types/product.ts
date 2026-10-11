// Campos exatamente como vêm do JSON da Econverse.
export interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProductsResponse {
  success: boolean
  products: Product[]
}
