'use client';
import React, { memo, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

const CarouselCard = ({ items }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // For phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="p-4">
            <div
              className={`border rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'bg-water' : 'bg-aquaSpring'}`}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-2 w-full max-w-12 md:w-auto">
                <img
                  src={item.icon}
                  alt=""
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '100px' }} // Adjust maxWidth as needed
                />
              </div>
              {/* Text Content */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Sliding Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white text-black rounded-full z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white text-black rounded-full z-10"
      >
        <FaChevronRight />
      </button>
    </div>

  );
};

export default memo(CarouselCard);
