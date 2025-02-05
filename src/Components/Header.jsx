import './Header.css';
import logo13th from '../images/13thlogo.png';

function Header() {
  return (
    <div className="Header-Main">
        <div className="Header-Main-Left">
            <img src={logo13th} alt="logo13th" />
        </div>
        <div className="Header-Main-Right">
            <div className="Header-Main-Right-ABOUT">ABOUT</div>
            <div className="Header-Main-Right-FAQ">FAQ</div>
            <div className="Header-Main-Right-APPLY">13기 지원하기</div>
        </div>
    </div>
  );
}

export default Header;