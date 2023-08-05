import TableHead from '../TableHead'
import TableBody from '../TableBody'
import './index.css'

interface TableProps {
  data?: InputData[]
  theme?: string | ThemeProps
}

export default function Table({ data = [], theme = 'grass' }: TableProps) {
  return (
    <div className="container">
      <table>
        <TableHead />
        <TableBody data={data} theme={theme} />
      </table>
    </div>
  )
}
