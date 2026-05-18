import * as Icons from "lucide-react";

export interface BabySittingPackage {
  iconName: keyof typeof Icons;
  checkIconName: keyof typeof Icons;
  tier: string;
  label: string;
  desc: string;
  price: string;
  period: string;
  from: boolean;
}

export const babySittingPackage: BabySittingPackage[] = [
  {
    iconName: "Clock",
    checkIconName: "Check",
    tier: "STANDARD",
    label: "HOURS",
    desc: "With a minimum booking of 3 hours",
    price: "N 5,000",
    period: "/Per hour",
    from: false,
  },
  {
    iconName: "MoonStar",
    checkIconName: "Check",
    tier: "OVERNIGHT",
    label: "",
    desc: "(E.G., 8 PM TO 8 AM)",
    price: "NGN 50,000",
    period: "/Flat rate",
    from: false,
  },
  {
    iconName: "CalendarClock",
    checkIconName: "Check",
    tier: "EXTENSIONS ",
    label: "& OVERTIME",
    desc: "Additional time beyond the agreed hours, each extra hour will be charged at",
    price: "N 5,000",
    period: "/Per hour",
    from: false,
  },
];
