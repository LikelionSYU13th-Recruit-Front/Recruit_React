import { Link } from 'react-scroll';
import './Header.css';
import logo13th from '../images/logo13th2.png';

function Header() {
  return (
    <div className="Header-Main">
      <div className="Header-Main-Left">
        <img src={logo13th} alt="logo13th" />
      </div>
      <div className="Header-Main-Right">
        <Link to="RecruitAbout" smooth={true} duration={500} className="Header-Main-Right-ABOUT">
          ABOUT
        </Link>
        <Link to="FAQ" smooth={true} duration={1800} className="Header-Main-Right-FAQ">
          FAQ
        </Link>
        <div className="Header-Main-Right-APPLY">13기 지원하기</div>
      </div>
    </div>
  );
}

export default Header;