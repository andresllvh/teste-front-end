import logo from '../../assets/logo.svg'

interface LogoProps {
  width: number
  // Vazio quando o link ao redor já tem nome (aria-label).
  alt?: string
}

// O SVG do layout mantém a proporção: basta informar a largura.
function Logo({ width, alt = '' }: LogoProps) {
  return (
    <img
      className="logo"
      src={logo}
      alt={alt}
      width={width}
      height={Math.round(width * (41.3 / 139))}
    />
  )
}

export default Logo
