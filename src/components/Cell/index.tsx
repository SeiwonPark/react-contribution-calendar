import { useState, useRef, useEffect, ReactNode, CSSProperties, HTMLAttributes } from 'react'
import './index.css'

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  themeProps: ThemeProps
  dataLevel: number
  style: CSSProperties
  children?: ReactNode
  dataTooltip?: string
  onClick?: MouseEventHandler
}

export default function Cell({ children, style, dataTooltip, dataLevel, themeProps, ...otherProps }: CellProps) {
  const cellRef = useRef<HTMLTableCellElement>(null)
  const [tooltipOffset, setTooltipOffset] = useState<number>(-10)

  const getVisibleChildren = (parent: Node | null) => {
    if (!parent) return 0

    let count = 0
    parent.childNodes.forEach((node: ChildNode) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const style = window.getComputedStyle(node as Element)
        if (style.display !== 'none') {
          count++
        }
      }
    })

    return count
  }

  const getVisibleCellIndex = (cell: HTMLTableCellElement | null) => {
    if (!cell || !cell.parentNode) return -1

    const allCells: HTMLElement[] = Array.from(cell.parentNode.childNodes) as HTMLElement[]

    let visibleIndex = 0

    for (let i = 0; i < cell.cellIndex; i++) {
      if (allCells[i].style.display !== 'none') {
        visibleIndex++
      }
    }

    return visibleIndex
  }

  useEffect(() => {
    const handleMouseOver = () => {
      if (cellRef.current) {
        const totalLength = getVisibleChildren(cellRef.current?.parentNode)
        const cellIndex = getVisibleCellIndex(cellRef.current)

        if (totalLength) {
          let offset = -10
          const ratio = cellIndex / totalLength

          if (ratio > 0.9) {
            offset = Math.max(~~(cellRef.current.cellIndex * -150) / totalLength, -160)
          } else if (ratio > 0.8) {
            offset = Math.max(~~(cellRef.current.cellIndex * -130) / totalLength, -130)
          } else if (ratio > 0.66) {
            offset = Math.max(~~(cellRef.current.cellIndex * -110) / totalLength, -120)
          } else if (ratio > 0.5) {
            offset = Math.max(~~(cellRef.current.cellIndex * -90) / totalLength, -110)
          } else if (ratio > 0.33) {
            offset = Math.max(~~(cellRef.current.cellIndex * -40) / totalLength, -90)
          } else if (ratio > 0.2) {
            offset = Math.min(~~(cellRef.current.cellIndex * -15) / totalLength, -40)
          } else {
            offset = Math.min(~~(cellRef.current.cellIndex * -7) / totalLength, -10)
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
