import { useLayoutEffect, useEffect, useRef, useState } from "react";
import slides from "../../../data/home/hero";

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
  // Initialize with null to prevent "guessing" dimensions on first render
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  // useLayoutEffect runs BEFORE the browser paints.
  // Fix for correcting on subsequent loads.
  useLayoutEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        setDims({
          w: sectionRef.current.clientWidth,
          h: sectionRef.current.clientHeight,
        });
      }
    };

    // Initial measure
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Trigger slicey on load
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
      className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden bg-black"
    >
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          key={current}
          src={slide.image}
          alt="NannyBay professional home services"
          className="w-full h-full block object-cover"
          style={{
            // top of the image stays at the top of the container
            objectPosition: "top center",
            animation: "kenBurnOut 6s ease-out forwards",
            transformOrigin: "top center", // make zoom starts from the top
          }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.45)",
          animation: animate
            ? "overlayIn 0.5s cubic-bezier(0.77,0,0.175,1) forwards"
            : "none",
          opacity: 0,
        }}
      />

      {/* Slicey boxes - Only render if dims are available */}
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
                zIndex: 5 + i,
                opacity: 0,
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
                  filter: "blur(25px)",
                  opacity: 0.3,
                  transform: "scale(1.05)",
                }}
              />
            </div>
          );
        })}

      {/* Text overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-8 md:px-16"
        style={{
          zIndex: 20,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p className="text-white text-sm uppercase tracking-widest mb-2 opacity-80 font-semibold">
          Welcome to NannyBay
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
          {slide.heading}
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-md">{slide.sub}</p>
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all active:scale-95">
            {slide.cta}
          </button>
          {/* <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all active:scale-95">
            Learn More
          </button> */}
        </div>
      </div>

      {/* Dot indicators */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
        style={{ zIndex: 30 }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: current === index ? "32px" : "8px",
              backgroundColor:
                current === index ? "white" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes kenBurnOut {
          0%   { transform: scale(1);    filter: blur(8px); }
          100% { transform: scale(1.15); filter: blur(0px); }
        }
        @keyframes overlayIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes sliceyFade {
          0%   { opacity: 0; }
          15%  { opacity: 0.7; }
          85%  { opacity: 0.7; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
