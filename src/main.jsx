import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Components/RecruitMain.css';


//pc
// 준
import Header from './Components/Header.jsx';
import RecruitMain from './Components/RecruitMain.jsx'
import RecruitAbout from './Components/RecruitAbout.jsx';
import RecruitTrackIntro from './Components/RecruitTrackIntro.jsx';

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

// 모바일 광
import ActivityMobile from './ComponentsMobile/Activity-Mobile.jsx';
import BabyLionMobile from './ComponentsMobile/BabyLion-Mobile.jsx';
import ReviewMobile from './ComponentsMobile/Review-Mobile.jsx';



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
        <Route path="/" element={<div id='subroot'><BabyLionPage /><ReviewPage /><Schedule /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot'><QNA /><Footer /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)

//모바일
ReactDOM.createRoot(document.getElementById('root-mobile')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot-mobile'><HeaderMobile /><RecruitMainMobile /><RecruitAboutMobile /><RecruitTrackIntroMobile /><ActivityMobile/></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root2-mobile')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot-mobile'><BabyLionMobile /><ReviewMobile /></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('root3-mobile')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div id='subroot-mobile'></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
)