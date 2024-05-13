import DashExperience from "@/components/DashExperience";
import ExperienceForm from "@/components/ExperienceForm";
import React from "react";

const ExperiencePage = async () => {
  const experienceData = await fetch(
    "http://localhost:5000/api/v1/experience",
    {
      cache: "no-store",
    }
  );
  const experienceResult = await experienceData.json();
  const experience = experienceResult.data;
  return (
    <div className="mb-12">
      <div className="mb-8">
        <DashExperience experience={experience} />
      </div>
      <ExperienceForm />
    </div>
  );
};

export default ExperiencePage;
