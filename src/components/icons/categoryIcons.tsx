import Icon, { type IconProps } from './Icon'

// Versões simplificadas, em traço, das ilustrações de categoria do layout.

export function TechnologyIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 14H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v3" />
      <path d="M8 14v4M5.5 18H11" />
      <rect x="15" y="9" width="7" height="12" rx="1.5" />
      <path d="M18 18h1" />
    </Icon>
  )
}

export function SupermarketIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 9l2-5h14l2 5" />
      <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      <path d="M4 11.5V20h16v-8.5" />
      <path d="M14 20v-5h4v5M6.5 14h4v3h-4z" />
    </Icon>
  )
}

export function DrinksIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 2h3v4l1.5 2.5V21h-6V8.5L8 6z" />
      <path d="M6.5 12h6v4h-6" />
      <path d="M15 13h5l-.6 8h-3.8z" />
    </Icon>
  )
}

export function ToolsIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M10.5 5.5l3-3 6 6-3 3z" />
      <path d="M12.8 9.2l-9.3 9.3a1.3 1.3 0 0 0 1.9 1.9l9.3-9.3" />
      <path d="M14 16l2-2 5.3 5.3a1.4 1.4 0 0 1-2 2z" />
      <path d="M15 15L6.5 6.5 4 4" />
    </Icon>
  )
}

export function HealthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12.5 11s-4-2.4-4.8-4.9C7.2 4.4 8.4 3 9.9 3c1.1 0 2 .6 2.6 1.6.6-1 1.5-1.6 2.6-1.6 1.5 0 2.7 1.4 2.2 3.1-.8 2.5-4.8 4.9-4.8 4.9z" />
      <path d="M2 14h3v7H2z" />
      <path d="M5 15h4.5c.8 0 1.5.6 1.5 1.3s-.7 1.2-1.5 1.2H7.5" />
      <path d="M10.5 16.7l5.3-2.6c.8-.4 1.7 0 1.9.7.2.6-.1 1.2-.7 1.5l-5.5 3.2c-.6.3-1.3.4-2 .3L5 19" />
    </Icon>
  )
}

export function FitnessIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="14" cy="3.5" r="1.5" />
      <path d="M13.5 7l-2 5 3 2v3.5M11.5 12l-3 1M13.5 7l3 2.5 2-1" />
      <path d="M5 21V9h3M3 21h15l2-2" />
    </Icon>
  )
}

export function FashionIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 3v3l-2 4 1 1-3 10h12l-3-10 1-1-2-4V3" />
      <path d="M9 6c1 1 3 1 4 0M8 11h6" />
      <path d="M18 3h3.5L23 5l-3.2 3.5L16.5 5z" />
    </Icon>
  )
}
