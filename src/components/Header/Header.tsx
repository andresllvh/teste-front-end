import type { FormEvent } from 'react'
import creditCardIcon from '../../assets/icons/credit-card.svg'
import crownIcon from '../../assets/icons/crown-simple.svg'
import heartIcon from '../../assets/icons/heart.svg'
import searchIcon from '../../assets/icons/magnifying-glass.svg'
import packageIcon from '../../assets/icons/package.svg'
import shieldIcon from '../../assets/icons/shield-check.svg'
import cartIcon from '../../assets/icons/shopping-cart.svg'
import truckIcon from '../../assets/icons/truck.svg'
import userIcon from '../../assets/icons/user-circle.svg'
import Logo from '../Logo/Logo'
import './Header.scss'

const CATEGORIES = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
]

const ACTIONS = [
  { label: 'Meus pedidos', icon: packageIcon, modifier: 'package' },
  { label: 'Favoritos', icon: heartIcon },
  { label: 'Minha conta', icon: userIcon },
  { label: 'Carrinho', icon: cartIcon },
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
            <img src={shieldIcon} alt="" width={20} height={20} />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </li>
          <li>
            <img src={truckIcon} alt="" width={20} height={20} />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </li>
          <li>
            <img src={creditCardIcon} alt="" width={20} height={20} />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </li>
        </ul>
      </div>

      <div className="header__main">
        <a
          href="/"
          className="header__logo"
          aria-label="Econverse, página inicial"
        >
          <Logo width={139} />
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
            <img src={searchIcon} alt="" width={28} height={28} />
          </button>
        </form>

        <ul className="header__actions">
          {ACTIONS.map((action) => (
            <li key={action.label}>
              <a href="#" aria-label={action.label}>
                <img
                  className={
                    action.modifier
                      ? `header__action-icon--${action.modifier}`
                      : undefined
                  }
                  src={action.icon}
                  alt=""
                  width={32}
                  height={32}
                />
              </a>
            </li>
          ))}
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
            <a href="#">
              <img src={crownIcon} alt="" width={20} height={20} />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
