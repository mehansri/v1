'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

export default function Home() {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    const isSmallScreen = window.innerWidth <= 991;
    let endValue=null;
     endValue = isSmallScreen
      ? `+=${window.outerHeight / 1}`
      : `+=${window.outerHeight / 1.5}`;

      const isSmallerScreen = window.innerWidth <= 600;
  
       endValue = isSmallerScreen
        ? `+=${window.outerHeight / 0.7}`
        : `+=${window.outerHeight / 1.5}`;
    
  
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: endValue,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };
  

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
    })
    return letters;
  }

  return (
    <div className="hero-grid-container w-container">
      <div className="bodys container ">
        <h1 className=" welh1">
          Welcome
        </h1>
      </div>
      <div ref={body} className='bodys welcom-text'>
     
        {
          splitWords(phrase)
        }
       
      </div>


    </div>
  )
}