import {
  getDateTooltip,
  getDateStringFromIndex,
  parseInputData,
  createTheme,
  getDayArray,
  parseYearFromDateString,
  getDateDifference,
} from '../../utils'
import Cell from '../Cell'
import Label from '../Label'
import './index.css'

interface TableBodyProps {
  data: InputData[]
  start: string
  end: string
  textColor: string
  theme: string | ThemeProps
}

export default function TableBody({ data, start, end, textColor, theme }: TableBodyProps) {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArray(startYear, endYear)

  const setColorByTheme = (inputTheme: string | ThemeProps) => {
    const themeProps = createTheme(inputTheme)
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
            const year = startYear + ~~(colIndex / 53)
            const dateColIndex = colIndex % 53
            const dateString = getDateStringFromIndex(year, dateColIndex, day)
            const data = parsedData.get(dateString)

            // // FIXME: seems like expensive to get all differences
            // if (
            //   (dateString < start || dateString > end) &&
            //   (getDateDifference(dateString, start) < 7 || getDateDifference(dateString, end) < 7)
            // ) {
            //   return (
            //     <Cell
            //       key={colIndex}
            //       tabIndex={-1}
            //       themeProps={setColorByTheme('empty')}
            //       dataLevel={0}
            //       style={{ width: '10px', height: '10px' }}
            //     />
            //   )
            // } else if (dateString < start || dateString > end) {
            //   return <td key={colIndex}></td>
            // }
            if (dateString < start || dateString > end) {
              return <td key={colIndex}></td>
            }

            return (
              <Cell
                key={colIndex}
                tabIndex={-1}
                style={{ width: '10px', height: '10px' }}
                dataLevel={data !== undefined ? data.level : 0}
                data-content={JSON.stringify(data?.data)}
                dataTooltip={getDateTooltip(year, dateColIndex, day)}
                themeProps={themeProps}
              />
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
