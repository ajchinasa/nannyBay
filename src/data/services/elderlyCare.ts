import * as Icons from "lucide-react";

export interface ElderlyCarePackage {
  iconName: keyof typeof Icons;
  tier: string;
  label: string;
  desc: string;
  price: string;
  period: string;
  from: boolean;
  features: string[];
}

export const elderlyCarePackages: ElderlyCarePackage[] = [
  {
    iconName: "Sparkles",
    tier: "STANDARD",
    label: "CARE",
    desc: "(NON-MEDICAL)",
    price: "NGN 150,000",
    period: "/Monthly",
    from: true,
    features: [
      "Assistance with daily activities",
      "Meal preparation",
      "Light housekeeping",
      "Medication reminders",
      "Errands and appointments",
      "General support and companionship",
    ],
  },
  {
    iconName: "ShieldPlus",
    tier: "PREMIUM",
    label: "CARE",
    desc: "(NON-MEDICAL)",
    price: "NGN 200,000",
    period: "/Monthly",
    from: true,
    features: [
      "All Standard care services",
      "Assistance with mobility",
      "Personal hygiene support",
      "Incontinence care",
      "Dementia support",
      "Regular well-being check",
    ],
  },
  {
    iconName: "HouseHeart",
    tier: "PREMIUM+",
    label: "CARE",
    desc: "(NON-MEDICAL)",
    price: "NGN 280,000",
    period: "/Monthly",
    from: true,
    features: [
      "All Premium care services",
      "24/7 care and supervision",
      "Fall prevention and safety",
      "Care plan monitoring",
      "Full assistance with ADLs (bathing, feeding, etc.)",
    ],
  },
];
