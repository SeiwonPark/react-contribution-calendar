import React from 'react'
import ReactDOM from 'react-dom/client'
import Table from './components/Table'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container">
      <Table />
    </div>
  </React.StrictMode>
)
