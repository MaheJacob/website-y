'use client'
import React from 'react'
import { CardHoverEffectDemo } from './snippets/card-hover-effect-snippets'

const Services = () => {
  return (
    <div className='max-w-5xl mx-auto py-20'>
     <div>
     <h1 className='text-6xl text-bold pb-5 md:text-5xl px-6 text-center bg-clip-text text-transparent
      bg-gradient-to-b from-baki to
       bg-blu bg-opacity-50 pt-2'>Our Services</h1>
     </div>
     <CardHoverEffectDemo/>
    </div>
  )
}

export default Services
