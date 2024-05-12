import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {


  return (
    <div className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat z-[1]">
      <div className="flex flex-col gap-12 md:gap-20">
        <Banner />
        <About />
        <Experience />
        <div className="z-[1]">
          <h1 className="text-white  font-semibold text-center text-3xl sm:text-4xl lg:text-5xl md:pt-[35px]">
            SKILLS
          </h1>
          <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl mb-5 sm:mb-12 ">
            EXPLORE NOW
          </p>
          <Skills/>
        </div>
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
