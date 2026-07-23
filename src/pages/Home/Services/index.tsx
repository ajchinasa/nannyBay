import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import services from "../../../data/home/services";

const Services = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#06111f] border-y border-slate-800/80 overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-center">
          {/* Left Column — Text Intro */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left items-center lg:items-start flex flex-col"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-[#1E40AF]/30 border border-[#60A5FA]/20 mb-3">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Comprehensive{" "}
              <span className="text-[#60A5FA]">Home Services</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md text-sm sm:text-base mx-auto lg:mx-0">
              We provide a wide range of trusted household solutions, each
              delivered by vetted, trained professionals dedicated to your
              family's care and safety.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-[#1E40AF] hover:bg-blue-600 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/40 hover:shadow-blue-600/40 transition-all duration-200 active:scale-95"
            >
              View All Services & Packages
            </Link>
          </motion.div>

          {/* Right Column — Staggered Glassmorphism Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    to={service.path}
                    className="flex flex-col items-center justify-center gap-3 py-6 px-4 text-center rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-[#60A5FA]/40 hover:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 group h-full shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/90 border border-slate-700 group-hover:border-[#60A5FA]/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Icon size={22} color={service.iconColor || "#60A5FA"} />
                    </div>
                    <h3 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#60A5FA] transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
