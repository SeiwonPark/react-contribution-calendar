import TableHead from '../TableHead'
import TableBody from '../TableBody'
import './index.css'

interface TableProps {
  data?: InputData[]
}

export default function Table({ data = [] }: TableProps) {
  return (
    <div className="container">
      <table>
        <TableHead />
        <TableBody data={data} />
      </table>
    </div>
  )
}
