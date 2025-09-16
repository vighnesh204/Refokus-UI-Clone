import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover='false', header, title}) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3>{header}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-5'>{title}</h1>
      </div>
      <div className='down w-full'>
        {
          start && (
          <>
          <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className='rounded-full py-2 px-4 mt-4 border-[1px] border-zinc-500'>Contact us</button>
          </>
        )
        }

       {
         para && (
          <p className='text-sm text-zinc-500 font-medium'> Explore what drives our team.</p>
        )   
       } 
      </div>
    </motion.div>
  )
}

export default Card