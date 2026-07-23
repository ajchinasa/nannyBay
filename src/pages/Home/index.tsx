import { lazy, Suspense } from "react";

import Hero from "./Hero";
import SEO from "../../components/SEO";

const About = lazy(() => import("./About"));
const MissionVision = lazy(() => import("./MissionVision"));
const Values = lazy(() => import("./Values"));
const Services = lazy(() => import("./Services"));
const WhoWeServe = lazy(() => import("./WhoWeServe"));
const WhyChoose = lazy(() => import("./WhyChooseUs"));
const CTA = lazy(() => import("./Cta"));

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO />

      {/* Hero renders immediately */}
      <section id="hero" className="scroll-mt-6 w-full">
        <Hero />
      </section>

      <Suspense fallback={null}>
        <section id="about" className="scroll-mt-6 w-full px-5 md:px-6">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={null}>
        <div className="w-full">
          <MissionVision />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <div className="w-full">
          <Values />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <section id="services" className="w-full">
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={null}>
        <div className="w-full">
          <WhoWeServe />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <div className="w-full">
          <WhyChoose />
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <section id="cta" className="w-full">
          <CTA />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
