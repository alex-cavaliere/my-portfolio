import '../css/style.css'
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
                <div className='background-image' style={{ backgroundImage: `url('${imgUrl}')`}}>
                </div>  
            </a>
            <p className={`description-${index} ${isOpen ? 'open' : 'closed'}`} onClick={(e) => showCard(e.target)}>{description}</p>
        </div>
    )
}

export default Card