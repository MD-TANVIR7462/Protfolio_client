import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProjectCard from "./ProjectCard";

const Projects: React.FC<{}> = () => {
  const projects = [
    {
      name: "Charitiaus",
      image: "https://i.ibb.co/b2Nyrjd/Charitiaus.png",
      features:
        "Charitious is a web platform designed to facilitate donations and community engagement for various charitable causes.",
      link: "https://charitiaus.netlify.app/",
      server: "https://github.com/MD-TANVIR7462/Charitious_Server",
      client: "https://github.com/MD-TANVIR7462/Charitious_Client",
    },

    {
      name: "Swift Mart",
      image: "https://i.ibb.co/pzXK9Dm/Swift-Mart.png",
      features:
        "Swift Mart is a Ecommerce Website where users can Buy Any Product and The admin can add or remove any product and ETC..Admin Email : testing@gmail.com || Pass: Test@T .",
      link: "https://ecommerce-project-7462.web.app/",
      server: "https://github.com/MD-TANVIR7462/Ecommerce-project-server",
      client: "https://github.com/MD-TANVIR7462/Economic-project-client",
    },
    {
      name: "Suds Cart",
      image: "https://i.ibb.co/HrtKkYx/Sudscart.png",
      features:
        "SudsCart - Your Ultimate Destination for Dishwashing Essentials!.",
      link: "https://diswashing-app.vercel.app/",
      server: "https://github.com/MD-TANVIR7462/sudsCart_server",
      client: "https://github.com/MD-TANVIR7462/SudsCart_client",
    },

    {
      name: "Toy Land",
      image:
        "https://i.ibb.co/QHmyHkH/White-Colorful-Soft-Photo-Grid-Layout-Mockup-Frame-Set-Moodboard-Photo-Collage-2.png",
      features:
        "an Online Toy Store Website, Implemented a responsive design approach, ensuring seamless browsing and purchasing across desktop and mobile devices.",
      link: "https://toy-land12.netlify.app/",
      server: "https://github.com/MD-TANVIR7462/Toyland-server",
      client: "https://github.com/MD-TANVIR7462/Toyland-Client-main",
    },
  ];
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
          {projects?.map((singleProject, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 xl:basis-1/3"
            >
              <ProjectCard
                key={index}
                singleProject={singleProject}
              ></ProjectCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </section>
  );
};

export default Projects;
