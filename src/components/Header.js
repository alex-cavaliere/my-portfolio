import '../css/style.css';
import logo from '../assets/logo_cavaliere.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='title'>
        <img className='logo' src={logo} alt='Alessandro Cavaliere'/>
      </div>
      <nav>
        <NavLink to='/my-portfolio/homepage'>Homepage</NavLink>
        <NavLink to='/my-portfolio/info'>info </NavLink>
        <NavLink to='/my-portfolio/contact'>contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;
