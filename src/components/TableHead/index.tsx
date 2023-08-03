import Label from '../Label'
import { getColumnSpans, getCurrentYear } from '../../utils'
import './index.css'

export default function TableHead() {
  const year = getCurrentYear()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const colSpans = getColumnSpans(year)

  return (
    <thead>
      <tr>
        <Label style={{ width: '40px' }} colSpan={1}>
          {' '}
        </Label>
        {months.map((month, index) => (
          <Label key={month} colSpan={colSpans[index]}>
            {month}
          </Label>
        ))}
      </tr>
    </thead>
  )
}
