import nannyImg from "../../../../../assets/images/servicePage/test2.png";

const NannyPackageHero = () => {
  return (
    <div className="relative min-h-[400px] md:min-h-[500px] flex items-center w-full">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden opacity-40">
        <img
          src={nannyImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111F] via-transparent to-transparent" />
      </div>

      {/* FIXED: Contained Content Shell Layer */}
      <div className="w-full mx-auto max-w-screen-xl px-5 md:px-6 relative z-20">
        <div className="flex flex-col justify-start px-4 pt-18 pb-40 md:pb-52 max-w-3xl">
          <p className="text-white font-medium text-base md:text-3xl">
            Quality care. Trusted professionals.
          </p>
          <p
            className="italic mt-2 text-sm sm:text-base"
            style={{ color: "#60A5FA" }}
          >
            Packages designed to suit your needs.
          </p>
        </div>
      </div>

      {/* Desktop Blended Image — Unconstrained, will now hit the actual edge of screen */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[50%] lg:w-[58%] overflow-hidden pointer-events-none z-10">
        <img
          src={nannyImg}
          alt="NannyBay nanny and child"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{
            objectPosition: "center center",
            filter: "brightness(0.95)",
          }}
        />
        {/* Left Blend */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, #06111F 0%, #06111F 10%, rgba(6,17,31,0.97) 18%, rgba(6,17,31,0.85) 28%, rgba(6,17,31,0.58) 42%, rgba(6,17,31,0.15) 60%, transparent 78%)`,
          }}
        />
        {/* Bottom Cinematic Shadow */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(6,17,31,0.95) 0%, rgba(6,17,31,0.35) 22%, transparent 45%)`,
          }}
        />
      </div>
    </div>
  );
};

export default NannyPackageHero;
