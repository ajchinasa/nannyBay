import NannyPackageHero from "./sections/NannyPackageHero";
import NannyPackageCards from "./sections/NannyPackageCards";

const NannyPackages = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#06111F" }}
    >
      {/* FIXED: Removed max-width wrapper so sections can extend edge-to-edge */}
      <NannyPackageHero />
      <NannyPackageCards />
    </section>
  );
};

export default NannyPackages;
