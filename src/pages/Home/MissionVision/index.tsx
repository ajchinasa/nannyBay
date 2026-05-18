const MissionVision = () => {
  return (
    <section className=" py-14 md:py-20 bg-gray-50 bg-black">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-blue-600 text-sm uppercase tracking-widest mb-2">
          What Drives Us
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Mission & Vision
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
        {/* Mission — Dark Card */}
        <div
          className="rounded-2xl p-7 md:p-10 flex flex-col gap-4 md:gap-5"
          style={{ backgroundColor: "#1E3A5F" }}
        >
          <div
            className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: "#93C5FD" }}
            >
              Our Mission
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
              Why We Exist
            </h3>
            <p
              className="leading-relaxed text-sm sm:text-base"
              style={{ color: "#CBD5E1" }}
            >
              To simplify the lives of families by delivering exceptional home
              services through trusted, trained, and compassionate
              professionals, so you can focus on what matters most.
            </p>
          </div>
        </div>

        {/* Vision — Light Card */}
        <div className="rounded-2xl p-7 md:p-10 flex flex-col gap-4 md:gap-5 bg-white border border-gray-200">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-blue-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-600 mb-2">
              Our Vision
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Where We're Going
            </h3>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              To become the most trusted home services brand in Africa. Built on
              the belief that every family deserves reliable, professional
              support in their home, one household at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
