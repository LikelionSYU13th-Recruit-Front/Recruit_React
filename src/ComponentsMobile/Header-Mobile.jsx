import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import './Header-Mobile.css';
import logo13th from '../images/logo13th2.png';

function HeaderMobile() {
  
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/Join');
  }

  return (
    <div className="Header-Main-Mobile">
      <div className="Header-Main-Left-Mobile">
        <img src={logo13th} alt="logo13th" />
      </div>
      <div className="Header-Main-Right-Mobile">
        <Link to="RecruitAboutMobile" smooth={true} duration={500} className="Header-Main-Right-ABOUT-Mobile">
          ABOUT
        </Link>
        <Link to="FAQ" smooth={true} duration={1800} className="Header-Main-Right-FAQ-Mobile">
          FAQ
        </Link>
        <div className="Header-Main-Right-APPLY-Mobile" onClick={handleJoin}>13기 지원하기</div>
      </div>
    </div>
  );
}

export default HeaderMobile;