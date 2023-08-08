import {
  getDateTooltip,
  getDateStringFromIndex,
  parseInputData,
  createTheme,
  getDayArray,
  parseYearFromDateString,
  getColIndex,
  parseDayFromDateString,
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
  const startDay = parseDayFromDateString(start)
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArray(startYear, endYear)
  const startColIndex = getColIndex(start, startYear, endYear)
  const endColIndex = getColIndex(end, startYear, endYear)

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

            if (dateString < start) {
              if (colIndex === startColIndex) {
                return (
                  <td
                    key={colIndex}
                    style={{
                      padding: 0,
                      outline: '1px solid rgba(27, 31, 35, 0.06)',
                      borderRadius: '2px',
                      outlineOffset: '-1px',
                      shapeRendering: 'geometricPrecision',
                    }}
                  ></td>
                )
              } else if (dateColIndex > startColIndex && day > startDay) {
                return (
                  <td
                    key={colIndex}
                    style={{
                      padding: 0,
                      outline: '1px solid rgba(27, 31, 35, 0.06)',
                      borderRadius: '2px',
                      outlineOffset: '-1px',
                      shapeRendering: 'geometricPrecision',
                    }}
                  ></td>
                )
              } else {
                return <td key={colIndex} style={{ padding: 0, display: 'none' }}></td>
              }
            } else if (dateString > end) {
              if (colIndex !== endColIndex) {
                return (
                  <td
                    key={colIndex}
                    style={{
                      padding: 0,
                      outline: '1px solid rgba(27, 31, 35, 0.06)',
                      borderRadius: '2px',
                      outlineOffset: '-1px',
                      shapeRendering: 'geometricPrecision',
                    }}
                  ></td>
                )
              } else {
                return <td key={colIndex} style={{ padding: 0, display: 'none' }}></td>
              }
            }

            return day ? (
              <Cell
                key={colIndex}
                tabIndex={-1}
                style={{ width: '10px', height: '10px' }}
                dataLevel={data !== undefined ? data.level : 0}
                data-content={JSON.stringify(data?.data)}
                dataTooltip={getDateTooltip(year, dateColIndex, day)}
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
