import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/RecruitMain.css';

import Header from './Components/Header.jsx';
import RecruitMain from './Components/RecruitMain.jsx'
import RecruitAbout from './Components/RecruitAbout.jsx';
import RecruitTrackIntro from './Components/RecruitTrackIntro.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot'><Header /><RecruitMain /><RecruitAbout /><RecruitTrackIntro /></div>} />

      </Routes>
    </Router>
  </React.StrictMode>
)
