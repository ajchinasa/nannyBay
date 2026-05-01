import whyImg from "../../../assets/images/landingPage/whyChooseUs.png";
import stats from "../../../data/home/whyChoose/stats";
import checks from "../../../data/home/whyChoose/checkes";

const WhyChoose = () => {
  return (
    <section className="px-5 md:px-16 py-14 md:py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-8 md:mb-14">
        <p className="text-blue-600 text-sm uppercase tracking-widest mb-2">
          Why NannyBay
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        <p className="text-gray-500 mt-4 max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          We don't just send someone to your home — we send the right person,
          every time.
        </p>
      </div>

      {/* Content — Image left + Stats & Checklist right */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-6xl mx-auto items-stretch">
        {/* Image — hidden on mobile, shown on md and up */}
        <div className="hidden md:flex flex-1 min-h-[400px]">
          <img
            src={whyImg}
            alt="NannyBay professional"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            style={{ objectPosition: "center center" }}
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-4 px-3 rounded-xl"
                style={{ backgroundColor: "#1E3A5F" }}
              >
                <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: "#93C5FD" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-2 mt-2">
            {checks.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 md:gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1E40AF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile only — show image below checklist */}
          <div className="md:hidden mt-4 h-52 sm:h-64">
            <img
              src={whyImg}
              alt="NannyBay professional"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
