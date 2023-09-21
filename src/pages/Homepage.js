import '../css/style.css';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

// fetch riuscito, gestire i dati di Card

function HomePage() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://alex-cavaliere.github.io/my-portfolio/data/data.json')
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
      <h1>HomePage</h1>
      <section id="experiences">
        <article>
          <h2>Mes Experience</h2>
          <div className='card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </article>
      </section>
      <section id="projets">
        <article>
          <h2>Mes Projets</h2>
          <div className='card-wrapper'>
            {data.projects && data.projects.map((project) => {
              return <a href={project.url} key={project.title} target='_blank' rel="noreferrer"><Card title={project.title} description={project.description} imgUrl={project.imgUrl} /></a>
            })}
          </div>
        </article>
      </section>
    </div>
  )
}

export default HomePage;
