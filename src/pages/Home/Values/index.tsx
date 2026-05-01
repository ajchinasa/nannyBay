import values from "../../../data/home/values";

const Values = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      <div className="text-center mb-14">
        <p className="text-blue-600 text-sm uppercase tracking-widest mb-2">
          What We Stand For
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Values
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="flex flex-col items-center text-center gap-4 p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: value.bg }}
              >
                <Icon size={22} color={value.iconColor} />
              </div>
              <h3 className="text-base font-bold text-gray-800">
                {value.title}
              </h3>
              <div className="w-8 h-0.5 bg-blue-200 rounded-full" />
              <p className="text-gray-500 text-sm leading-relaxed">
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
