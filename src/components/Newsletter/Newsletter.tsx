import { useState, type FormEvent } from 'react'
import {
  validateNewsletter,
  type NewsletterErrors,
} from '../../utils/validateNewsletter'
import './Newsletter.scss'

function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [errors, setErrors] = useState<NewsletterErrors>({})
  const [subscribed, setSubscribed] = useState(false)

  // O teste não tem API de cadastro: o envio só valida os campos
  // e mostra a confirmação na tela.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formErrors = validateNewsletter(name, email, acceptedTerms)
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      setSubscribed(true)
      setName('')
      setEmail('')
      setAcceptedTerms(false)
    }
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__content">
        <div className="newsletter__intro">
          <h2 id="newsletter-title" className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__text">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        {subscribed ? (
          <p className="newsletter__success" role="status">
            Inscrição realizada! Em breve você receberá nossas novidades.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <div className="newsletter__field">
              <label htmlFor="newsletter-name" className="newsletter__label">
                Nome
              </label>
              <input
                id="newsletter-name"
                type="text"
                autoComplete="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? 'newsletter-name-error' : undefined
                }
              />
              {errors.name && (
                <span id="newsletter-name-error" className="newsletter__error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="newsletter__field">
              <label htmlFor="newsletter-email" className="newsletter__label">
                E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'newsletter-email-error' : undefined
                }
              />
              {errors.email && (
                <span id="newsletter-email-error" className="newsletter__error">
                  {errors.email}
                </span>
              )}
            </div>

            <button type="submit" className="newsletter__button">
              Inscrever
            </button>

            <div className="newsletter__terms">
              <label>
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) => setAcceptedTerms(event.target.checked)}
                  aria-invalid={Boolean(errors.terms)}
                  aria-describedby={
                    errors.terms ? 'newsletter-terms-error' : undefined
                  }
                />
                Aceito os termos e condições
              </label>
              {errors.terms && (
                <span id="newsletter-terms-error" className="newsletter__error">
                  {errors.terms}
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
