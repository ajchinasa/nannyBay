import {
  Users,
  Building2,
  Home,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Audience {
  icon: LucideIcon;
  iconColor: string;
  bg: string;
  title: string;
  desc: string;
}

const audiences: Audience[] = [
  {
    icon: Users,
    iconColor: "#1E40AF",
    bg: "#DBEAFE",
    title: "Parents",
    desc: "Busy mums and dads who need trusted, reliable help at home, so you can focus on your family, not the chores.",
  },
  {
    icon: Building2,
    iconColor: "#059669",
    bg: "#D1FAE5",
    title: "Companies",
    desc: "Businesses looking to provide professional home services as part of their employee benefits and welfare packages.",
  },
  {
    icon: Home,
    iconColor: "#D97706",
    bg: "#FEF3C7",
    title: "Airbnb Hosts",
    desc: "Short-let and holiday home owners who need consistent, high-quality housekeeping between guest stays.",
  },
  {
    icon: Briefcase,
    iconColor: "#7C3AED",
    bg: "#EDE9FE",
    title: "Executives",
    desc: "High-net-worth individuals and C-suite professionals who expect premium, discreet, and dependable home support.",
  },
  {
    icon: HeartHandshake,
    iconColor: "#DB2777",
    bg: "#FCE7F3",
    title: "Families",
    desc: "Households of all sizes who need daily home management; from childcare and cooking to cleaning and elderly care.",
  },
];

export default audiences;
