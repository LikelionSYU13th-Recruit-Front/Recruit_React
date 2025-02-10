import { Link } from 'react-scroll';
import './Header-Mobile.css';
import logo13th from '../images/logo13th2.png';

function HeaderMobile() {
  return (
    <div className="Header-Main-Mobile">
      <div className="Header-Main-Left-Mobile">
        <img src={logo13th} alt="logo13th" />
      </div>
      <div className="Header-Main-Right-Mobile">
        <Link to="RecruitAbout" smooth={true} duration={500} className="Header-Main-Right-ABOUT-Mobile">
          ABOUT
        </Link>
        <Link to="FAQ" smooth={true} duration={1800} className="Header-Main-Right-FAQ-Mobile">
          FAQ
        </Link>
        <div className="Header-Main-Right-APPLY-Mobile">13기 지원하기</div>
      </div>
    </div>
  );
}

export default HeaderMobile;