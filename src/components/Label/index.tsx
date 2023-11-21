import { ReactNode, CSSProperties, HTMLAttributes } from 'react'
import styles from './index.module.css'

interface LabelProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode
  textColor: string
  style?: CSSProperties
  colSpan?: number
  hide?: boolean
}

export default function Label({ children, textColor, style, colSpan, hide, ...otherProps }: LabelProps) {
  return (
    <td className={styles.calendarLabel} style={style} colSpan={colSpan} {...otherProps}>
      {hide ? undefined : (
        <span className={styles.calendarLabelText} aria-hidden="true" style={{ color: textColor }}>
          {children}
        </span>
      )}
    </td>
  )
}
