/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Experience = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <section id="experience">
    <h1 className="text-white font-semibold text-center text-3xl md:text-4xl lg:text-5xl   md:pt-[35px]">
      EXPERIENCE
    </h1>
    <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
      EXPLORE NOW
    </p>
  <Carousel
    plugins={[plugin.current]}
    className="w-full md:w-[85%] lg:w-[76%] xl:w-[70%] z-10 mx-auto"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
  >
      <div  className="mx-auto">
  <CarouselPrevious className="hidden md:inline-flex"  />
    <CarouselNext className="hidden md:inline-flex" />
  </div>
    <CarouselContent>
      {Array.from({ length: 3 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
          <div className="p-1">
              <div className=" w-[90%] sm:container mx-auto ">
                <div className="flex  flex-col md:flex-row justify-between pt-5">
                  <p className="text-gray-300 ">
                    <span className="tracking-[0.5em] text-transparent  text-sm sm:text-base  font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  ">
                      {" "}
                      <Link href={"https://siscotek.com/"} target="_blank">SISCOTEK</Link> /
                    </span>{" "}
                    <span className="text-sm md:text-base">
                      Junior Web Developer
                    </span>
                  </p>
                  <p className="mt-2 md:mt-0 text-[12px] text-gray-300">
                    DECEMBER 2023 - PRESENT, CHITTAGONG
                  </p>
                </div>
                <p className="text-[12px] md:text-base text-gray-300 pt-5">
                  As a Junior Web Developer at <b>SISCOTEK</b> since December
                  2023, I've been instrumental in developing cutting-edge web
                  solutions. Collaborating closely with senior developers,
                  I've contributed to the design and implementation of various
                  features, gaining hands-on experience with the MERN stack.
                  <br />
                  <br />
                  From troubleshooting issues to optimizing performance, I've
                  played a key role in ensuring the success of our projects.
                  With a strong dedication to continuous learning and growth,
                  I'm committed to delivering high-quality, impactful
                  solutions that meet and exceed client expectations.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

  </Carousel>
  </section>
  );
};

export default Experience;