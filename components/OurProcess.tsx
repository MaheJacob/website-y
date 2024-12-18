'use client'
import React from 'react'

const OurProcess = () => {
  return (
    <div className='my-12 md:px-14 px-4 max-w-screen-2xl mx-auto '>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
      <div className='lg:w-1/4'>
        <h1 className='text-4xl font-bold lg:w-1/2 mb-3 bg-clip-text text-transparent
      bg-gradient-to-b from-blu-l to
       bg-blu bg-opacity-50'>Our Process</h1>
        <p className='text-black text-lg mb-7'>Our process is custom tailored and proven 
            to be effective and convinient for both
            the Busuness and our Clients. </p>
      </div>
      {/* process cards */}
      <div className='w-full lg:w-3/4'>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8 '>
            <div className='bg-light-g rounded-[35px] h-96 shadow-3xl 
            p-8 items-center grid justify-center  hover:-translate-y-4
             transition-all duration-300 cusor-pointer '>
              <img src="/Images/meeting 2.jpg" alt="meeting" />
              <h5 className='text-2xl font-semibold text-baki px-5 text-center mt-5'>Meeting our client and requirements</h5>
            </div>

            <div className='bg-light-g rounded-[35px] h-96 shadow-3xl 
            p-8 items-center grid justify-center hover:-translate-y-4 
            transition-all duration-300 cursor-pointer
            md:mt-16'>
              <img src="/Images/research anali2.jpg" alt="research"/>
              <h5 className='text-2xl font-semibold text-baki px-5 text-center mt-5'>Research and Analysis</h5>
            </div>

            <div className='bg-light-g rounded-[35px] h-96 shadow-3xl 
            p-8 items-center grid justify-center  hover:-translate-y-4 
            transition-all duration-300 cursor-pointer'>
              <img src="/Images/pla3.jpg" alt="planning"  />
              <h5 className='text-2xl font-semibold text-baki px-5 text-center mt-5'>Strategy,Planing and Execusion</h5>
            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default OurProcess
