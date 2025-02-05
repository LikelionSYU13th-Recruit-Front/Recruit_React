import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ActivityPage from './RecruitPage2/ActivityPage'
import BabyLionPage from './RecruitPage2/BabyLionPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BabyLionPage />} />
        <Route path="/Activity" element={<ActivityPage />} />
      </Routes>
    </Router>
  </StrictMode>
)
