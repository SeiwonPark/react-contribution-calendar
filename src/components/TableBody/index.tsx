import {
  parseInputData,
  createTheme,
  parseYearFromDateString,
  getDayArray,
  getRowAndColumnIndexFromDate,
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

  const { row: startRow, col: startCol } = getRowAndColumnIndexFromDate(startYear, start)
  const { row: endRow, col: endCol } = getRowAndColumnIndexFromDate(startYear, end)

  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayArray = getDayArray(start, end)

  const setColorByTheme = (inputTheme: string | ThemeProps) => {
    const themeProps = createTheme(inputTheme)
    return themeProps
  }

  const themeProps = setColorByTheme(theme)
  const parsedData = parseInputData(data)

  const isOutRangedCell = (rowIndex: number, colIndex: number): boolean => {
    return !dayArray[rowIndex][colIndex] || colIndex < startCol || colIndex > endCol
  }

  const isBoundaryCell = (rowIndex: number, colIndex: number): boolean => {
    return (colIndex === startCol && rowIndex < startRow) || (colIndex === endCol && rowIndex > endRow)
  }

  return (
    <tbody>
      {dates.map((date, rowIndex) => (
        <tr key={date}>
          <Label tabIndex={0} textColor={textColor} style={{ textAlign: 'inherit' }}>
            {date}
          </Label>
          {dayArray[rowIndex].map((day, colIndex) => {
            if (isOutRangedCell(rowIndex, colIndex)) {
              return <td style={{ padding: '0', display: 'none' }} key={colIndex}></td>
            }

            if (isBoundaryCell(rowIndex, colIndex)) {
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
            }

            const data = parsedData.get(day)

            return (
              <Cell
                key={colIndex}
                tabIndex={-1}
                style={{ width: '10px', height: '10px' }}
                dataLevel={data !== undefined ? data.level : 0}
                data-content={JSON.stringify(data?.data)}
                dataTooltip={day}
                themeProps={themeProps}
              />
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
