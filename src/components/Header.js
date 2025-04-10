import '../css/style.css';
import logo from '../assets/logo_cavaliere.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const editNavbar = () => {
    const x = document.querySelector('nav')
    const y = document.getElementById('icon')
    if(x.className === 'navbar'){
      x.className += ' responsive'
      y.style.backgroundColor = '#051E44'
      y.style.color = 'white'
      y.style.transition = 'background-color 250ms ease-in-out, color 250ms ease-in-out'
      
    }else{
      x.className = 'navbar'
      y.style.backgroundColor = 'white'
      y.style.color = 'black'
      y.style.transition = 'background-color 250ms ease-in-out, color 250ms ease-in-out'
    }
  }
  const closeNavbar = () => {
    const x = document.querySelector('nav')
    const y = document.getElementById('icon')
    x.className = 'navbar'
    y.style.backgroundColor = 'white'
    y.style.color = 'black'
    y.style.transition = 'background-color 250ms ease-in-out, color 250ms ease-in-out'
  }
  return (
    <header>
      <div className='title'>
        <img className='logo' src={logo} alt='Alessandro Cavaliere'/>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' onClick={closeNavbar}>Homepage</NavLink>
          <NavLink to='/info' onClick={closeNavbar}>info </NavLink>
          <NavLink to='/contact' onClick={closeNavbar}>contact</NavLink>
        </div>
        <span id='icon' onClick={editNavbar}>
          <i className='line-1'></i>
          <i className='line-2'></i>
          <i className='line-3'></i>
        </span>
      </nav>
    </header>
  )
}

export default Header;
