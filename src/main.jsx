import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/RecruitMain.css';

//pc
// 준
import AnimatedPath from './Components/AnimatedPath.jsx';
import Header from './Components/Header.jsx';
import RecruitMain from './Components/RecruitMain.jsx'
import RecruitAbout from './Components/RecruitAbout.jsx';
import RecruitTrackIntro from './Components/RecruitTrackIntro.jsx';
import PostExample from './Components/postExample.jsx';
import Complete from './Components/Complete.jsx';
// 광
import ActivityPage from './Components/ActivityPage'
import BabyLionPage from './Components/BabyLionPage'
import ReviewPage from './Components/ReviewPage';

// 희
import Schedule from './Components/Schedule.jsx';
import QNA from './Components/QNA.jsx';
import Footer from './Components/footer.jsx';

//모바일
import HeaderMobile from './ComponentsMobile/Header-Mobile.jsx';
import RecruitMainMobile from './ComponentsMobile/RecruitMain-Mobile.jsx';
import RecruitAboutMobile from './ComponentsMobile/RecruitAbout-Mobile.jsx';
import RecruitTrackIntroMobile from './ComponentsMobile/RecruitTrackIntro-Mobile.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot'><Header /><AnimatedPath /><RecruitMain /><RecruitAbout /><RecruitTrackIntro /><ActivityPage /><BabyLionPage /><ReviewPage /><Schedule /><QNA /><Footer /></div>} />
        <Route path="/Join" element={<div id='subroot'><Header /><PostExample /></div>} />
        <Route path="/Complete" element={<div id='subroot'><Header /><Complete /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
//모바일
ReactDOM.createRoot(document.getElementById('root-mobile')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot-mobile'><HeaderMobile /><RecruitMainMobile /><RecruitAboutMobile /><RecruitTrackIntroMobile /></div>} />
        <Route path="/Join" element={<div id='subroot-mobile'><HeaderMobile /><PostExample /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)