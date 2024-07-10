import React from "react";
import { GoDotFill } from "react-icons/go";

function Featured() {
  return (
    <div className="z-3 w-full font-['Neue Montreal']">
      <div className="h-[20vh] w-full pl-[7vh] mt-[5vh] border-b-[1px] border-zinc-500  pb-3 flex items-center">
        <h3 className="text-[8vh]">Featured projects</h3>
      </div>
      <div className="main w-full">
        <div className="w-[100vw] flex gap-3 px-[2vw] py-[2vw]">


          <div className="h-[90vh] w-1/2   pl-3 pr-3">
            <div className="flex items-center mb-[2vh] gap-1">
              <GoDotFill />
              <h5 className="font-[300] text-sm">FYDE</h5>
            </div>
            <div className="image w-full">
              <img
                className="bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="w-full font-[300] text-sm mt-[2vh] flex gap-3">
              {["Audit", "CopyWriting", "Sales Deck", "Slides Design"].map(
                (item) => (
                  <button
                    key="index"
                    className="border-[1px] border-zinc-800  rounded-3xl px-[1.5vh] py-[0.5vh] uppercase tracking-tighter"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>


          <div className="h-[80vh] w-1/2  pl-3 pr-3">
            <div className="flex items-center mb-[2vh] gap-1">
              <GoDotFill />
              <h5 className="font-[300] text-sm">VISE</h5>
            </div>
            <div className="image w-full">
              <img
                className="bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="w-full font-[300] text-sm mt-[2vh] flex gap-3">
              {["Agency", "Company Presentation"].map((item) => (
                <button
                  key="index"
                  className="border-[1px] border-zinc-800  rounded-3xl px-[1.5vh] py-[0.5vh] uppercase tracking-tighter"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>



        <div className="w-full flex gap-3 px-[2vw] py-[2vw]">
          <div className="h-[90vh] w-1/2   pl-3 pr-3">
            <div className="flex items-center mb-[2vh] gap-1">
              <GoDotFill />
              <h5 className="font-[300] text-sm">TRAWA</h5>
            </div>
            <div className="image w-full">
              <img
                className="bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="w-full font-[300] text-sm mt-[2vh] flex gap-3">
              {["Brand Identity", "Design Research", "Investor Deck"].map(
                (item) => (
                  <button
                    key="index"
                    className="border-[1px] border-zinc-800  rounded-3xl px-[1.5vh] py-[0.5vh] uppercase tracking-tighter"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="h-[80vh] w-1/2  pl-3 pr-3">
            <div className="flex items-center mb-[2vh] gap-1">
              <GoDotFill />
              <h5 className="font-[300] text-sm">PREMIUM BLEND</h5>
            </div>
            <div className="image w-full">
              <img
                className="bg-cover rounded-xl"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="w-full font-[300] text-sm mt-[2vh] flex gap-3">
              {["Branded Template"].map((item) => (
                <button
                  key="index"
                  className="border-[1px] border-zinc-800  rounded-3xl px-[1.5vh] py-[0.5vh] uppercase tracking-tighter"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
