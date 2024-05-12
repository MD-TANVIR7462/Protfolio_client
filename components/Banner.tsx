"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-6 sm:px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="https://i.ibb.co/myRpFC7/Black-Gold-Dynamic-Business-Circle-Profile-Image.png"
            height={350}
            width={350}
            alt="Tanvir"
            className="rounded-full"
          />
        </div>

        <div className="mt-6 cursor-pointer animate-bounce tracking-tighter  text-3xl sm:text-4xl lg:text-6xl font-semibold text-white w-full   h-auto">
          Tajul Islam Tanvir!
        </div>
        <div className="flex justify-center">
          <p className="text-xl sm:text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
            I do Code &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <Image src="/popcorn.gif" height={50} width={50} alt="chill" />
        </div>

        <p className="text-sm sm:text-md text-gray-200 my-5 max-w-[600px]">
          Passionate Web Developer with a focus on MERN Stack development,
          dedicated to crafting elegant and user-friendly Web applications.
        </p>
        <div className="text-sm md:text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:mdtanvir7462@gmail.com")}
            className="    hover:bg-white rounded-3xl  text-white font-semibold hover:text-black md:py-3 py-2 px-5 md:px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
