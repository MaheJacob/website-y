'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import {useMediaQuery} from 'react-responsive';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
    const isMediumScreen = useMediaQuery({minWidth:768, maxWidth: 1023});
    const isSmallScreen = useMediaQuery({maxWidth:767});

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        className:'w-full mx-auto cursor-pointer '
    };

    if(isMediumScreen){
        settings.slidesToShow = 1.67
    } else if(isSmallScreen){
     settings.slidesToShow = 1
    }
  return (
    <div className=''>
       <h1 className='text-5xl pb-5 md:text-5xl px-6 text-center bg-clip-text text-transparent
      bg-gradient-to-b from-baki5 to
       bg-baki bg-opacity-50 pt-2'>Our Clients</h1>
     <Slider {...settings} className=''>
        
        <>
        <div className='rounded-md px-2 md:p-10 aspect-ratio-3/2 object-contain'>
        <img src="/Images/soove.png" alt="soove logo" 
         height={150} width={150} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md pt-5 px-2 md:p-10 '>
        <img src="/Images/intersouq-logo.png" alt="intersouq" 
         height={20} width={150} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md px-2 md:p-10'>
        <img src="/Images/lash logo.png" alt="lash logo" 
         height={150} width={150} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md px-2 md:p-10'>
        <img src="/Images/kids logo.png" alt="kids logo" 
         height={150} width={150} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md px-2 md:p-10'>
        <img src="/Images/sivana logo.png" alt="sivana logo" 
         height={80} width={80} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md px-2 md:p-10'>
        <img src="/Images/heartland2 logo.png" alt="heartland logo" 
         height={150} width={150} 
         className='rounded 2xl '/>
        </div>
        </>
        <>
        <div className='rounded-md px-2 md:p-10'>
        <img src="/Images/Brandwebify Logo.png" alt="Brandwebify logo" 
         height={150} width={150} 
         className='rounded 2xl '/>
        </div>
        </>

     </Slider>
    </div>
  )
}

export default SliderOne
