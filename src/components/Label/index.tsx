import { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface LabelProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  textColor: string
  style?: CSSProperties
  colSpan?: number
}

export default function Label({ children, textColor, style, colSpan, ...otherProps }: LabelProps) {
  return (
    <td className="calendar-label" style={style} colSpan={colSpan} {...otherProps}>
      <span className="sr-only">{children}</span>
      <span className="calendar-label-text" aria-hidden="true" style={{ color: textColor }}>
        {children}
      </span>
    </td>
  )
}
