import React from 'react';
// import App from './App';

// import { BrowserRouter, Router, Routes } from 'react-router-dom';
// import './Variables.css';
import Header from './Header';
// import Hero from './Hero';
import Footer from './Footer';
// import CardDesc from './CardDesc';
// import Price from './Price'
// import Newsletter from './Newsletter';
// import Features from './Features';
// import Testimonial from './Testimonial';

import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Download from './Download';

function App() {

  return (
    <>
     <Router>
      <Header />
      
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/download' element={<Download/>}></Route>
      </Routes>

      <Footer />



     </Router>

    </>
       

    
  )
}

export default App
