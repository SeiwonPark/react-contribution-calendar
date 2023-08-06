import { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  themeProps: ThemeProps
  dataLevel: number
  children?: ReactNode
  style?: CSSProperties
  dataTooltip?: string
}

export default function Cell({ children, style, dataTooltip, dataLevel, themeProps, ...otherProps }: CellProps) {
  return (
    <td
      className="calendar-cell top half-arrow"
      style={{ ...style, backgroundColor: themeProps[`level${dataLevel}`] }}
      data-tooltip={dataTooltip}
      data-level={dataLevel}
      {...otherProps}
    >
      <span className="sr-only">{children}</span>
    </td>
  )
}
