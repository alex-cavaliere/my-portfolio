import '../css/style.css';
import { Link } from 'react-router-dom';
import {ReactComponent as LinkedinLogo} from '../assets/linkedin.svg'
import {ReactComponent as GitHubLogo} from '../assets/github.svg'
import {ReactComponent as Email} from '../assets/envelope-open-text-solid.svg'

function Footer() {
  return (
    <footer>
      <Link to='https://www.linkedin.com/in/alessandro-cavaliere-337882211/' target='_blank'>
        <LinkedinLogo title='Linked In'/>
      </Link>
      <Link to='https://github.com/alex-cavaliere' target='_blank'>
        <GitHubLogo title='Git Hub'/>
      </Link>
      <Link to='mailto:alexcavaliere517@gmail.com'>
        <Email title='envoyer un e-mail'/>
      </Link>
    </footer>
  )
}

export default Footer;
