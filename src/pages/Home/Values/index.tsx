import values from "../../../data/home/values";

const Values = () => {
  return (
    <section className="px-5 md:px-16 py-14 md:py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-8 md:mb-14">
        <p className="text-blue-600 text-sm uppercase tracking-widest mb-2">
          What We Stand For
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Values
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="flex flex-col items-center text-center gap-3 md:gap-4 p-5 md:p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: value.bg }}
              >
                <Icon size={20} color={value.iconColor} />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-bold text-gray-800">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-blue-200 rounded-full" />

              {/* Body */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {value.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
