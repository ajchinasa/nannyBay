import { useState } from "react";
import { SERVICES_DATA } from "../../data/services/serviceItem";

// Card Imports
import NannyPackages from "../../pages/Services/nannyPackage";
import ElderlyCarePackages from "../../pages/Services/elderlyCarePackages";
import DriverPackageCards from "../../pages/Services/driverServicePackages";
import ChefPackageCards from "../../pages/Services/chefServicePackages";
import BabySittingCards from "../../pages/Services/babySittingPackages";
import HouseKeepingPackagesCards from "../../pages/Services/houseKeepingPackages";

const PackageSection = () => {
  const [activeTab, setActiveTab] = useState("nanny");

  // Lookup active service object
  const currentService =
    SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section
      className="w-full py-20 relative bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url('${currentService.bgImage}')` }}
    >
      {/* Heavy Dark Overlay for Text & Card Contrast */}
      <div className="absolute inset-0 bg-[#06111f]/85 backdrop-blur-sm transition-opacity duration-300" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-5 md:px-6">
        {/* Section Header */}
        <div className="text-center my-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            EXPLORE OUR <span className="text-[#60A5FA]">PACKAGES</span>
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Tailored household and care solutions for your home
          </p>
        </div>

        {/* Floating Glassmorphism Tab Bar */}
        <div className="sticky top-6 z-30 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700/60 shadow-2xl max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none px-2 py-1">
            {SERVICES_DATA.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#1E40AF] text-white shadow-lg ring-2 ring-[#60A5FA]/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {service.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Card Container */}
        <div className="transition-all duration-300">
          {activeTab === "nanny" && <NannyPackages />}
          {activeTab === "chef" && <ChefPackageCards />}
          {activeTab === "babysitting" && <BabySittingCards />}
          {activeTab === "housekeeping" && <HouseKeepingPackagesCards />}
          {activeTab === "driver" && <DriverPackageCards />}
          {activeTab === "elderly" && <ElderlyCarePackages />}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
