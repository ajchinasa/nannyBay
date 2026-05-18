export interface QuickLink {
  label: string;
  to: string;
  hash?: boolean;
}

export const quickLinks: QuickLink[] = [
  {
    label: "Home",
    to: "/#hero",
    hash: true,
  },
  {
    label: "About Us",
    to: "/#about",
    hash: true,
  },
  {
    label: "Services",

    to: "/services",
    hash: false,
  },
];
