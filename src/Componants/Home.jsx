import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './Home.css'; // Make sure to import your custom styles
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
        <h1 className="display-4 font-weight-bold mb-4">Your Title Here</h1>
        <p className="lead">Your text content goes here.</p>
      </div>

      {/* Right side with slider */}
      <div className="w-70 pr-5 pb-5 position-relative">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className='w-100 h-100 rounded-2xl bg-center bg-cover duration-500 slider-image'
        />

        {/* Left Arrow */}
        <div className='position-absolute top-50% start-0 translate-middle-y text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className='position-absolute top-50% end-0 translate-middle-y text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        {/* Dots */}
        <div className='d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer mx-1 ${slideIndex === currentIndex ? 'text-white' : 'text-black'}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      {/* Uncomment the following lines to test the login and sign-up forms */}
      {/* <SignIn />
      <SignUp /> */}
    </div>
  );
}

export default Home;
