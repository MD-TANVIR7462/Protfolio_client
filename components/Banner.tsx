"use client";


import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-6 sm:px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="https://i.ibb.co/hLvY508/Promo-Facebook-Facebook-marketplace-1.png"
            height={350}
            width={350}
            alt="Tanvir"
            className="rounded-full "
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
   
          <HoverCard >
            <HoverCardTrigger asChild>
   <Button className="text-transparent w-40 mx-auto font-semibold text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400  border">CONTACT ME </Button>
            </HoverCardTrigger>
            <HoverCardContent className={`w-80 `}>

           
                <div className="space-y-1 text-center">
                  <h4 className="text-sm font-semibold ">CONTACT ME </h4>
                  <p className="text-sm">
                  <b> Phone : +880 1998863753 </b> 
                  </p>
                  <p className="text-sm">
                  <b> MAIL : mdtanvir7462@gmail.com </b> 
                  </p>
                
                </div>
    
            </HoverCardContent>
          </HoverCard>
        
      </div>
    </div>
  );
};

export default Banner;
