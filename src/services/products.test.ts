import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetchProducts } from './products'

// Simula o fetch do navegador para testar o serviço sem chamar a API real.
function mockFetch(response: { ok: boolean; status?: number; body?: unknown }) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: response.ok,
      status: response.status ?? 200,
      json: () => Promise.resolve(response.body),
    }),
  )
}

const product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'IPHONE 13 MINI 1',
  photo: 'https://exemplo.com/foto.png',
  price: 9000,
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('fetchProducts', () => {
  it('retorna a lista de produtos quando a API responde corretamente', async () => {
    mockFetch({ ok: true, body: { success: true, products: [product] } })

    await expect(fetchProducts()).resolves.toEqual([product])
    expect(fetch).toHaveBeenCalledWith('/api/produtos')
  })

  it('lança um erro quando a API responde com status de erro', async () => {
    mockFetch({ ok: false, status: 500 })

    await expect(fetchProducts()).rejects.toThrow('HTTP 500')
  })

  it('lança um erro quando o JSON não tem a lista de produtos', async () => {
    mockFetch({ ok: true, body: { success: false } })

    await expect(fetchProducts()).rejects.toThrow('formato inesperado')
  })
})
