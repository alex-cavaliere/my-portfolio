import '../css/style.css'
import provaImg from '../assets/img.jpg'

function Card(props) {
    const title = props.title
    const description = props.description
    const imgUrl = props.imgUrl
    //const pageUrl = props.url
    console.log(imgUrl)
    //const imgUrl = props.imgUrl
    return(
        <div className='card'>
            <h3>{title}</h3>
            <img src={provaImg} alt='foto'/>
            <p>{description}</p>
        </div>
    )
}

export default Card