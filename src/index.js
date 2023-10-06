import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
          <Route exact path='/my-portfolio/' element={<HomePage />}/>
          <Route exact path='/my-portfolio/info' element={<Bio />}/>
          <Route exact path='/my-portfolio/contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
