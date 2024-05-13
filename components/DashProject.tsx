import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import DashProjectCard from "./DashProjectCard";

const DashProject = ({ projectData }: { projectData: any }) => {
  const projects = projectData;
  return (
    <section id="" className="z-[1]  w-full sm:w-[96%] mx-auto">
      <h1 className="text-white font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>

      <Carousel className=" max-w-[87%]  md:max-w-[87%] lg:w-[90%] xl:max-w-[1350px]   justify-items-center mx-auto  gap-4 ">
        <CarouselContent className="-ml-1">
          {projects?.map((singleProject: any, index: number) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 xl:basis-1/3"
            >
              <DashProjectCard
                key={index}
                singleProject={singleProject}
              ></DashProjectCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </section>
  );
};

export default DashProject;
