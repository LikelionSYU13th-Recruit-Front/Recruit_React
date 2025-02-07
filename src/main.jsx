import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ActivityPage from './Components/ActivityPage'
import BabyLionPage from './Components/BabyLionPage'
import ReviewPage from './Components/ReviewPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
        <Route path="/Activity" element={<ActivityPage />} />
        <Route path="/BabyLion" element={<BabyLionPage />} />
      </Routes>
    </Router>
  </StrictMode>
)
