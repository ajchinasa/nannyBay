import { CheckCircle2, ShieldCheck } from "lucide-react";
import whyImg from "../../../assets/images/landingPage/whyChooseUs.webp";
import stats from "../../../data/home/whyChoose/stats";
import checks from "../../../data/home/whyChoose/checkes";
import FadeIn from "../../../components/ui/FadeIn";

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E40AF] bg-blue-100/80 mb-3">
            WHY NANNYBAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Why <span className="text-[#1E40AF]">Choose Us</span>
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed">
            We don't just send someone to your home, we match you with vetted,
            background-checked personnel tailored to your family's exact needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Side — Image with Floating Trust Badge */}
          <FadeIn
            direction="left"
            amount={0.3}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[380px] sm:h-[480px] w-full">
              <img
                src={whyImg}
                alt="NannyBay professional caregiver"
                width={1536}
                height={1024}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Badge Overlay */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-4 max-w-[260px] sm:max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                  Guaranteed Trust
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  100% replacement cover
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side — Stats Grid & Interactive Checklist */}
          <FadeIn
            direction="right"
            amount={0.3}
            className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2"
          >
            {/* Stats Cards (Dark Navy Theme) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-2xl bg-[#06111f] border border-slate-800 text-center shadow-lg group hover:border-[#60A5FA]/40 transition-all duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-[#60A5FA]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Verification Checklist */}
            <div className="flex flex-col gap-3 mt-2">
              {checks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#1E40AF]" />
                  </div>
                  <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
