import '../css/style.css'
import provaImg from '../assets/img.jpg'
import { useState } from 'react'

function Card(props) {
    const [isOpen, setIsOpen] = useState(false)
    const title = props.title
    const description = props.description
    const imgUrl = props.imgUrl
    const url = props.url
    //const pageUrl = props.url
    console.log(imgUrl)
    //const imgUrl = props.imgUrl
    const showCard = () => {
        setIsOpen(!isOpen)
    }
    const descriptions = document.querySelectorAll('p')
    descriptions.forEach((description, index) => {
        console.log(index)
        if(!isOpen){
            description.style.display = '-webkit-box'
        }else{
            description.style.display = 'block'
        }
    })
    return(
        <div className='card'>
            <a href={url} target='_blank' rel="noreferrer">
                <h3>{title}</h3>
                <img src={provaImg} alt='foto'/>
            </a>
            <p className={`description-${title} ${isOpen ? 'open' : 'closed'}`} onClick={(e) => showCard(e.target)}>{description}</p>
        </div>
    )
}

export default Card