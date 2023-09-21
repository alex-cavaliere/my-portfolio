import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function showCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 500 * index); // Ritardo di 500ms tra ciascun div
  });
}

// Aggiungi un evento di caricamento per chiamare la funzione
window.addEventListener('load', showCards);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/info' element={<Bio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
