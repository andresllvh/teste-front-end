export interface NewsletterErrors {
  name?: string
  email?: string
  terms?: string
}

// Formato básico: algo@algo.algo, sem espaços.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateNewsletter(
  name: string,
  email: string,
  acceptedTerms: boolean,
): NewsletterErrors {
  const errors: NewsletterErrors = {}

  if (name.trim().length < 2) errors.name = 'Digite seu nome.'
  if (!EMAIL_PATTERN.test(email.trim()))
    errors.email = 'Digite um e-mail válido.'
  if (!acceptedTerms) errors.terms = 'Aceite os termos para continuar.'

  return errors
}
