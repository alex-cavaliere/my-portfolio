import '../css/style.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Contact() {
  return (
    <div>
      <div id='contacts'>
        <h1>Contacts</h1>
        <div className='contacts-container'>
          <ul className='contacts-items'>
            <li className='item'><span class="fi fi-fr"></span>tel:+33 0767688211</li>
            <li className='item'><span class="fi fi-it"></span>tel:+39 3477728839</li>
          </ul>
          <p className='item-email'>
            <a href='mailto:alexcavaliere517@gmail.com'>alexcavaliere517@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
