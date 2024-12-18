'use client'
import About from "@/components/About";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import SliderOne from "@/components/SliderOne";
import { Spotlight } from "@/components/Ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {RecoilRoot} from 'recoil';



export default function Home() {
 const HomeRef =useRef<HTMLDivElement>(null);
 const AboutRef =useRef<HTMLDivElement>(null);
 const OurProcessRef =useRef<HTMLDivElement>(null);
 const ServicesRef =useRef<HTMLDivElement>(null);

 const scrollToHome = () => {
  HomeRef.current?.scrollIntoView({
    behavior: "smooth",
  
  });
};



 const scrollToAbout = () => {
  AboutRef.current?.scrollIntoView({behavior:'smooth'});
 }
 const scrollToOurProcess = () => {
  OurProcessRef.current?.scrollIntoView({behavior:'smooth'});
 }

 const scrollToServices = () => {
  ServicesRef.current?.scrollIntoView({behavior:'smooth'});
 }
  return (
    <div className="w-full md:items center md:justify-center overflow-hidden antialiased bg-grid-white/[0.02] relative">
    <div className="w-full md:items center md:justify-center bg-baki
     antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <div ref={HomeRef}>
     <Navbar
     scrollToHome={scrollToHome}
     scrollToAbout={scrollToAbout}
     scrollToOurProcess={scrollToOurProcess}
     scrollToServices={scrollToServices}
     />
    
     <Spotlight 
     className="hidden md:flex md:left-80 md:top-80 bg-h-bg1"
     fill="white"
     
     />
     <img src="/Images/backg18.jpg" alt="bakci" className="w-full h-full object-cover absolute" />
     <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-32 px-2">
      <div className="text-7xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent
      bg-gradient-to-b from-neutral-50 to
       bg-neutral-300 bg-opacity-50">
      Your Social Expert
     </div>
    
    <p className="text-center text-neutral-300 mx-auto px-4 max-w-lg mt-4">
A social media marketing team that
specialize in crafting compelling digital narratives that elevate
your brand's presence, engage your audience, and drive results.
</p>

<Link href={'/Book'}  className='cusor pointer flex items-center 
justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-baki2 '>Book a Meeting</Link>

 
   </div>

    </div>
  
   </div>
   <SliderOne/>
  <div ref={OurProcessRef}>
    <OurProcess/>
    </div>
    <div ref={AboutRef}>
    <About/>
    </div>
    <div ref={ServicesRef}>
    <Services/>
    </div>
  
    <Footer/>
   
    </div>
    
  );
}
