import Hero from "./Hero";
import About from "./About";
import MissionVision from "./MissionVision";
import Values from "./Values";
import Services from "./Services";
import WhoWeServe from "./WhoWeServe";
import WhyChoose from "./WhyChooseUs";
import CTA from "./Cta";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO />

      <section id="hero" className="scroll-mt-6 w-full">
        <Hero />
      </section>

      <section
        id="about"
        className="scroll-mt-6 w-full mx-auto max-w-screen-xl px-5 md:px-6"
      >
        <About />
      </section>

      <div className="w-full mx-auto max-w-screen-xl px-5 md:px-6">
        <MissionVision />
        <Values />
      </div>

      <section id="services" className="w-full">
        <Services />
      </section>

      <div className="w-full mx-auto max-w-screen-xl px-5 md:px-6">
        <WhoWeServe />
        <WhyChoose />
      </div>

      <section id="cta" className="w-full">
        <CTA />
      </section>
    </div>
  );
};

export default Home;
