import audiences from "../../../data/home/audiences";

const WhoWeServe = () => {
  return (
    <section className=" py-14 md:py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8 md:mb-14">
        <p className="text-blue-600 text-sm uppercase tracking-widest mb-2">
          Who We Serve
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Built for Every Nigerian Home
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        <p className="text-gray-500 mt-4 max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          Whether you are a busy parent, a growing company, or a family looking
          for trusted support, NannyBay has a solution for you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
        {audiences.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 md:gap-4 p-5 md:p-7 rounded-2xl bg-white border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: item.bg }}
              >
                <Icon size={20} color={item.iconColor} />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-gray-800">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-blue-200 rounded-full" />

              {/* Description */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoWeServe;
