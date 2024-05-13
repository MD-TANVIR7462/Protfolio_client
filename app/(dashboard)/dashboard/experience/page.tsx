import DashExperience from "@/components/DashExperience";
import ExperienceForm from "@/components/ExperienceForm";

// @ts-ignore
import SkillsForm from "@/components/skillsForm";
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <DashExperience />
      </div>
      <ExperienceForm />
    </div>
  );
};

export default ExperiencePage;
