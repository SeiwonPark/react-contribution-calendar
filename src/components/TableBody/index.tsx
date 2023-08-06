import {
  getCurrentYear,
  getDateTooltip,
  getDayArrayFromYear,
  getDateString,
  parseInputData,
  createTheme,
} from '../../utils'
import Cell from '../Cell'
import Label from '../Label'
import './index.css'

interface TableBodyProps {
  data: InputData[]
  textColor: string
  theme: string | ThemeProps
}

export default function TableBody({ data, textColor, theme }: TableBodyProps) {
  const year = getCurrentYear()
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArrayFromYear(year)

  const setColorByTheme = (inputTheme: string | ThemeProps) => {
    const themeProps = createTheme(inputTheme)
    if (!themeProps) {
      console.error('Invalid theme name')
    }
    return themeProps
  }

  const themeProps = setColorByTheme(theme)
  const parsedData = parseInputData(data)

  return (
    <tbody>
      {dates.map((date, rowIndex) => (
        <tr key={date}>
          <Label tabIndex={0} textColor={textColor} style={{ textAlign: 'inherit' }}>
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
                dataLevel={data !== undefined ? data.level : 0}
                data-content={JSON.stringify(data?.data)}
                dataTooltip={getDateTooltip(year, colIndex, day)}
                themeProps={themeProps}
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
