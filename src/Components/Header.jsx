import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Header.css';
import logo13th from '../images/logo13th2.png';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace('#', ''), {
        smooth: true,
        duration: 1500,
      });
    }
  }, [location]);

  const handleMain = () => {
    navigate('/');
  };

  const handleJoin = () => {
    navigate('/Join');
  };

  const handleScrollTo = (section) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 1500 });
    }
  };

  return (
    <div className="Header-Main">
      <div className="Header-Main-Left">
        <img src={logo13th} alt="logo13th" onClick={handleMain} />
      </div>
      <div className="Header-Main-Right">
        <div
          className="Header-Main-Right-ABOUT"
          onClick={() => handleScrollTo('RecruitAbout')}
        >
          ABOUT
        </div>
        <div
          className="Header-Main-Right-FAQ"
          onClick={() => handleScrollTo('FAQ')}
        >
          FAQ
        </div>
        <div className="Header-Main-Right-APPLY" onClick={handleJoin}>
          13기 지원하기
        </div>
      </div>
    </div>
  );
}

export default Header;