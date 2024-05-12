import Skills from "@/components/Skills";
import SkillsForm from "@/components/skillsForm";
import React from "react";

const page = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl mb-8 ">
          SKILLS
        </h1>
        <Skills />
      </div>

      <SkillsForm />
    </div>
  );
};

export default page;
