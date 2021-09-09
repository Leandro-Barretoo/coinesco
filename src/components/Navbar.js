import logo from '../assets/coinesco-logo.png';
import './Navbar.css';

const Navbar = () => (
  <div className="Nav">
    <div className="Logo-Container">
      <img className="Logo-Img" src={logo} alt="coinesco logo" />
    </div>
    <div className="Options-Container">
      <div className="Nav-Option Cart" />
      <div className="Nav-Option Profile" />
    </div>
  </div>
);

export default Navbar;
