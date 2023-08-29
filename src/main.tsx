import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      daysOfTheWeek={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      textColor="#1f2328"
      startsOnSunday={true}
      includeBoundary={true}
      cx={10}
      cy={10}
      cr={2}
      theme="grass"
      onCellClick={(_, data) => console.log(data)}
      scroll={false}
      style={{}}
    />
  </React.StrictMode>
)
