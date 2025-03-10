/* eslint-disable no-unused-vars */
import '../css/style.css';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../components/Carousel';
import LoadingSpinner from '../components/Loader';
import photo_1 from '../assets/images/screenshots/Screenshot(83).png'
import photo_2 from '../assets/images/screenshots/Screenshot(84).png'
import photo_3 from '../assets/images/screenshots/Screenshot(85).png'
import photo_4 from '../assets/images/screenshots/Screenshot(86).png'
import photo_5 from '../assets/images/screenshots/Screenshot(87).png'
import photo_6 from '../assets/images/screenshots/Screenshot(88).png'

// fetch riuscito, gestire i dati di Card

function HomePage() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    const preloadImages = () => {
      const imageUrls = [
        photo_1,
        photo_2,
        photo_3,
        photo_4,
        photo_5, 
        photo_6
      ];
  
      let imagesLoadedCount = 0;
  
  
      imageUrls.forEach((imageUrl) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = imageUrl
        document.head.appendChild(link)
        
        link.onload = () => {
          imagesLoadedCount++;
          if (imagesLoadedCount === imageUrls.length) {
            // Tutte le immagini sono state precaricate
            setImagesLoaded(true);
          }
        };
      });
    };
    fetch('/data/data.json')
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      setData(data)
    })
    .catch(err => console.log(err))
    setIsLoading(false)
    preloadImages()
  },[imagesLoaded])
  return (
    <>
    {!isLoading && data && imagesLoaded ? (<div id="home">
        <section id="experiences">
          <article>
            <h1>Mon Portfolio</h1>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
              {data.projects && data.projects.map((project, index) => {
                return <CarouselItem key={`carousel-${index}`} url={project.url} imgUrl={project.imgUrl} description={project.description}/>
              })}
            </Carousel>
          </article>
        </section>
        <section id="projets">
          <article>
            <h2>Mes Projets</h2>
            <div className='card-wrapper'>
              {data.projects && data.projects.map((project, index) => {
                return <Card key={`card-${index}`} idx={index} title={project.title} description={project.description} url={project.url} imgUrl={project.imgUrl} />
              })}
            </div>
          </article>
        </section>
      </div>) : (<LoadingSpinner/>)}
    </>
  )
}

export default HomePage;
