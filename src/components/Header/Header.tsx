import type { FormEvent } from 'react'
import {
  BoxIcon,
  CardIcon,
  CartIcon,
  CrownIcon,
  HeartIcon,
  SearchIcon,
  ShieldIcon,
  TruckIcon,
  UserIcon,
} from '../icons/headerIcons'
import Logo from '../Logo/Logo'
import './Header.scss'

const CATEGORIES = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
]

function Header() {
  // O teste não pede busca funcionando; o formulário só evita recarregar a página.
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <header className="header">
      <div className="header__topbar">
        <ul className="header__benefits">
          <li>
            <ShieldIcon size={16} />
            Compra <strong>100% segura</strong>
          </li>
          <li>
            <TruckIcon size={16} />
            <strong>Frete grátis</strong> acima de R$ 200
          </li>
          <li>
            <CardIcon size={16} />
            <strong>Parcele</strong> suas compras
          </li>
        </ul>
      </div>

      <div className="header__main">
        <a
          href="/"
          className="header__logo"
          aria-label="Econverse, página inicial"
        >
          <Logo />
        </a>

        <form className="header__search" role="search" onSubmit={handleSearch}>
          <label htmlFor="search" className="header__search-label">
            Buscar produtos
          </label>
          <input
            id="search"
            type="search"
            placeholder="O que você está buscando?"
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>

        <ul className="header__actions">
          <li>
            <a href="#" aria-label="Meus pedidos">
              <BoxIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Favoritos">
              <HeartIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Minha conta">
              <UserIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Carrinho">
              <CartIcon />
            </a>
          </li>
        </ul>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        <ul className="header__nav-list">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          ))}
          <li>
            <a href="#" className="header__nav-link--highlight">
              Ofertas do dia
            </a>
          </li>
          <li>
            <a href="#" className="header__nav-link--icon">
              <CrownIcon size={18} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
