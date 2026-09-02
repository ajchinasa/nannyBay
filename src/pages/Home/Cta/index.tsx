import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import ctaImg from "../../../assets/images/landingPage/heroSlideImageTwo.webp";
import FadeIn from "../../../components/ui/FadeIn";

const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#06111f] text-white overflow-hidden border-t border-slate-800">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Left Column: Text & CTAs */}
          <FadeIn
            direction="up"
            amount={0.3}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/10 border border-blue-400/20 mb-4">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              GET STARTED TODAY
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Simplify <br className="hidden sm:block" />
              <span className="text-[#60A5FA]">Your Home Life?</span>
            </h2>

            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed max-w-xl">
              Let NannyBay take care of the details so you can focus on what
              matters most. Vetted professionals, flexible booking, and total
              peace of mind—all in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 w-full sm:w-auto">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 text-sm active:scale-95"
              >
                Book a Service Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Right Column: Image with Rating Badge */}
          <FadeIn
            direction="up"
            delay={100}
            amount={0.3}
            className="flex-1 relative w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 h-[300px] sm:h-[380px] w-full group">
              <img
                src={ctaImg}
                alt="NannyBay professional caring for a child"
                width={1672}
                height={941}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Rating Badge Overlay */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-200/90 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Average Rating
                </p>
                <p className="text-lg font-extrabold text-slate-900 leading-none mt-0.5">
                  4.9{" "}
                  <span className="text-xs font-normal text-slate-500">
                    / 5.0
                  </span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;
