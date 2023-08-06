import TableHead from '../TableHead'
import TableBody from '../TableBody'
import './index.css'

interface TableProps {
  data?: InputData[]
  textColor?: string
  theme?: string | ThemeProps
}

export default function Table({ data = [], textColor = '#000', theme = 'grass' }: TableProps) {
  return (
    <div className="container">
      <table>
        <TableHead textColor={textColor} />
        <TableBody data={data} textColor={textColor} theme={theme} />
      </table>
    </div>
  )
}
