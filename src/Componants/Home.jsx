import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './Home.css'; // Make sure to import your custom styles
import slider1 from '../Slides/slide-1.jpg';
import slider2 from '../Slides/slide-2.jpg';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
      <div className="w-25 p-4">
        <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
        <p className="text-lg">Your text content goes here.</p>
      </div>

      {/* Right side with slider */}
      <div className="w-75 relative">
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          className='w-100 h-100 rounded-2xl bg-center bg-cover duration-500'
        />

        {/* Left Arrow */}
        <div className='absolute top-50% -translate-y-50% left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
<div className='absolute top-50% -translate-y-50% right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2 absolute right-0 left-0 mx-auto'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
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
