import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar
      data={[]}
      textColor="#000"
      theme="grass"
      cx={10}
      cy={10}
      cr={2}
      onCellClick={(_, data) => console.log(data)}
    />
  </React.StrictMode>
)
