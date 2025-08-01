import React from 'react';
// import App from './App';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
// import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './Variables.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import CardDesc from './CardDesc';
import Price from './Price'
import Newsletter from './Newsletter';
import Features from './Features';

function App() {

  return (
    <>
        <Header />
        <Hero />
        <Features />
        <Testimonial />
        <CardDesc />
        <Newsletter />
        <Footer />
  
    </>
  )
}

export default App
