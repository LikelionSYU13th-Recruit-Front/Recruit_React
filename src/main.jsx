import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/RecruitMain.css';

import Header from './Components/Header.jsx';
import RecruitMain from './Components/RecruitMain.jsx'
import RecruitAbout from './Components/RecruitAbout.jsx';
import RecruitTrackIntro from './Components/RecruitTrackIntro.jsx';

// 광렬이형
import ActivityPage from './Components/ActivityPage'
import BabyLionPage from './Components/BabyLionPage'
import ReviewPage from './Components/ReviewPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot'><Header /><RecruitMain /><RecruitAbout /><RecruitTrackIntro /><ActivityPage /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot'><BabyLionPage /><ReviewPage /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
