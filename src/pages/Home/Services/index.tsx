import { Link } from "react-router-dom";
import services from "../../../data/home/services";

const Services = () => {
  return (
    <section className="relative py-14 md:py-20 bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left items-center lg:items-start flex flex-col">
            <p className="text-blue-400 text-sm uppercase tracking-widest mb-2 md:mb-3">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-snug">
              Our Services
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-md lg:max-w-sm text-sm sm:text-base mx-auto md:mx-0">
              We provide a wide range of trusted home services. Each delivered
              by vetted, trained professionals who care about your family as
              much as you do.
            </p>
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition active:scale-95"
            >
              View All Services
            </Link>
          </div>

          {/* Right — Service Grid */}
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 rounded-2xl overflow-hidden">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  to={service.path}
                  key={service.title}
                  className="flex flex-col items-center justify-center gap-2 md:gap-3 py-6 md:py-8 px-3 md:px-4 text-center border border-white/10 bg-black/20 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} color={service.iconColor} />
                  </div>
                  <h4 className="text-white text-xs sm:text-sm md:text-base font-medium">
                    {service.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
