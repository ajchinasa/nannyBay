import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SERVICES_DATA } from "../../data/services/serviceItem";

// Card Imports
import NannyPackages from "../../pages/Services/nannyPackage";
import ElderlyCarePackages from "../../pages/Services/elderlyCarePackages";
import DriverPackageCards from "../../pages/Services/driverServicePackages";
import ChefPackageCards from "../../pages/Services/chefServicePackages";
import BabySittingCards from "../../pages/Services/babySittingPackages";
import HouseKeepingPackagesCards from "../../pages/Services/houseKeepingPackages";
import CleaningServiceForm from "../../pages/Services/cleaningServiceForm";
import CustomForm from "./customForm";

// Maps the hash used in the navbar to the activeTab id
const HASH_TO_TAB: Record<string, string> = {
  housekeeping: "housekeeping",
  "nanny-services": "nanny",
  babysitting: "babysitting",
  chef: "chef",
  driver: "driver",
  elderly: "elderly",
  cleaning: "cleaning",
  custom: "custom",
};

// Reverse lookup: tab id -> hash
const TAB_TO_HASH: Record<string, string> = Object.fromEntries(
  Object.entries(HASH_TO_TAB).map(([hash, tab]) => [tab, hash]),
);

const PackageSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(() => {
    const hash = location.hash.replace("#", "");
    return HASH_TO_TAB[hash] || "nanny";
  });

  const [lastHash, setLastHash] = useState(location.hash);

  if (location.hash !== lastHash) {
    setLastHash(location.hash);
    const matchedTab = HASH_TO_TAB[location.hash.replace("#", "")];
    if (matchedTab) {
      setActiveTab(matchedTab);
    }
  }

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!HASH_TO_TAB[hash]) return;

    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const currentService =
    SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const hash = TAB_TO_HASH[tabId];
    if (hash) {
      navigate(`/services#${hash}`, { replace: true });
      setLastHash(`#${hash}`);
    }
  };

  return (
    <section
      id={TAB_TO_HASH[activeTab] || "housekeeping"}
      className="w-full py-20 relative bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url('${currentService.bgImage}')` }}
    >
      {/* Dark Overlay */}
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

        {/* Tab Bar */}
        <div className="sticky top-6 z-30 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700/60 shadow-2xl max-w-4xl mx-auto mb-10">
          <div className="flex items-center justify-between gap-1 overflow-x-auto scrollbar-none px-2 py-1">
            {SERVICES_DATA.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabClick(service.id)}
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

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === "nanny" && <NannyPackages />}
          {activeTab === "chef" && <ChefPackageCards />}
          {activeTab === "babysitting" && <BabySittingCards />}
          {activeTab === "housekeeping" && <HouseKeepingPackagesCards />}
          {activeTab === "driver" && <DriverPackageCards />}
          {activeTab === "elderly" && <ElderlyCarePackages />}
          {activeTab === "cleaning" && <CleaningServiceForm />}
          {activeTab === "custom" && <CustomForm />}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
