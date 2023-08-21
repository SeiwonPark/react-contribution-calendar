import { CSSProperties } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import { getCurrentYear, getDateString } from '../../utils'
import './index.css'

interface TableProps {
  data?: InputData[]
  start?: string
  end?: string
  textColor?: string
  startsOnSunday?: boolean
  includeBoundary?: boolean
  cx?: number
  cy?: number
  cr?: number
  theme?: string | ThemeProps
  onCellClick?: MouseEventHandler
  style?: CSSProperties
}

export default function Table({
  data = [],
  start = getDateString(getCurrentYear(), 0, 1),
  end = getDateString(getCurrentYear(), 11, 31),
  textColor = '#000',
  startsOnSunday = true,
  includeBoundary = true,
  cx = 10,
  cy = 10,
  cr = 2,
  theme = 'grass',
  onCellClick = () => {},
  style,
}: TableProps) {
  return (
    <div className="container" style={style}>
      <table>
        <TableHead start={start} end={end} textColor={textColor} startsOnSunday={startsOnSunday} cy={cy} />
        <TableBody
          data={data}
          start={start}
          end={end}
          textColor={textColor}
          startsOnSunday={startsOnSunday}
          includeBoundary={includeBoundary}
          cx={cx}
          cy={cy}
          cr={cr}
          theme={theme}
          onClick={onCellClick}
        />
      </table>
    </div>
  )
}
