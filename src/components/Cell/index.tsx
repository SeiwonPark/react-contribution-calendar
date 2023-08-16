import { useState, useRef, useEffect, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  themeProps: ThemeProps
  dataLevel: number
  style: CSSProperties
  children?: ReactNode
  dataTooltip?: string
}

export default function Cell({ children, style, dataTooltip, dataLevel, themeProps, ...otherProps }: CellProps) {
  const cellRef = useRef<HTMLTableCellElement>(null)
  const [tooltipOffset, setTooltipOffset] = useState<number>(-30)

  useEffect(() => {
    const handleMouseOver = () => {
      if (cellRef.current) {
        const totalLength = cellRef.current.parentNode?.children.length
        const cellIndex = cellRef.current.cellIndex

        if (totalLength) {
          let offset = -30
          if (cellIndex / totalLength > 0.5) {
            offset = Math.max(~~(cellRef.current.cellIndex * -200) / totalLength, -150)
          } else {
            offset = Math.min(~~(cellRef.current.cellIndex * -200) / totalLength, -30)
          }
          setTooltipOffset(offset)
        }
      }
    }

    if (cellRef.current) {
      cellRef.current.addEventListener('mouseover', handleMouseOver)
    }

    return () => {
      if (cellRef.current) {
        cellRef.current.removeEventListener('mouseover', handleMouseOver)
      }
    }
  }, [])

  return (
    <td
      ref={cellRef}
      className="calendar-cell top half-arrow"
      style={
        {
          ...style,
          backgroundColor: themeProps[`level${dataLevel}`],
          '--tooltip-offset': `${tooltipOffset}px`,
        } as React.CSSProperties
      }
      data-tooltip={dataTooltip}
      data-level={dataLevel}
      {...otherProps}
    >
      <span className="sr-only">{children}</span>
    </td>
  )
}
