import audiences from "../../../data/home/audiences";
import FadeIn from "../../../components/ui/FadeIn";

const WhoWeServe = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-blue-100/80 mb-3">
            WHO WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Built for Every{" "}
            <span className="text-[#1E40AF]">Nigerian Home</span>
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            Whether you are a busy parent, an executive, or a business seeking
            corporate childcare, NannyBay delivers vetted household solutions
            tailored to your lifestyle.
          </p>
        </div>

        {/* Dynamic Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0;

            return (
              <FadeIn
                key={item.title}
                delay={index * 80}
                amount={0.2}
                className={`flex flex-col p-6 md:p-8 rounded-3xl transition-all duration-300 relative group h-full shadow-sm hover:shadow-xl ${
                  isFeatured
                    ? "bg-[#06111f] text-white border border-slate-800"
                    : "bg-white text-slate-900 border border-slate-200/90 hover:border-blue-300"
                }`}
              >
                {/* Header Row: Icon + Optional Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md ${
                      isFeatured
                        ? "bg-[#1E40AF] text-white"
                        : "bg-blue-50 border border-blue-100"
                    }`}
                  >
                    <Icon
                      size={24}
                      color={
                        isFeatured ? "#FFFFFF" : item.iconColor || "#1E40AF"
                      }
                    />
                  </div>

                  {isFeatured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-[#60A5FA] border border-blue-400/30 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3
                  className={`text-lg md:text-xl font-extrabold mb-3 ${
                    isFeatured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mt-auto ${
                    isFeatured ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.desc}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
