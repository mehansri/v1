'use client';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Welcome from '@/components/welcome';
import Scrollimg from '@/components/scrollimg';
import Testies from '@/components/testies';
import Footer from '@/components/footer';
import Blog from '@/components/blog';

import NavLink from '@/components/Navlink';
import Image from 'next/image'
import logo from './pics/Untitled-1-Recovered.png';
import { useEffect } from 'react';
export default function Home() {




  return (
    
    <body>
      
      
      {/* Use the Head component to manage the head section */}
      <header>
        <title>Betterview</title>
      </header>
      
      {/* Include your navigation component */}
      <Nav/>

      <Hero/>

      <Welcome/>


      <Scrollimg/>

      <Testies/>
      <Blog/>

      <Footer/>


      {/* Content for the body */}
      <div>
      </div>
    </body>
    
  );
}