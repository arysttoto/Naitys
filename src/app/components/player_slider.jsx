'use client'

import React, { useState, useRef } from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { redirect } from 'next/navigation'


export default function PlayerSlider() {
    const sliderPlayerRef = useRef(null);
    const sliderEnemyRef = useRef(null);
  
    const photos = [
      {
        id: 1,
        src: 'saburov.png',
        alt: 'saburov',
      },
      {
        id: 2,
        src: 'kairat.png',
        alt: 'kairat',
      },
      {
        id: 3,
        src: 'skrip.png',
        alt: 'skrip',
      },
    ];
  
    const ArrowRight = ({ onClick }) => (
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={onClick}
      >
        &gt;
      </button>
    );
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <ArrowRight />,
    };
  
    const [currentPlayer, setCurrentPlayer] = useState(photos[0]);
    const [currentEnemy, setCurrentEnemy] = useState(photos[0]);
    const [error, setError] = useState('') 

    const handlePlayerChange = () => {
      const currentPlayerIndex = sliderPlayerRef.current.innerSlider.state.currentSlide;
      setCurrentPlayer(photos[currentPlayerIndex]);
    };
  
    const handleEnemyChange = () => {
      const currentEnemyIndex = sliderEnemyRef.current.innerSlider.state.currentSlide;
      setCurrentEnemy(photos[currentEnemyIndex]);
    };
    const redirect_user = () => {
      if (currentPlayer.alt !== currentEnemy.alt) { 
        redirect("/play/naitys/");  
      } else {  
        setError("Choose different players");  
     } 
    }

    return (
      <>
        <br />
        <h1 className="text-center text-4xl">Выберите игрока</h1>
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="w-1/2 mx-auto relative">
            <Slider ref={sliderPlayerRef} {...settings} afterChange={handlePlayerChange}>
              {photos.map((photo) => (
                <div key={photo.id}>
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <br />
        <br />
        <h1 className="text-center text-4xl">Выберите противника</h1>
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="w-1/2 mx-auto relative">
            <Slider ref={sliderEnemyRef} {...settings} afterChange={handleEnemyChange}>
              {photos.map((photo) => (
                <div key={photo.id}>
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded mt-10"
            onClick={redirect_user} 
          >
            Start Naitys
          </button> 
          <p className='text-red-600'>{ error }</p>
        </div>
        <br />
      </>
    );
} 