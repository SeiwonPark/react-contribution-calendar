import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContributionCalendar } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContributionCalendar data={[]} />
  </React.StrictMode>
)
