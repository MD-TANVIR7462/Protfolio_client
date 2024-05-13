import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const page = async () => {
  const skillsData = await fetch("http://localhost:5000/api/v1/skills", {
    cache: "no-store",
  });
  const result = await skillsData.json();
  const skills = result.data;
  const experienceData = await fetch(
    "http://localhost:5000/api/v1/experience",
    {
      cache: "no-store",
    }
  );
  const experienceResult = await experienceData.json();
  const experience = experienceResult.data;

  return (
    <div className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat z-[1]">
      <div className="flex flex-col gap-12 md:gap-20">
        <Banner />
        <About />
       
        <div className="z-[1]">
          <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
            SKILLS
          </h1>
          <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl mb-5 sm:mb-12 ">
            EXPLORE NOW
          </p>
          <Skills skills={skills} />
        </div>
        <Experience experience={experience} />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default page;
