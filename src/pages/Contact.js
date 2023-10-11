import '../css/style.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Contact() {
  return (
    <div>
      <div id='contacts'>
        <h1>Contacts</h1>
        <div className='contacts-container'>
          <ul className='contacts-items'>
            <li className='item'><span className="fi fi-fr"></span><a href='tel:+330767688211'>tel:+33 0767688211</a></li>
            <li className='item'><span className="fi fi-it"></span><a href='tel:+393477728839'>tel:+39 3477728839</a></li>
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
