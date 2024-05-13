import DashProject from "@/components/DashProject";
import ExperienceForm from "@/components/ExperienceForm";
import ProjectForm from "@/components/ProjectForm";

// @ts-ignore
import React from "react";

const ExperiencePage = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <DashProject />
      </div>
      <ProjectForm />
    </div>
  );
};

export default ExperiencePage;