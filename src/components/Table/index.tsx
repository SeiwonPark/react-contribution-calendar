import { CSSProperties } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import { getCurrentYear, getDateString } from '../../utils'
import './index.css'

interface TableProps {
  data?: InputData[]
  textColor?: string
  theme?: string | ThemeProps
  start?: string
  end?: string
  includeBoundary?: boolean
  cx?: number
  cy?: number
  cr?: number
  onCellClick?: MouseEventHandler
  style?: CSSProperties
}

export default function Table({
  data = [],
  textColor = '#000',
  theme = 'grass',
  start = getDateString(getCurrentYear(), 0, 1),
  end = getDateString(getCurrentYear(), 11, 31),
  includeBoundary = true,
  cx = 10,
  cy = 10,
  cr = 2,
  onCellClick = () => {},
  style,
}: TableProps) {
  return (
    <div className="container" style={style}>
      <table>
        <TableHead textColor={textColor} start={start} end={end} />
        <TableBody
          data={data}
          textColor={textColor}
          theme={theme}
          start={start}
          end={end}
          includeBoundary={includeBoundary}
          cx={cx}
          cy={cy}
          cr={cr}
          onClick={onCellClick}
        />
      </table>
    </div>
  )
}
