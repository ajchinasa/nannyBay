import * as Icons from "lucide-react";

export interface ChefServicePackage {
  iconName: keyof typeof Icons;
  tier: string;
  desc: string;
  price: string;
  period: string;
  from: boolean;
  features: string[];
}

export const chefServicePackage: ChefServicePackage[] = [
  {
    iconName: "Soup",
    tier: "ESSENTIAL",
    desc: "LOCAL CHEF",
    price: "₦ 180,000",
    period: "/Monthly",
    from: false,
    features: [
      "Prepares everyday local meals (rice, soups, stews, etc)",
      "Handles basic breakfast, lunch, and dinner",
      "Maintains kitchen cleanliness after cooking",
      "Washes and organizes cooking utensils",
      "Ensures proper food hygiene and storage",
    ],
  },
  {
    iconName: "UtensilsCrossed",
    tier: "ELITE",
    desc: "INTERCONTINENTAL & LOCAL CHEF",
    price: "₦ 280,000",
    period: "/Monthly",
    from: false,
    features: [
      "Prepare a wide range of local and continental meals",
      "Plans meals based on family preferences and dietary needs",
      "Small special event catering",
      "Maintains a clean, organized, and professional kitchen",
      "Storage, and kitchen management",
      "Supports special meal requests when required",
    ],
  },
  {
    iconName: "Home",
    tier: "LIVE-OUT",
    desc: "CHEF",
    price: "₦ 210,000",
    period: "/Monthly",
    from: true,
    features: [
      "Standard live-out - ₦ 210,000/Monthly",
      "Premium live-out - ₦ 310,000/Monthly",
    ],
  },
];
