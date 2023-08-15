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
}

export default function Table({
  data = [],
  textColor = '#fff',
  theme = 'grass',
  start = getDateString(getCurrentYear(), 0, 1),
  end = getDateString(getCurrentYear(), 11, 31),
}: TableProps) {
  return (
    <div className="container">
      <table>
        <TableHead textColor={textColor} start={start} end={end} />
        <TableBody data={data} textColor={textColor} theme={theme} start={start} end={end} />
      </table>
    </div>
  )
}
