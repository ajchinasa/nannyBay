import values from "../../../data/home/values";
import FadeIn from "../../../components/ui/FadeIn";

const Values = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-blue-50 border border-blue-100 mb-3">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Our Core <span className="text-[#1E40AF]">Values</span>
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Every caregiver we place and every home we serve is guided by our
            unwavering commitment to safety, integrity, and exceptional care.
          </p>
        </div>

        {/* Centered Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-stretch">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <FadeIn
                key={value.title}
                delay={index * 80}
                amount={0.2}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col items-start p-7 md:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200/50"
                  style={{ backgroundColor: value.bg || "#EFF6FF" }}
                >
                  <Icon size={24} color={value.iconColor || "#1E40AF"} />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E40AF] transition-colors">
                  {value.title}
                </h3>

                {/* Accent Line */}
                <div className="w-8 h-1 bg-[#1E40AF]/20 rounded-full mb-4 group-hover:w-14 group-hover:bg-[#1E40AF] transition-all duration-300" />

                {/* Body Text */}
                <p className="text-slate-600 text-sm leading-relaxed mt-auto">
                  {value.body}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
