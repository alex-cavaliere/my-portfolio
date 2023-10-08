import '../css/style.css';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

// fetch riuscito, gestire i dati di Card

function HomePage() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/my-portfolio/data/data.json')
    .then(res => {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      setData(data)
    })
    .catch(err => console.log(err))
  },[])
    console.log(data)
  return (
    <div id="home">
      <section id="experiences">
        <article>
          <h1>Mes Experience</h1>
          <div className='card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </article>
      </section>
      <section id="projets">
        <article>
          <h2>Mes Projets</h2>
          <div className='card-wrapper'>
            {data.projects && data.projects.map((project, index) => {
              return <Card key={index} idx={index} title={project.title} description={project.description} url={project.url} imgUrl={project.imgUrl} />
            })}
          </div>
        </article>
      </section>
    </div>
  )
}

export default HomePage;
