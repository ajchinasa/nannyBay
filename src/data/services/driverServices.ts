import * as Icons from "lucide-react";

export interface DriverServicePackage {
  iconName: keyof typeof Icons;
  tier: string;
  label: string;
  price: string;
  period: string;
  from: boolean;
  features: string[];
  desc?: string;
}

export const driverServicePackages: DriverServicePackage[] = [
  {
    iconName: "UserCircle",
    tier: "STANDARD",
    label: "",
    price: "₦ 160,000",
    period: "/Monthly",
    from: false,
    features: [
      "Drive client or family members to daily destinations",
      "Handle school runs and routine movements",
      "Maintain punctuality and professionalism",
      "Keep the vehicle clean (basic upkeep)",
      "Follow all safety and traffic regulations",
    ],
  },
  {
    iconName: "UserRoundCheck",
    tier: "EXECUTIVE",
    label: "",
    price: "₦ 220,000",
    period: "/Monthly",
    from: false,
    features: [
      "Includes all services in the standard package",
      "Adapt to changing schedules and extended hours when required",
      "Professional attire and corporate etiquette",
    ],
  },
  {
    iconName: "Clock",
    tier: "DAILY",
    label: "",
    price: "₦ 10,000",
    period: "/Hour",
    from: false,
    features: [
      "₦10,000 per hour with a minimum booking of 3 hours",
      "Additional time beyond agreed hours charged at ₦10,000/hr",
      "Overtime subject to driver's prior availability",
    ],
  },
];
