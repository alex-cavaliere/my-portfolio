import '../css/style.css';
import logo from '../assets/logo_cavaliere.png';
import { NavLink } from 'react-router-dom';

window.addEventListener('click', function (e){
  const x = document.querySelector('nav')
  if (x.className.match('responsive') && !e.target.className.match('fa-solid')){
    x.classList.remove('responsive')
  }
})

function Header() {
  const editNavbar = () => {
    const x = document.querySelector('nav')
    if(x.className === 'navbar'){
      x.className += ' responsive'
    }else{
      x.className = 'navbar'
    }
  }
  return (
    <header>
      <div className='title'>
        <img className='logo' src={logo} alt='Alessandro Cavaliere'/>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/'>Homepage</NavLink>
          <NavLink to='/info'>info </NavLink>
          <NavLink to='/contact'>contact</NavLink>
        </div>
        <span className='icon' onClick={editNavbar}><i className="fa-solid fa-bars"></i></span>
      </nav>
    </header>
  )
}

export default Header;
