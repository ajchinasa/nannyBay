import * as Icons from "lucide-react";

export interface NannyPackage {
  iconName: keyof typeof Icons;
  tier: string;
  label: string;
  desc: string;
  price: string;
  period: string;
  from: boolean;
  features: string[];
}

export const nannyPackages: NannyPackage[] = [
  {
    iconName: "Home",
    tier: "STANDARD",
    label: "NANNY",
    desc: "Essential care for your child's daily needs.",
    price: "NGN 150,000",
    period: "/Monthly",
    from: false,
    features: [
      "Child care and supervision",
      "Meal preparation for the child",
      "Feeding and bottle preparation",
      "Bathing and dressing",
      "Playtime and age-appropriate engagement",
      "Light cleaning related to the child",
    ],
  },
  {
    iconName: "Baby",
    tier: "PREMIUM",
    label: "NANNY",
    desc: "Enhanced care with additional support around the home.",
    price: "NGN 190,000",
    period: "/Monthly",
    from: false,
    features: [
      "Includes everything in Standard",
      "Child's laundry and ironing",
      "Tidying up children's areas and play spaces",
      "Assistance with meal planning for the child",
      "Accompanying child to activities (nearby)",
      "Light housekeeping related to the child",
    ],
  },
  {
    iconName: "BookOpen",
    tier: "PREMIUM+",
    label: "NANNY",
    desc: "Comprehensive care with educational support.",
    price: "NGN 220,000",
    period: "/Monthly",
    from: false,
    features: [
      "Includes everything in Premium",
      "Early learning and educational activities",
      "Homework supervision",
      "Reading and storytelling",
      "Creativity and life skills development",
      "Parent updates and progress reports",
    ],
  },
  {
    iconName: "Car",
    tier: "LIVE OUT",
    label: "NANNY",
    desc: "Full-time care without residential stay.",
    price: "NGN 180,000",
    period: "/Month",
    from: true,
    features: [
      "Includes everything in Premium Plus",
      "Daily commute from home",
      "Flexible schedule and dedicated care",
      "Travel with the family (as required)",
      "Available on call",
    ],
  },
];
