import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.42" className="z-3 w-full bg-[#CDEA67] font-['Neue_Montreal'] rounded-t-2xl pb-[5vh]">



      <div className="border-b-[0.5px] border-zinc-700 px-[3vw] py-[8vh]">
        <h4 className="w-[75vw] text-[3.5vw] leading-tight">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h4>
      </div>


      <div className="px-[3vw] py-[2vh] font-[400] text-md flex justify-between border-b-[0.5px] border-zinc-700 pb-[10vh]">
        <h4 className="pr-[10vw]">What you can expect:</h4>
        <div className="w-[20vw] flex flex-col gap-10 ml-[10vw]">
          <h4>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h4>
          <h4>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h4>
        </div>
        <div className="pt-[10vh] mr-[10vw] ">
            <h4>S:</h4>
            <h4 className="underline decoration-1 underline-offset-4">Instagram</h4>
            <h4 className="underline decoration-1 underline-offset-4" >Behance</h4>
            <h4 className="underline decoration-1 underline-offset-4">Facebook</h4>
            <h5 className="underline decoration-1 underline-offset-4">Linkedin</h5>
        </div>
      </div>


      <div className="px-[3vw] py-[2vh] flex justify-between">
        <div>
            <h4 className=" text-[3.5vw] leading-tight mb-4">Our apporach:</h4>
            <button className="flex justify-center items-center gap-10 h-[7.5vh] w-[12vw] pr-[1vw] uppercase bg-black text-zinc-100 rounded-[4vh] text-sm font-normal">READ MORE 
                <div className="w-2 h-2 rounded-full bg-white">

                </div>
            </button>
        </div>
        <div className= "w-[48vw]">
            <img className="rounded-xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
