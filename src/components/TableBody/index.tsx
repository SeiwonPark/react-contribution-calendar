import { THEMES, ThemeProps } from '../../styles/colors'
import { getCurrentYear, getDateString, getDayArrayFromYear } from '../../utils'
import Cell from '../Cell'
import Label from '../Label'
import './index.css'

export default function TableBody() {
  const year = getCurrentYear()
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArrayFromYear(year)
  const themeName = 'pink'

  const setColorByTheme = (theme: LeveledColorProps) => {
    document.documentElement.style.setProperty('--color-bg-level-0', theme.level0)
    document.documentElement.style.setProperty('--color-bg-level-1', theme.level1)
    document.documentElement.style.setProperty('--color-bg-level-2', theme.level2)
    document.documentElement.style.setProperty('--color-bg-level-3', theme.level3)
    document.documentElement.style.setProperty('--color-bg-level-4', theme.level4)
  }
  setColorByTheme(THEMES[themeName])

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
                {getDateString(year, colIndex, day)}
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
