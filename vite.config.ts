import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// A API da Econverse não envia o cabeçalho Access-Control-Allow-Origin,
// então o navegador bloqueia o fetch direto a partir de localhost.
// O proxy faz o servidor do Vite buscar o JSON e repassar para a página,
// tanto em `npm run dev` quanto em `npm run preview`.
const apiProxy = {
  '/api/produtos': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: () =>
      '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { proxy: apiProxy },
  preview: { proxy: apiProxy },
})
