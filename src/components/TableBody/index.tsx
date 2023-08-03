import { getCurrentYear, getDayArrayFromYear } from '../../utils'
import Cell from '../Cell'
import Label from '../Label'
import './index.css'

export default function TableBody() {
  const year = getCurrentYear()
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArrayFromYear(year)

  return (
    <tbody>
      {dates.map((date, rowIndex) => (
        <tr key={date}>
          <Label tabIndex={0} style={{ textAlign: 'inherit' }}>
            {date}
          </Label>
          {dayArray[rowIndex].map((day, colIndex) =>
            day ? (
              <Cell
                key={colIndex}
                tabIndex={-1}
                style={{ width: '10px', height: '10px' }}
                data-level={~~(Math.random() * 5)} // FIXME: from actual data
              >
                {day}
              </Cell>
            ) : (
              <td key={colIndex}></td>
            )
          )}
        </tr>
      ))}
    </tbody>
  )
}
