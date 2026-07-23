import { useState } from "react";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { elderlyCarePackages } from "../../../data/services/elderlyCare";
import CTAButton from "../../../components/ui/CTAButton";
import Icon from "../../../components/ui/Icon";

const ElderlyCarePackageCards = () => {
  // Set default selected package to the first item in elderlyCarePackages
  const [selectedTier, setSelectedTier] = useState(
    elderlyCarePackages[0]?.tier || "",
  );

  // Find active package object based on selection
  const activePkg =
    elderlyCarePackages.find((pkg) => pkg.tier === selectedTier) ||
    elderlyCarePackages[0];

  return (
    <div className="pt-8 pb-10">
      {/* 2-Column Container */}
      <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-[#090D16] text-white rounded-3xl border border-slate-800/80 shadow-2xl">
        {/* Title */}

        <div className="flex items-center gap-4 mb-8">
          {/* Vertical Accent Bar */}
          <div className="w-1.5 h-10 bg-[#1E40AF] rounded-full" />
          <div>
            <h2 className="text-xl font-extrabold text-white  tracking-tight">
              ELDERLY CARE
            </h2>
            <p className="text-xs text-slate-300 mt-1 font-normal leading-relaxed">
              Compassionate, trained caregivers providing dedicated support,
              companionship, and daily assistance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
            {elderlyCarePackages.map((pkg) => {
              const isSelected = selectedTier === pkg.tier;

              return (
                <button
                  key={pkg.tier}
                  onClick={() => setSelectedTier(pkg.tier)}
                  type="button"
                  className={`w-full flex-1 text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#131927] border-slate-400/60 ring-1 ring-slate-400/20 border-dashed"
                      : "bg-[#0E1420] border-slate-800 hover:border-slate-700 hover:bg-[#111827]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Radio Indicator */}
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-slate-200 bg-transparent"
                          : "border-slate-600 bg-transparent"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                      )}
                    </div>

                    {/* Icon & Details */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#06111F] border border-slate-800 flex-shrink-0">
                        <Icon name={pkg.iconName} size={16} color="#60A5FA" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100 leading-tight">
                          {pkg.tier}{" "}
                          <span className="text-[#60A5FA]">{pkg.label}</span>
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-normal">
                          {pkg.from ? "From " : ""}
                          {pkg.price} {pkg.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-slate-400 group-hover:text-white transition-colors ml-2 flex-shrink-0">
                    {isSelected ? (
                      <ArrowRight size={16} />
                    ) : (
                      <ArrowUpRight size={16} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 bg-[#0E1420] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-800/80">
                <div>
                  <h3 className="text-base font-bold text-slate-100">
                    {activePkg?.tier} {activePkg?.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 italic">
                    {activePkg?.desc}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  {activePkg?.from && (
                    <span className="block text-[8px] font-bold uppercase text-[#60A5FA] tracking-wider">
                      From
                    </span>
                  )}
                  <span className="text-base font-extrabold text-white">
                    {activePkg?.price}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {activePkg?.period}
                  </span>
                </div>
              </div>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Includes:
              </h4>

              {/* Feature List */}
              <ul className="flex flex-col gap-3 mb-6">
                {activePkg?.features?.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-[#60A5FA]"
                    />
                    <span className="text-xs text-slate-300 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Integration */}
            <div className="pt-3 border-t border-slate-800/80 flex justify-center">
              <CTAButton
                label="Book a Care Assistant"
                serviceId="elderly-care"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyCarePackageCards;
