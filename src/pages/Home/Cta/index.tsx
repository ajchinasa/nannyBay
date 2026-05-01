import ctaImg from "../../../assets/images/landingPage/heroSlideImageTwo.png";

const CTA = () => {
  return (
    <section
      className="relative px-6 md:px-16 py-20 overflow-hidden"
      style={{ backgroundColor: "#1E3A5F" }}
    >
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Text Left */}
        <div className="flex-1 flex flex-col gap-6">
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: "#93C5FD" }}
          >
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Ready to Simplify <br /> Your Home Life?
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Let NannyBay take care of the details, so you can focus on what
            matters most. Trusted professionals, flexible booking, and peace of
            mind — all in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Book a Service Today
            </button>
          </div>
        </div>

        {/* Image Right */}
        <div className="flex-1 relative">
          <img
            src={ctaImg}
            alt="NannyBay professional caring for a child"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
            style={{ maxHeight: "450px", objectPosition: "center center" }}
          />
          {/* Floating badge */}
          <div
            className="absolute -bottom-4 -left-4 px-5 py-4 rounded-xl shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <p className="text-xs text-gray-500 mb-1">Average Rating</p>
            <p className="text-xl font-bold" style={{ color: "#1E3A5F" }}>
              4.9 ★
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
