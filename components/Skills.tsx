"use client";
import { useState } from "react";

const Skills = ({ skills }: { skills: any }) => {
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
    <section className="flex flex-col gap-5 sm:flex-row w-[96%] sm:w-[90%] md:w-[85%] lg:w-[70%]  mx-auto max-w-[1400px] items-center justify-around">
      <div className=" order-2 sm:order-1 grid justify-items-center  grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {skills?.map((skill: any) => (
          <button
            key={skill.title}
            onClick={() => handleSkillClick(skill)}
            className={`z-10 px-3 py-2 text-md text-gray-200 transition border-[0.3px]  rounded-md h-10 w-36 hover:bg-gray-400 ${
              currentSkill.title === skill.title &&
              "font-bold ring-2 ring-gray-100 bg-gray-400 "
            }`}
          >
            {skill.title}
          </button>
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

export default Skills;
