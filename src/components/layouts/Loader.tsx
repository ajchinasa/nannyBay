// import Logo from "../../assets/images/universal/footerLogo.png";

interface LoaderProps {
  visible: boolean;
}

const Loader = ({ visible }: LoaderProps) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#06111f] transition-all duration-500 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col justify-center item-center text-center gap-4 mt-5">
        {" "}
        <p className=" text-white tracking-wide text-base md:text-xl text-bold">
          NannyBay
        </p>
        <p className="text-white/70 tracking-wide text-sm md:text-base">
          Simplifying Life, One Home At A Time.
        </p>
      </div>

      <div className="mt-8 w-56 h-[3px] overflow-hidden rounded-full bg-white/10">
        <div className="loader-bar h-full bg-[#60A5FA]" />
      </div>
    </div>
  );
};

export default Loader;
