// Ícones em SVG simples, desenhados com traço para herdar a cor do texto
// (stroke="currentColor"). São decorativos: o texto ou o aria-label do
// link ao redor é que informa o significado.

import type { ReactNode } from 'react'

export interface IconProps {
  size?: number
  strokeWidth?: number
}

function Icon({
  size = 24,
  strokeWidth = 1.6,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export default Icon
