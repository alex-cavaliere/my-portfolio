import '../css/style.css';
import logo from '../assets/logo_cavaliere.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const editNavbar = () => {
    const x = document.querySelector('nav')
    if(x.className === 'navbar'){
      x.className += ' responsive'
    }else{
      x.className = 'navbar'
    }
  }
  window.addEventListener('click', function (e){
    console.log(e.target)
    const x = document.querySelector('nav')
    if (!e.target.className.match('icon') && !e.target.className.match('fa-solid')){
      x.className = 'navbar'
    }
  })
  return (
    <header>
      <div className='title'>
        <img className='logo' src={logo} alt='Alessandro Cavaliere'/>
      </div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/my-portfolio'>Homepage</NavLink>
          <NavLink to='/info'>info </NavLink>
          <NavLink to='/contact'>contact</NavLink>
        </div>
        <span className='icon' onClick={editNavbar}><i className="fa-solid fa-bars"></i></span>
      </nav>
    </header>
  )
}

export default Header;
