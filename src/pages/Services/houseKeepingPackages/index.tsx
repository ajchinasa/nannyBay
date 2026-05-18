import { Check } from "lucide-react";
import { houseKeepingPackage } from "../../../data/services/houseKeeping";
import CTAButton from "../../../components/ui/CTAButton";
import Icon from "../../../components/ui/Icon";

const houseKeepingPackageCards = () => {
  return (
    <div className="pt-12 pb-10 ">
      {/* Title */}
      <h1 className="font-bold leading-none mb-6 text-center md:text-left">
        <span className="block text-2xl md:text-4xl text-black tracking-tight">
          HOUSEKEEPING <span className="text-[#1E40AF]">PACKAGES</span>
        </span>
      </h1>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6 w-full max-w-3xl">
        <div
          className="w-3 h-3 rotate-45 flex-shrink-0"
          style={{ backgroundColor: "#1E40AF" }}
        />
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: "rgba(3, 3, 3, 0.12)" }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {houseKeepingPackage.map((pkg) => (
          <div
            key={pkg.tier}
            className="flex flex-col rounded-[28px] overflow-hidden bg-[#F5F0E8] shadow-2xl transition-transform hover:scale-[1.02]"
          >
            {/* Icon Wrapper */}
            <div className="flex justify-center pt-8 pb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-[#06111F]">
                <Icon name={pkg.iconName} size={24} color="#60A5FA" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pb-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 tracking-wide">
                {pkg.tier} <span className="text-[#1E40AF]">{pkg.label}</span>
              </h3>

              <p className="text-[#1E40AF] text-sm font-bold tracking-widest mt-2 mb-6">
                {pkg.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-4 text-left mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#1E40AF" }}
                    />
                    <span className="text-gray-700 text-[13px] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing Section */}
              <div className="mt-auto">
                <div className="h-5 flex items-end justify-center mb-1">
                  {pkg.from ? (
                    <p className="text-xs font-bold uppercase tracking-widest text-[#1E40AF]">
                      From
                    </p>
                  ) : null}
                </div>

                <div
                  className="w-14 h-px mx-auto mb-4"
                  style={{ backgroundColor: "#1E40AF" }}
                />

                <p className="text-xl font-black text-gray-900">
                  {pkg.price}
                  <span className="text-[10px] font-medium text-gray-500 ml-1">
                    {pkg.period}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-12">
        <CTAButton label="Book a Service Today" to="/contact" />
      </div>
    </div>
  );
};

export default houseKeepingPackageCards;
