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
        <NavLink to='/'>Homepage</NavLink>
        <NavLink to='/info'>info </NavLink>
        <NavLink to='/contact'>contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;
