
function CarouselItem(props){
    const imgUrl = props.imgUrl
    const description = props.description
    const url = props.url
    const redirectToExternalURL = () => {
        window.open(url, '_blank')
    };
    return(
        <div onClick={() => redirectToExternalURL()} className='carousel-p'>
            <img src={imgUrl} alt='carousel-foto'></img>
            <p className='legend'>{description}</p>
        </div>
    )
}

export default CarouselItem