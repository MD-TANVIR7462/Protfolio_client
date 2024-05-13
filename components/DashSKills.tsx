"use client";
import { Trash } from "lucide-react";
import { useState } from "react";

const DashSKills = () => {
  const skills = [
    {
      title: "HTML",
      percent: 95,
    },
    {
      title: "Css",
      percent: 70,
    },
    {
      title: "Javascript",
      percent: 70,
    },
    {
      title: "Typescript",
      percent: 80,
    },
    {
      title: "Express Js",
      percent: 90,
    },
    {
      title: "React Js",
      percent: 85,
    },
    {
      title: "Next JS",
      percent: 75,
    },
    {
      title: "Redux",
      percent: 70,
    },
    {
      title: "Mongodb",
      percent: 80,
    },
    {
      title: "Mongoose",
      percent: 75,
    },
    {
      title: "Tailwindcss",
      percent: 85,
    },
    {
      title: "Node js",
      percent: 90,
    },
    {
      title: "Firebase",
      percent: 80,
    },
    {
      title: "Bootstrap",
      percent: 75,
    },
    {
      title: "Framer Motion",
      percent: 85,
    },
    {
      title: "VS Code",
      percent: 90,
    },
    {
      title: "Github",
      percent: 80,
    },
    {
      title: "Vercel",
      percent: 85,
    },
  ];

  const [currentSkill, setCurrentSkill] = useState({
    title: "HTML",
    percent: 95,
  });

  const [selectedSkillPercent, setSelectedSkillPercent] = useState(
    currentSkill.percent
  );

  const handleSkillClick = (skill: any) => {
    setCurrentSkill(skill);
    setSelectedSkillPercent(skill.percent);
  };

  return (
    <section className="flex flex-col gap-5 sm:flex-row w-[96%] sm:w-[90%] md:w-[85%] lg:w-[70%] z-[1] mx-auto max-w-[1400px] items-center justify-around">
      <div className=" order-2 sm:order-1 grid justify-items-center  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {skills.map((skill) => (
          <div key={skill.title} className="flex p-2 w-full justify-center  ">
            <button
              key={skill.title}
              onClick={() => handleSkillClick(skill)}
              className="min-w-auto  h-10 border text-xs border-gray-700 px-4 py-2 rounded-l-full hover:bg-gray-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out"
            >
              {skill.title}
            </button>

            <button className="min-w-auto  h-10  p-2 border border-gray-700 rounded-r-full hover:bg-red-500  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
              <Trash className="w-4 h-4 sm:w-5 sm:h-5 " />
            </button>
          </div>
        ))}
      </div>

      <div className="flex order-1 sm:order-2 items-center justify-center">
        <svg className="transform -rotate-90 w-72 h-72">
          <circle
            cx="145"
            cy="145"
            r="120"
            stroke="currentColor"
            strokeWidth="30"
            fill="transparent"
            className="text-white"
          />
          <circle
            cx="145"
            cy="145"
            r="120"
            stroke="currentColor"
            strokeWidth="30"
            fill="transparent"
            strokeDasharray={((2 * 22) / 7) * 120}
            strokeDashoffset={
              ((2 * 22) / 7) * 120 -
              (((selectedSkillPercent / 100) * 2 * 22) / 7) * 120
            }
            className="text-gray-500 "
          />
        </svg>
        <span className="absolute text-5xl text-white">{`${selectedSkillPercent}%`}</span>
      </div>
    </section>
  );
};

export default DashSKills;