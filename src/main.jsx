import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QNA from './DATEandQNA/QNA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QNA />
  </StrictMode>,
)
