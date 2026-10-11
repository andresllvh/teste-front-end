import { describe, expect, it } from 'vitest'
import { formatPrice } from './formatPrice'

// O Intl usa um espaço especial (não separável) entre "R$" e o valor;
// trocamos por um espaço comum para comparar o texto.
function normalize(text: string) {
  return text.replace(/\s/g, ' ')
}

describe('formatPrice', () => {
  it('converte centavos para reais no formato brasileiro', () => {
    expect(normalize(formatPrice(149990))).toBe('R$ 1.499,90')
  })

  it('formata valores menores que mil sem separador de milhar', () => {
    expect(normalize(formatPrice(15000))).toBe('R$ 150,00')
  })

  it('mantém os centavos quando o valor não é redondo', () => {
    expect(normalize(formatPrice(520))).toBe('R$ 5,20')
  })
})
