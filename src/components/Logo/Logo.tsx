import './Logo.scss'

// O tamanho vem do font-size de quem usa o logo: todas as medidas
// internas estão em "em" e acompanham esse valor.
function Logo() {
  return (
    <span className="logo">
      <span className="logo__mark">ec</span>onverse
    </span>
  )
}

export default Logo
