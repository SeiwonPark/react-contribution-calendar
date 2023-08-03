import { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  style?: CSSProperties
}

export default function Cell({ children, style, ...otherProps }: CellProps) {
  return (
    <td className="calendar-cell" style={style} {...otherProps}>
      <span className="sr-only">{children}</span>
    </td>
  )
}
