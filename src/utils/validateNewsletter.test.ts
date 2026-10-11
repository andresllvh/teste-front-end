import { describe, expect, it } from 'vitest'
import { validateNewsletter } from './validateNewsletter'

describe('validateNewsletter', () => {
  it('não retorna erros quando todos os campos estão corretos', () => {
    expect(validateNewsletter('André', 'andre@email.com', true)).toEqual({})
  })

  it('retorna os três erros quando o formulário está vazio', () => {
    const errors = validateNewsletter('', '', false)

    expect(errors.name).toBe('Digite seu nome.')
    expect(errors.email).toBe('Digite um e-mail válido.')
    expect(errors.terms).toBe('Aceite os termos para continuar.')
  })

  it('recusa e-mails sem domínio completo', () => {
    expect(validateNewsletter('André', 'andre@email', true).email).toBeDefined()
    expect(validateNewsletter('André', 'andre.com', true).email).toBeDefined()
  })

  it('ignora espaços antes e depois do nome e do e-mail', () => {
    expect(validateNewsletter('  André  ', ' andre@email.com ', true)).toEqual(
      {},
    )
    expect(
      validateNewsletter('   ', 'andre@email.com', true).name,
    ).toBeDefined()
  })
})
