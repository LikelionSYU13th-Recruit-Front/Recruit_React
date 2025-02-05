import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RecruitMain from './Components/RecruitMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecruitMain />
  </StrictMode>,
)
