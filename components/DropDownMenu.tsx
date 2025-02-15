import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

interface DropDownMenuProps{
    onClose: () => void;
}


const DropDownMenu:React.FC<DropDownMenuProps> = ({onClose,}) => {
  return (
    <motion.div className='w-screen h-screen 
    bg-gradient-to-b from
     bg-neutral-50 to-neutral-400
     bg-opacity-50 text-slate-300 p-6 space-y-4 absolute
     top-28 left-0 right-0 z-50 rounded-t-3xl'
     initial={{opacity:0, y:'-80%'}}
     animate={{opacity:1, y:0}}
     exit={{opacity:0, y:'-100%'}}
     transition={{duration:0.5}}>
      <div className='flex-col space-y-10 grid'>
    
      <Link href={'/Contact'}  className=' text-black text-2xl'>Get in Contact</Link>
      <Link href={'/Book'}  className=' text-black text-2xl'>Book a Meeting</Link>
      <Link href={'/'}  className=' text-black text-2xl'>Digital Product</Link>
      <Link href={'/'}  className=' text-black text-2xl'>Home</Link>
      </div>
      
    </motion.div>
  )
}

export default DropDownMenu
