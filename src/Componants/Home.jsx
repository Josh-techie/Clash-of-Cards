// Home.jsx

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './Home.css'; // Import your external CSS file
import slider1 from '../Slides/slide-1.jpg';
import slider2 from '../Slides/slide-2.jpg';

function Home() {
  const slides = [
    {
      url: slider1,
    },
    {
      url: slider2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const bgImage = 'Assets/bg.png';

  return (
    <div className="container-fluid d-flex align-items-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', height: '100vh' }}>
      {/* Left side with text */}
      <div className="w-100 p-4 text-container">
        <h1 className="display-title">BEAUTIFUL GAME <br /> INTENSE LEARNING</h1>
        <p className="lead-text">Welcome to Clash of Card Game, that’s easy to <br /> learn but impossible to put down!</p>

        <div className="container-buttons d-flex justify-content-center">
          <button className='btn btn-primary play-now'> PLAY NOW</button>
          <button className='btn learn-btn'> LEARN MORE</button>
        </div>
      </div>


      {/* Right side with slider */}
      <div className="here-container">

        <div className="slider-container">
          <img
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className='w-100 h-100 rounded-2xl slider-image'
          />

          {/* Left Arrow */}
          <div className='arrow-container left-arrow'>
            <BsChevronCompactLeft className='arrow-button' onClick={prevSlide} />
          </div>
          {/* Right Arrow */}
          <div className='arrow-container right-arrow'>
            <BsChevronCompactRight className='arrow-button' onClick={nextSlide} />
          </div>
          {/* Dots */}
          <div className='dots-container'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Uncomment the following lines to test the login and sign-up forms */}
      {/* <SignIn />
      <SignUp /> */}
    </div>
  );
}

export default Home;