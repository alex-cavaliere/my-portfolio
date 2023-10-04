/* eslint-disable no-unused-vars */
import '../css/style.css'
import photo_1 from '../assets/images/screenshots/Screenshot(83).png'
import photo_2 from '../assets/images/screenshots/Screenshot(84).png'
import photo_3 from '../assets/images/screenshots/Screenshot(85).png'
import photo_4 from '../assets/images/screenshots/Screenshot(86).png'
import photo_5 from '../assets/images/screenshots/Screenshot(87).png'
import { useState } from 'react'

function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const title = props.title
    const description = props.description
    const imgUrl = props.imgUrl
    const url = props.url
    const index = props.idx
    //const pageUrl = props.url
    //console.log(imgUrl)
    //const imgUrl = props.imgUrl
    const showCard = () => {
        setIsOpen(!isOpen)
    }
    const descriptions = document.querySelectorAll('p')
    descriptions.forEach((description) => {
        if(!isOpen){
            descriptions[index].style.display = '-webkit-box'
        }else{
            descriptions[index].style.display =  'block'
        }
    })
    console.log(imgUrl)
    return(
        <div className='card'>
            <a href={url} target='_blank' rel="noreferrer">
                <h3>{title}</h3>
                <img src={imgUrl} alt='foto'/>
            </a>
            <p className={`description-${index} ${isOpen ? 'open' : 'closed'}`} onClick={(e) => showCard(e.target)}>{description}</p>
        </div>
    )
}

export default Card