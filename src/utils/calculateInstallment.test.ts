import { describe, expect, it } from 'vitest'
import { calculateInstallment } from './calculateInstallment'

describe('calculateInstallment', () => {
  it('divide o preço igualmente entre as parcelas', () => {
    expect(calculateInstallment(149990, 2)).toBe(74995)
  })

  it('arredonda para o centavo mais próximo quando a divisão não é exata', () => {
    expect(calculateInstallment(1001, 2)).toBe(501)
    expect(calculateInstallment(1000, 3)).toBe(333)
  })
})
