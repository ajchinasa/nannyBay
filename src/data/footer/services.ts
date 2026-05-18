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
    to: "/services#chef-services",
  },
  {
    label: "Driver Services",
    to: "/services#driver-services",
  },
  {
    label: "Elderly Care",
    to: "/services#elderly-care",
  },
];

export default services;
