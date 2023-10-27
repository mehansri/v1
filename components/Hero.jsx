'use client';

import React, { useRef } from 'react';


export default function Hero() {
  const container = useRef();
  return (
    <section className='section overflow-hidden'>
    <div className="container w-container" id='first div'>
      <div className="spacer-hero " id="spacer" ></div>
      <div ref={container} ></div>
      <div className="hero-grid-container" id="hero-grid-container">
        <div className="div-block-21 body" id="outer div">
          <h1 className="body welh1">
            Open the Door to Better Views with BetterView Solutions!
          </h1>
          {/* Add content here */}
          <p className='py-5 text-gray-500'>
            Discover a new era in windows and doors with BetterView Solutions. We go beyond the ordinary, redefining the experience of finding the perfect windows and doors for your home. Elevate your living space, embrace clarity, and open up to a world of possibilities with our innovative solutions.
          </p>

          <div className='hero-numbers-container' id="hero num contaienr">

            <div className='number-container'>  <p className='font-bold text-2xl text-gray-500'>
              20+ years experience
            </p> </div>

       
            <div className='number-container'>  <p className='font-bold text-2xl text-gray-500'>
              10000+ jobs completed 
            </p> </div>
            
            <div className='number-container'>  <p className='font-bold text-2xl text-gray-500'>
              99% customer satisfaction
            </p> </div>
            
            <div className='number-container'>  <p className=' font-bold text-2xl text-gray-500'>
              100% positive feedback 
            </p> </div>

          
          </div>
            {/* Buttons */}
            <div className="hero-buttons-container">
            <a href="/contact" class="hero-button-green w-button">contact us</a>
            <a href="/case-studies" class="hero-button-outline w-button">our services</a>
            </div>
        </div>

        <div className="hero-image-container ">
        <img
        src="https://drive.google.com/uc?export=view&id=1INC5b4K1aeovkKkTffTgWDx8JeRSzugA"
        className="hero-image img"
        />
        </div>
      </div>
    </div>
    </section>
  );
}
