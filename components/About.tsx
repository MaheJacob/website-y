'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const About = () => {
  return (
    <div className='md:px-14 p-4 mx-auto space-y-10 bg-h-bg1'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
    
        <div className='md:w-1/2'>
        <img src="/Images/about2.png" alt="" />

        </div>
        {/* about content */}
        <div className='md:w-2/5'>
        <div className='md:text-5xl text-3xl font-bold text-baki  leading-normal '>
        <h2 className='mb-5'>About Us</h2>
        <p className='text-black text-lg mb-7'>Our team is a collective of creative minds and 
        strategic thinkers,dedicated to navigating the 
        everevolving landscape of social media.</p>
        <p className='text-black text-lg mb-7'>Whether you're a startup, looking to establish your digital
        footprint or an established brand aiming to revitalize your
        online strategy and widen your market, we are here to partner with you on your journey.</p>
        <Link href={'/Contact'}  className='cusor pointer flex items-center 
justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-baki text-lg '>Get Started</Link>
        </div>
        </div>
      </div>
      {/* second part */}
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        <div className='md:w-1/2'>
        <img src="/Images/what we do.jpg" alt="what we do" className='border'/>
        </div>
        <div className='md:w-2/5'>
        <div className='md:text-5xl text-3xl font-bold text-baki  leading-normal '>
        <h2 className='mb-5'>What We Do</h2>
        <p className='text-black text-lg mb-7'> Our social media solutions cater to any size business. 
          Our style options are designed to maximize 
          your ability to communicate with your target audience.</p>
        <p className='text-black text-lg mb-7'>Customizing a business website that compliments your 
          business profile is instrumental in the successful delivery of your 
          brand and service message through the use of innovative venues that generate traffic and sales.</p>
        <p className='text-black text-lg mb-7'>We design and build customized websites that compliment 
          and serve your business needs from e-commerce to a service-oriented platform.
        We design landing pages with a call-to-action to generate leads.
         We create an up to date tailored website that will capture an optimal traffic flow
          </p>
        <Link href={'/Contact'}  className='cusor pointer flex items-center 
justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white bg-baki text-lg '>Get Started</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
