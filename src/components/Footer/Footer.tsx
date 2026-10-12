import facebookIcon from '../../assets/icons/facebook.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import Logo from '../Logo/Logo'
import './Footer.scss'

const LINK_GROUPS = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
]

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: instagramIcon },
  { name: 'Facebook', icon: facebookIcon },
  { name: 'LinkedIn', icon: linkedinIcon },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <a
            href="/"
            className="footer__logo"
            aria-label="Econverse, página inicial"
          >
            <Logo width={139} />
          </a>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="footer__social">
            {SOCIAL_LINKS.map(({ name, icon }) => (
              <li key={name}>
                <a href="#" aria-label={`Econverse no ${name}`}>
                  <img src={icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer__nav" aria-label="Links do rodapé">
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="footer__group">
              <h2 className="footer__group-title">{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <p className="footer__bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </footer>
  )
}

export default Footer
