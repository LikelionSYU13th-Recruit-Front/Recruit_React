import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header-Mobile.css';
import logo13th from '../images/logo13th2.png';

function HeaderMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRecruiting, setIsRecruiting] = useState(false);
  const [isBeforeRecruit, setIsBeforeRecruit] = useState(false);

  useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.replace('#', ''), {
        smooth: true,
        duration: 1500,
      });
    }
  }, [location]);

  useEffect(() => {
    const now = new Date();
    const startDate = new Date('2025-02-27T00:00:00');
    const endDate = new Date('2025-03-12T18:00:00');

    setIsRecruiting(now >= startDate && now <= endDate);
    setIsBeforeRecruit(now < startDate);
  }, []);

  const handleMain = () => {
    navigate('/');
  };

  const handleJoin = () => {
    navigate('/Join');
  };

  const handleCantJoin = () => {
    alert("모집 기간이 아닙니다.")
  }

  const handleScrollTo = (section) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 1500 });
    }
  };

  return (
    <div className="Header-Main-Mobile">
      <div className="Header-Main-Left-Mobile">
        <img src={logo13th} alt="logo13th" onClick={handleMain} />
      </div>
      <div className="Header-Main-Right-Mobile">
        <div
          className="Header-Main-Right-ABOUT-Mobile"
          onClick={() => handleScrollTo('RecruitAboutMobile')}
        >
          ABOUT
        </div>
        <div
          className="Header-Main-Right-FAQ-Mobile"
          onClick={() => handleScrollTo('FAQ')}
        >
          FAQ
        </div>
        <div 
          className="Header-Main-Right-APPLY-Mobile"
          onClick={isRecruiting ? handleJoin : handleCantJoin}
        >
          {isBeforeRecruit ? '02.27 모집 시작' : isRecruiting ? '13기 지원하기' : '13기 모집 마감'}
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
