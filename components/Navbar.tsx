'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AlignJustify, X } from 'lucide-react'
import DropDownMenu from './DropDownMenu'
import Link from 'next/link'





  interface NavbarProps {
    scrollToHome: () => void;
    scrollToAbout: () => void;
    scrollToOurProcess: () => void;
    scrollToServices: () => void;
  }

const Navbar:React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToAbout,
  scrollToOurProcess,
  scrollToServices,
}) => {


  const [isDropDownVisible, setIsDropDwonVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropDwonVisible(!isDropDownVisible)
  }
  const closeDropDown = () => {
    setIsDropDwonVisible(false)
  }
  return (
    <div >
     <div className='p-6 md:p-10 flex items-center justify-between z-50'>
    <div className='cursor-pointer ' >
        <img  src="/Images/social logo3.png" alt="s-logo" width={100} height={100} 
        className='w-10 h-10 md:w-14 md:h-14'/>
    </div>
    <div className='cursor-pointer hidden md:flex space-x-10 items-center
     text-slate-200 text-center bg-clip-text text-transparent
      bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 '>
        <div onClick={scrollToHome}className='hover:text-gray-50'>Home</div>
        <div onClick={scrollToAbout} className='hover:text-gray-50'>About</div>
        <div onClick={scrollToOurProcess} className='hover:text-gray-50'>Our Process</div>
        <div onClick={scrollToServices} className='hover:text-gray-50'>Services</div>
        
        <Link href={'/'} className='hover:text-gray-50'>Digital Products </Link>
        

  </div>
  <div> 
  
  </div>
  
    <div className='flex md:hidden'>
      {isDropDownVisible?(
        <div onClick={toggleDropDown}
        className='w-8 h-8 text-slate-100 cursor-pointer'>
          <X/>
          <DropDownMenu onClose={closeDropDown}/>
          </div>
      ):(
        <AlignJustify
        onClick={toggleDropDown}
        className='w-8 h-8 text-slate-100 cursor-pointer'/>
      )}
    </div>

    <div className='hidden md:flex '>
    <Link href={'/Contact'} 
    className="inline-flex h-12 animate-shimmer 
    items-center justify-center rounded-md border border-bd 
    bg-baki bg-[length:200%_100%] px-6 font-medium
     text-slate-100 transition-colors focus:outline-none focus:ring-2
      focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" >Get in Contact</Link>
        
    </div>

     </div>
    </div>
    
  )
}

export default Navbar



      
      