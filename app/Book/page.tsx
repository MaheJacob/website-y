"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/Navbar";

const Book = () => {
  return (
    <>
      <div  className="w-full md:items center md:justify-center overflow-hidden antialiased bg-baki/[0.96] relative bg-black">
        <Navbar
          scrollToHome={() => {}}
          scrollToAbout={() => {}}
          scrollToOurProcess={() => {}}
          scrollToServices={() => {}}
        
        />
        <div className="text-4xl pb-5 md:text-6xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Book a meeting
        </div>

        <InlineWidget url="https://calendly.com/mahezj45/book-a-call" />
      </div>
    </>
  );
};


export default Book
