import * as Icons from "lucide-react";

export interface HouseKeepingPackage {
  iconName: keyof typeof Icons;
  checkIconName: keyof typeof Icons;
  tier: string;
  label: string;
  desc: string;
  price: string;
  period: string;
  from: boolean;
  features: string[];
}

export const houseKeepingPackage: HouseKeepingPackage[] = [
  {
    iconName: "Warehouse",
    checkIconName: "Check",
    tier: "STANDARD",
    label: "HOUSEKEEPING",
    desc: "",
    price: "N 140,000",
    period: "/Monthly",
    from: false,
    features: [
      "Handles general cleaning of the home",
      "Sweeping, moping, dusting",
      "Cleans kitchen & bathrooms",
      "Manages laundry (washing & ironing)",
      "Organizes & maintains wardrobes",
      "Assists with light errands (limited & necessary only)",
    ],
  },
  {
    iconName: "Sparkle",
    checkIconName: "Check",
    tier: "PREMIUM",
    label: "HOUSEKEEPING",
    desc: "",
    price: "NGN 180,000",
    period: "/Monthly",
    from: false,
    features: [
      "Includes all standard housekeeping services",
      "Maintains a higher level of cleanliness & attention to detail",
      "Performs scheduled deep cleaning (not daily)",
      "Ensures the home remains consistently neat and well-arranged",
      "Provides light kitchen assistance (not full cooking)",
    ],
  },
  {
    iconName: "Sparkles",
    checkIconName: "Check",
    tier: "PREMIUM+",
    label: "HOUSEKEEPING",
    desc: "",
    price: "N 220,000",
    period: "/Monthly",
    from: false,
    features: [
      "Includes all premium housekeeping services",
      "Prepares daily meals for the household (home-style cooking)",
      "Manages full household organization & upkeep",
      "Oversees smooth day-to-day running of the home",
      "Assists with errands (reasonable & structured)",
    ],
  },
  {
    iconName: "HouseHeart",
    checkIconName: "Check",
    tier: "LIVE OUT",
    label: "HOUSEKEEPING",
    desc: "",
    price: "N 170,000",
    period: "/Monthly",
    from: true,
    features: [
      "Standard live-out - N 170,000",
      "Premium live-out - N 210,000",
      "Premium plus live-out - N 250,000",
    ],
  },
];
