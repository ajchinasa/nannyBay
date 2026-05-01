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
    <div>
      <SEO />
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Services />
      <WhoWeServe />
      <WhyChoose />
      <CTA />
    </div>
  );
};

export default Home;
