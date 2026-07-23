export interface ServiceLink {
  label: string;
  to: string;
}

const services: ServiceLink[] = [
  {
    label: "Housekeeping",
    to: "/services#housekeeping",
  },
  {
    label: "Nanny Services",
    to: "/services#nanny-services",
  },
  {
    label: "Babysitting",
    to: "/services#babysitting",
  },
  {
    label: "Chef Services",
    to: "/services#chef",
  },
  {
    label: "Driver Services",
    to: "/services#driver",
  },
  {
    label: "Elderly Care",
    to: "/services#elderly",
  },
];

export default services;
