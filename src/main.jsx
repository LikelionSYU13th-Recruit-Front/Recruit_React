import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QNA from './ScheduleQNA/QNA.JSX'
import Schedule from './ScheduleQNA/Schedule.jsx'
import Footer from "./ScheduleQNA/Footer.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Schedule />
    <QNA />
    <Footer />
  </StrictMode>,
)
