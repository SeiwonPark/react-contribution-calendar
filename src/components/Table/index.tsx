import { CSSProperties } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import { getCurrentYear, getDateString } from '../../utils'
import { customError, ERROR } from '../../exceptions'
import './index.css'
import Description from '../Description'

interface TableProps {
  data?: InputData[]
  start?: string
  end?: string
  daysOfTheWeek?: string[]
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
  daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  textColor = '#1f2328',
  startsOnSunday = true,
  includeBoundary = true,
  cx = 10,
  cy = 10,
  cr = 2,
  theme = 'grass',
  onCellClick = () => {},
  style,
}: TableProps) {
  const padding = `0 ${cx + 70}px 0 ${cx + 10}px`

  if (daysOfTheWeek.length !== 7) {
    throw customError(ERROR.Number, 'The length of the `daysOfTheWeek` should be exact 7.')
  }

  return (
    <div className="container" style={style}>
      <div className="calendar" style={{ padding: padding }}>
        <table>
          <TableHead start={start} end={end} textColor={textColor} startsOnSunday={startsOnSunday} cy={cy} />
          <TableBody
            data={data}
            start={start}
            end={end}
            daysOfTheWeek={daysOfTheWeek}
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
      <Description textColor={textColor} cx={cx} cy={cy} theme={theme} />
    </div>
  )
}
