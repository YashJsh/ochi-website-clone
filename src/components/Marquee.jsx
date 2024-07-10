import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className=" w-full bg-[#004D43] font-['Founders Grotesk Text'] py-[5rem] text-[#FFFFFF] rounded-t-2xl overflow-hidden">
        <div className="border-t-[1px] border-b-[1px] border-zinc-50 flex whitespace-nowrap overflow-hidden ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[22vw] leading-none font-bold tracking-tighter -my-[3vw] mr-4 w-fit ">WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="text-[22vw] leading-none font-bold tracking-tighter -my-[3vw]  w-fit">WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee