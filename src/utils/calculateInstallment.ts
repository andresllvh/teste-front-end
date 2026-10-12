// Valor de cada parcela em centavos, arredondado para o centavo mais próximo.
export function calculateInstallment(
  priceInCents: number,
  installments: number,
): number {
  return Math.round(priceInCents / installments)
}
