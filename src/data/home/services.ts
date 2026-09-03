import {
  Sparkles,
  Baby,
  Heart,
  ChefHat,
  Car,
  HandHeart,
  SprayCan,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  path: string;
}

const services: Service[] = [
  {
    icon: Sparkles,
    iconColor: "#1E40AF",
    title: "Housekeeping",
    path: "/services#housekeeping",
  },
  {
    icon: Baby,
    iconColor: "#059669",
    title: "Nanny Services",
    path: "/services#nanny-services",
  },
  {
    icon: Heart,
    iconColor: "#DB2777",
    title: "Babysitting",
    path: "/services#babysitting",
  },
  {
    icon: ChefHat,
    iconColor: "#D97706",
    title: "Chef Services",
    path: "/services#chef",
  },
  {
    icon: Car,
    iconColor: "#7C3AED",
    title: "Driver Services",
    path: "/services#driver",
  },
  {
    icon: HandHeart,
    iconColor: "#059669",
    title: "Elderly Care",
    path: "/services#elderly",
  },
  {
    icon: SprayCan,
    iconColor: "#059669",
    title: "Cleaning Service",
    path: "/services#cleaning",
  },
];

export default services;
