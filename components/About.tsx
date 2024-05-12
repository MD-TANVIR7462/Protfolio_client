import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden  sm:pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-4xl lg:text-5xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300   text-sm md:text-base text-center ">
          As a passionate MERN Stack Developer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the dynamic world
          of SISCOTEK, my expertise centers around React,Next js, Javascript,Typescript,Node Js, Express js, MongoDB, where I seamlessly
          blend technology with innovation.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of Web development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what&#39;s possible
        </p>
      </div>
    </section>
  );
};

export default About;
