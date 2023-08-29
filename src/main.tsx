import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'
import { THEMES } from './styles/colors'

const generateRandomData = () => {
  const data: InputData[] = []

  for (let i = 0; i < 500; i++) {
    const year = 2023
    const month = ~~(Math.random() * 12) + 1
    const day = ~~(Math.random() * 28) + 1
    const level = ~~(Math.random() * 5)

    const monthStr = month < 10 ? `0${month}` : `${month}`
    const dayStr = day < 10 ? `0${day}` : `${day}`

    const _date: string = `${year}-${monthStr}-${dayStr}`

    data.push({
      [_date]: {
        level,
        data: {},
      },
    })
  }

  return data
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
      data={generateRandomData()}
      textColor="#1f2328"
      startsOnSunday={true}
      includeBoundary={true}
      cx={12}
      cy={12}
      cr={2}
      theme="emoji_negative"
      onCellClick={(_, data) => console.log(data)}
      scroll={false}
      style={{}}
    />
  </React.StrictMode>
)
