import Icon, { type IconProps } from './Icon'

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" />
    </Icon>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 21v-8h3l.5-3H14V8.5c0-.9.4-1.5 1.6-1.5h1.9V4.3C17 4.2 16 4 14.9 4 12.6 4 11 5.4 11 8v2H8v3h3v8" />
    </Icon>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="5" cy="5.5" r="0.6" />
      <path d="M5 10v9M10 19v-9" />
      <path d="M10 13.5c0-2 1.3-3.5 3.3-3.5s3.2 1.3 3.2 3.5V19" />
    </Icon>
  )
}
