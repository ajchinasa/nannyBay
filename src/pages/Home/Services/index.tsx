import { Link } from "react-router-dom";
import services from "../../../data/home/services";

const Services = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      //   style={{
      //     backgroundImage: "url('/src/assets/images/landingPage/servicesBg.png')",
      //   }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left — Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
              Our Services
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              We provide a wide range of trusted home services — each delivered
              by vetted, trained professionals who care about your family as
              much as you do.
            </p>
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              View All Services
            </Link>
          </div>

          {/* Right — Service Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  to={service.path}
                  key={service.title}
                  className="flex flex-col items-center justify-center gap-3 py-8 px-4 text-center border border-white/10 bg-black/20 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} color={service.iconColor} />
                  </div>

                  <h4 className="text-white text-l font-medium">
                    {service.title}
                  </h4>
                </Link>

                // <Link
                //   to={service.path}
                //   key={service.title}
                //   className="flex flex-col gap-3 py-8 px-4 border border-white/10 bg-black/20 hover:bg-white/10 rounded-xl transition-all duration-300 group"
                // >
                //   {/* Icon — left aligned */}
                //   <div className="w-12 h-12 flex self-start group-hover:scale-110 transition-transform duration-300">
                //     <Icon size={42} color={service.iconColor} />
                //   </div>

                //   {/* Title — left aligned */}
                //   <h4 className="text-white text-l font-medium">
                //     {service.title}
                //   </h4>
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
