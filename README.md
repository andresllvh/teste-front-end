# Teste Front-End Jr — Econverse

Página inicial de uma loja virtual, desenvolvida a partir do layout do Figma do teste técnico Front-End Jr da Econverse. Os produtos das vitrines vêm da API oficial do teste, e o clique em **Comprar** abre um modal com os detalhes do produto.

## Funcionalidades

- **Vitrines de produtos** carregadas da API, com estados de carregamento, erro e lista vazia.
- **Carrossel** com setas no desktop e arraste lateral no celular, sem bibliotecas.
- **Modal de detalhes** com o elemento `<dialog>` nativo: fecha pelo botão, pela tecla Esc ou com um clique no fundo, e devolve o foco ao botão que o abriu.
- **Seletor de quantidade** no modal, com mínimo de 1 unidade.
- **Newsletter** com validação de nome, e-mail e aceite dos termos, e mensagens de erro acessíveis.
- **Layout responsivo** para celular, tablet e desktop.
- Header, banner principal, categorias, banners de parceiros, marcas e footer conforme o layout.

## Tecnologias

- [React 19](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) para desenvolvimento e build
- [Sass (SCSS)](https://sass-lang.com/) com variáveis, mixins e padrão BEM
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) para análise do código

Nenhuma biblioteca de componentes ou de ícones foi usada: os ícones são SVGs próprios.

## Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) 20.19 ou superior (recomendado o 22 LTS).

```bash
# 1. Clone o repositório
git clone https://github.com/andresllvh/teste-front-end-econverse.git
cd teste-front-end-econverse

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse [http://localhost:5173](http://localhost:5173).

### Outros comandos

| Comando | O que faz |
| --- | --- |
| `npm run build` | Verifica os tipos com TypeScript e gera a versão de produção em `dist/` |
| `npm run preview` | Serve a versão de produção localmente em [http://localhost:4173](http://localhost:4173) |
| `npm run lint` | Analisa o código com o Oxlint |

## Estrutura de pastas

```
src/
├── assets/          # Imagens dos banners (WebP)
├── components/      # Um componente por pasta, com seu .tsx e seu .scss
│   ├── Header/
│   ├── Hero/
│   ├── Categories/
│   ├── Showcase/        # Vitrine com carrossel
│   ├── ProductCard/
│   ├── ProductModal/
│   ├── PartnerBanners/
│   ├── Brands/
│   ├── Newsletter/
│   ├── Footer/
│   ├── Logo/
│   └── icons/           # Componente base de ícone e os ícones SVG
├── services/        # Busca dos produtos na API
├── styles/          # Variáveis, mixins e estilos globais
├── types/           # Tipos TypeScript dos dados da API
├── utils/           # Formatação de preço
├── App.tsx          # Monta a página e guarda o estado dos produtos
└── main.tsx         # Ponto de entrada da aplicação
```

## Decisões técnicas

### Proxy para a API (CORS)

A API do teste não envia o cabeçalho `Access-Control-Allow-Origin`, então o navegador bloqueia a requisição feita direto de `localhost`. Para resolver sem serviços externos, o `vite.config.ts` cria um proxy: a página chama `/api/produtos`, e o servidor do Vite busca o JSON na Econverse e devolve para a página. O proxy funciona em `npm run dev` e em `npm run preview`.

Para publicar o projeto em uma hospedagem, seria necessário configurar um redirecionamento equivalente na plataforma escolhida, já que o proxy do Vite só existe nos servidores locais.

### Uma única busca para toda a página

O `App` busca os produtos uma vez e repassa a lista para as três vitrines e para o modal via props. Assim a página faz uma só requisição, e todos os componentes mostram os mesmos dados.

### Preço em centavos

A API envia o preço como número inteiro (ex.: `149990`). Esse valor corresponde a R$ 1.499,90 no modal do layout, então o preço é tratado como centavos e formatado com `Intl.NumberFormat`, a API nativa de formatação do JavaScript.

### Dados que a API não fornece

O layout mostra preço antigo, parcelamento e categorias de produto, mas a API não traz esses campos. Para não exibir valores inventados:

- os cartões mostram apenas nome, foto, preço e frete;
- as abas da vitrine e os cartões de categoria só destacam a seleção visualmente, sem filtrar a lista.

### Acessibilidade

- HTML semântico: `header`, `main`, `nav`, `section`, `footer`, títulos em ordem e um único `h1`.
- Ícones decorativos ocultos de leitores de tela, e links de ícone com `aria-label`.
- Campos de formulário com `label`, e erros ligados aos campos com `aria-describedby`.
- Contraste de cores dentro do mínimo da WCAG AA.

### Desempenho

- Imagens dos banners em WebP (o banner principal caiu de 269 KB para 74 KB).
- Imagens dos produtos com `loading="lazy"` e dimensões definidas, evitando saltos no layout.

Medição local com o Lighthouse (simulação de celular), na versão de produção:

| Desempenho | Acessibilidade | Boas práticas | SEO |
| :---: | :---: | :---: | :---: |
| 88 | 100 | 100 | 100 |

## Limitações conhecidas

- Os links de navegação apontam para `#`, pois o teste cobre apenas a página inicial.
- A busca do header, o carrinho e o botão **Comprar** do modal não têm comportamento real, porque não há API para essas ações.
- A newsletter valida os campos e confirma na tela, mas não envia os dados para nenhum servidor.
- Os textos de exemplo (_Lorem ipsum_) foram mantidos como estão no layout.

## Autor

**André Laureano** — [GitHub](https://github.com/andresllvh)
