import './PartnerBanners.scss'

const BANNERS = [
  { id: 'parceiros-1', title: 'Parceiros' },
  { id: 'parceiros-2', title: 'Parceiros' },
]

function PartnerBanners() {
  return (
    <section className="partner-banners" aria-label="Parceiros">
      {BANNERS.map((banner) => (
        <article key={banner.id} className="partner-banners__banner">
          <h2 className="partner-banners__title">{banner.title}</h2>
          <p className="partner-banners__text">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <a href="#" className="partner-banners__button">
            Confira
          </a>
        </article>
      ))}
    </section>
  )
}

export default PartnerBanners
