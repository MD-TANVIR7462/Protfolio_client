import DashProject from "@/components/DashProject";
import ProjectForm from "@/components/ProjectForm";

// @ts-ignore
import React from "react";

const ExperiencePage = async() => {
  const projectFetch = await fetch("http://localhost:5000/api/v1/projects", {
    cache: "no-store",
  });
  const projectData = await projectFetch.json();
  return (
    <div className="mb-12">
      <div className="mb-8">
        <DashProject projectData={projectData.data} />
      </div>
      <ProjectForm />
    </div>
  );
};

export default ExperiencePage;