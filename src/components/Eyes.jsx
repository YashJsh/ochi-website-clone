import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotatt, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let x = e.clientX;
            let y = e.clientY;
            console.log(x, y);

            let deltaX = x - window.innerWidth/2;
            let deltaY = y - window.innerHeight/2;

            var angle = Math.atan2(deltaX,deltaY) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="z-2 eyes w-full h-screen overflow-hidden">
      <div className="h-full w-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="h-[15vw] w-[15vw] rounded-full bg-white flex items-center justify-center">
            <div className=" relative h-[10vw] w-[10vw] rounded-full bg-black">
              <div style={{transform : `translate(-50%,-50%) rotate(${rotatt}deg)`}} className="line absolute w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-5 h-5 bg-zinc-200 rounded-full"></div>
              </div>
            </div>  
          </div>
          <div className="h-[15vw] w-[15vw] rounded-full bg-white flex items-center justify-center">
            <div className=" relative h-[10vw] w-[10vw] rounded-full bg-black">
                <div style={{transform : `translate(-50%,-50%) rotate(${rotatt}deg)`}} className="line absolute w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                     <div className="w-5 h-5 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
