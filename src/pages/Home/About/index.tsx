import AboutImage from "../../../assets/images/landingPage/about.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-16 py-20 bg-white"
    >
      {/* Text Side */}
      <div className="flex-1 flex flex-col gap-5">
        <p className="text-blue-600 text-sm uppercase tracking-widest">
          Who We Are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          About NannyBay
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded-full" />
        <p className="text-black leading-relaxed">
          At NannyBay, we believe that a well-managed home is the foundation of
          a well-lived life. We are a professional home services company
          dedicated to providing reliable, vetted, and compassionate support to
          households across Nigeria.
        </p>
        <p className="text-black leading-relaxed">
          From keeping your home spotless to caring for your children and
          elderly loved ones, NannyBay brings together a team of trained
          professionals who show up with skill, discretion, and heart.
        </p>
        <p className="text-black leading-relaxed">
          Our name says it all — we are your bay of support. A safe harbour for
          busy families, working professionals, and anyone who deserves more
          time to focus on what matters most.
        </p>
        <p className="text-gray-800 font-semibold text-lg mt-2">
          We don't just provide a service. We provide peace of mind.
        </p>

        {/* Stats row */}
        <div className="flex gap-8 mt-4">
          {[
            { value: "500+", label: "Homes Served" },
            { value: "100%", label: "Vetted Staff" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <img
          src={AboutImage}
          alt="NannyBay professional"
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
