import { THEMES } from '../../styles/colors'
import { getCurrentYear, getDateTooltip, getDayArrayFromYear, getDateString, parseInputData } from '../../utils'
import Cell from '../Cell'
import Label from '../Label'
import './index.css'

interface TableBodyProps {
  data?: InputData[]
  theme?: string | ThemeProps
}

export default function TableBody({ data = [], theme = 'grass' }: TableBodyProps) {
  const year = getCurrentYear()
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArrayFromYear(year)

  const setColorByTheme = (inputTheme: string | ThemeProps) => {
    const themeProps = typeof inputTheme === 'string' ? THEMES[inputTheme] : inputTheme

    if (themeProps) {
      document.documentElement.style.setProperty('--color-bg-level-0', themeProps.level0)
      document.documentElement.style.setProperty('--color-bg-level-1', themeProps.level1)
      document.documentElement.style.setProperty('--color-bg-level-2', themeProps.level2)
      document.documentElement.style.setProperty('--color-bg-level-3', themeProps.level3)
      document.documentElement.style.setProperty('--color-bg-level-4', themeProps.level4)
    } else {
      console.error('Invalid theme name')
    }
  }
  setColorByTheme(theme)

  const parsedData = parseInputData(data)

  return (
    <tbody>
      {dates.map((date, rowIndex) => (
        <tr key={date}>
          <Label tabIndex={0} style={{ textAlign: 'inherit' }}>
            {date}
          </Label>
          {dayArray[rowIndex].map((day, colIndex) => {
            const dateString = getDateString(year, colIndex, day)
            const data = parsedData.get(dateString)
            return day ? (
              <Cell
                key={colIndex}
                tabIndex={-1}
                style={{ width: '10px', height: '10px' }}
                data-level={data !== undefined ? data.level : 0}
                data-content={JSON.stringify(data?.data)}
                dataTooltip={getDateTooltip(year, colIndex, day)}
              />
            ) : (
              <td key={colIndex}></td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
