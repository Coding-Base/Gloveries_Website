// src/App.js
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS after the loader
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart'
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 3000);
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-jost bg-gray-50" >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          
          <main >
            <Hero />
            <Services />
            <About />
            <Features />
            <Testimonials />
            <Team />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

