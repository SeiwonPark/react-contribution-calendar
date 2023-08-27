import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      textColor="#1f2328"
      startsOnSunday={true}
      includeBoundary={true}
      cx={10}
      cy={10}
      cr={2}
      theme="grass"
      onCellClick={(_, data) => console.log(data)}
      style={{}}
    />
  </React.StrictMode>
)
