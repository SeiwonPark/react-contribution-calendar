import { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  style?: CSSProperties
}

export default function Cell({ children, style, ...otherProps }: CellProps) {
  return (
    <td className="calendar-cell top half-arrow" style={style} {...otherProps} data-tooltip={children}>
      <span className="sr-only">{children}</span>
    </td>
  )
}
