const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

// A API envia o preço em centavos (149990 = R$ 1.499,90, valor que aparece
// no modal do Figma), padrão comum em plataformas de e-commerce como a VTEX.
export function formatPrice(priceInCents: number): string {
  return currencyFormatter.format(priceInCents / 100)
}
