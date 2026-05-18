import { Shield, Heart, Star, Clock, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Value {
  icon: LucideIcon;
  iconColor: string;
  bg: string;
  title: string;
  body: string;
}

const values: Value[] = [
  {
    icon: Shield,
    iconColor: "#1E40AF",
    bg: "#DBEAFE",
    title: "Trust",
    body: "Every NannyBay professional is thoroughly vetted, background-checked, and trained before entering your home. Your safety and comfort come first.",
  },
  {
    icon: Heart,
    iconColor: "#059669",
    bg: "#D1FAE5",
    title: "Compassion",
    body: "We care about the people we serve, from the families we work with to the professionals we empower. Everything we do is driven by genuine care.",
  },
  {
    icon: Star,
    iconColor: "#D97706",
    bg: "#FEF3C7",
    title: "Excellence",
    body: "We hold ourselves to the highest standards. Whether it's a deep clean or daily childcare, we show up prepared and deliver with pride.",
  },
  {
    icon: Clock,
    iconColor: "#7C3AED",
    bg: "#EDE9FE",
    title: "Reliability",
    body: "When you book with NannyBay, we show up on time, every time. You can count on us.",
  },
  {
    icon: Lock,
    iconColor: "#DB2777",
    bg: "#FCE7F3",
    title: "Discretion",
    body: "Your home is your private space. We respect your privacy and maintain the highest level of professionalism at all times.",
  },
];

export default values;
