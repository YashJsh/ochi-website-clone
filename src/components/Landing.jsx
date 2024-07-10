import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full">
        <div className="textstructure font-['Founders Grotesk Text'] my-[8rem] px-12 ">
            {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index)=>{
                    return <div key = {index} className="Margins flex items-center text-[8vw] h-[6.3vw] tracking-tighter leading-[6rem] font-bold">
                            {index === 1 && <motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease: [0.76,0,0.24,1], duration: 1}} className="w-[10vw] h-[6.3vw]  flex m-1 py-1">
                                <img className="rounded-xl " src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt="" /></motion.div>}
                             <h1>{item}</h1>
                            </div>
                })}
        </div>
        <div className="border-t-2 flex text-center justify-between font-['Neue_Montreal'] font-normal px-[3rem] py-[1rem]">
            <h5>For public and private companies</h5>
            <h5>From the first pitch to IPO</h5>
    
            <div className="flex items-center gap-2 bg-#F1F1F1 ">
                <button className="button uppercase border-[1px] border-zinc-700 rounded-2xl py-1 px-2 text-sm">Start The Project</button>
                <span className='button border-[1px] flex items-center pl-1 border-zinc-700 rounded-full w-8 h-8 text-lg'><GoArrowUpRight /></span>
            </div>
            
        </div>
    </div>
  )
}
