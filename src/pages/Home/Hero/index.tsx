import { useLayoutEffect, useEffect, useRef, useState } from "react";
import slides from "../../../data/home/hero";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

const SLICEY_BOXES = [
  { w: 250, h: 150, hoff: -112, voff: -219, delay: 300 },
  { w: 150, h: 200, hoff: 151, voff: -212, delay: 350 },
  { w: 250, h: 150, hoff: 339, voff: 2, delay: 400 },
  { w: 250, h: 150, hoff: 162, voff: 195, delay: 450 },
  { w: 300, h: 200, hoff: -186, voff: 269, delay: 500 },
  { w: 150, h: 250, hoff: -325, voff: 3, delay: 550 },
  { w: 250, h: 300, hoff: -429, voff: -327, delay: 320 },
  { w: 300, h: 250, hoff: 422, voff: -245, delay: 360 },
  { w: 300, h: 250, hoff: 549, voff: 236, delay: 400 },
  { w: 300, h: 250, hoff: -522, voff: 339, delay: 440 },
  { w: 300, h: 200, hoff: -588, voff: 72, delay: 480 },
  { w: 450, h: 100, hoff: -37, voff: -401, delay: 310 },
  { w: 350, h: 100, hoff: 186, voff: 363, delay: 340 },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  // Measure container dimensions for slice positioning
  useLayoutEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        setDims({
          w: sectionRef.current.clientWidth,
          h: sectionRef.current.clientHeight,
        });
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Trigger initial slice animation on load
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setAnimate(false);

      setTimeout(() => setAnimate(true), 50);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 600);

      setTimeout(() => {
        setTextVisible(true);
      }, 900);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[450px] sm:h-[520px] md:h-[600px] lg:h-[680px] overflow-hidden bg-[#06111f]"
    >
      {/* 
        PRE-RENDER ALL SLIDE IMAGES IN THE DOM
        Using opacity transitions instead of swapping src eliminates the dark screen flash
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {slides.map((s, index) => {
          const isActive = index === current;
          return (
            <img
              key={s.image || index}
              src={s.image}
              alt="NannyBay professional home services"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
              style={{
                objectPosition: "top center",
                animation: isActive
                  ? "kenBurnOut 6s ease-out forwards"
                  : "none",
                transformOrigin: "top center",
              }}
            />
          );
        })}
      </div>

      {/* Dark overlay with animation */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-slate-950/50"
        style={{
          animation: animate
            ? "overlayIn 0.5s cubic-bezier(0.77,0,0.175,1) forwards"
            : "none",
          opacity: 0,
        }}
      />

      {/* Slicey boxes - Floating blurred square slices */}
      {dims &&
        SLICEY_BOXES.map((box, i) => {
          const left = dims.w / 2 + box.hoff - box.w / 2;
          const top = dims.h / 2 + box.voff - box.h / 2;

          return (
            <div
              key={`${current}-${i}`}
              className="absolute overflow-hidden pointer-events-none"
              style={{
                left,
                top,
                width: box.w,
                height: box.h,
                zIndex: 12 + i,
                opacity: 0,
                willChange: "opacity",
                animation: animate
                  ? `sliceyFade 3s ease-in-out ${box.delay}ms forwards`
                  : "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: dims.w,
                  height: dims.h,
                  top: -top,
                  left: -left,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  filter: "blur(20px)",
                  opacity: 0.35,
                  transform: "scale(1.05) translateZ(0)",
                }}
              />
            </div>
          );
        })}

      {/* Hero Content Area */}
      <div
        className="absolute inset-0 flex items-center w-full"
        style={{
          zIndex: 30,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="w-full mx-auto max-w-7xl px-6">
          <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#60A5FA] bg-blue-500/20 border border-blue-400/30 mb-4 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              WELCOME TO NANNYBAY
            </span>

            {/* Slide Headline */}
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {slide.heading}
            </h1>

            {/* Slide Subtitle */}
            <p className="text-slate-200 mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-normal">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
              <Link
                to={slide.path ?? "/services"}
                className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 text-sm sm:text-base active:scale-95"
              >
                {slide.cta || "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Indicator Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        style={{ zIndex: 40 }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="flex items-center justify-center w-6 h-6 cursor-pointer rounded-full"
          >
            <span
              className="h-2 rounded-full transition-all duration-300 block"
              style={{
                width: current === index ? "28px" : "8px",
                backgroundColor:
                  current === index ? "#60A5FA" : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes kenBurnOut {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes overlayIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes sliceyFade {
          0%   { opacity: 0; }
          20%  { opacity: 0.75; }
          80%  { opacity: 0.75; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
