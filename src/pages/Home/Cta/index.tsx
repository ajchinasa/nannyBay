import ctaImg from "../../../assets/images/landingPage/heroSlideImageTwo.png";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#1E3A5F" }}
    >
      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 max-w-7xl px-6  mx-auto">
        {/* Text Left */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
          <p
            className="text-xs sm:text-sm uppercase tracking-widest"
            style={{ color: "#93C5FD" }}
          >
            Get Started Today
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            Ready to Simplify <br /> Your Home Life?
          </h2>
          <p
            className="leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Let NannyBay take care of the details, so you can focus on what
            matters most. Trusted professionals, flexible booking, and peace of
            mind, all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1 md:mt-2">
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 md:px-7 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition active:scale-95"
            >
              Book a Service Today
            </Link>
          </div>
        </div>

        {/* Image Right */}
        <div className="flex-1 relative w-full mt-4 md:mt-0">
          <img
            src={ctaImg}
            alt="NannyBay professional caring for a child"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
            style={{
              maxHeight: "320px",
              objectPosition: "center center",
            }}
          />

          {/* Floating badge */}
          <div
            className="absolute -bottom-3 -left-2 md:-bottom-4 md:-left-4 px-4 md:px-5 py-3 md:py-4 rounded-xl shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <p className="text-xs text-gray-500 mb-1">Average Rating</p>
            <p
              className="text-lg md:text-xl font-bold"
              style={{ color: "#1E3A5F" }}
            >
              4.9 ★
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
