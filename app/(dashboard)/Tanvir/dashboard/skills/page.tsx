import DashSKills from "@/components/DashSKills";
import SkillsForm from "@/components/SkillsForm";


import React from "react";

const page = async () => {
  const skillsData = await fetch(
    "https://protfolio-server-two.vercel.app/api/v1/skills",
    {
      cache: "no-store",
    }
  );
  const result = await skillsData.json();
  const skills = result.data;
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl mb-8 ">
          SKILLS
        </h1>

        <DashSKills skills={skills} />
      </div>

      <SkillsForm />
    </div>
  );
};

export default page;
