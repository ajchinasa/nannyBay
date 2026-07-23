import nannyBg from "../../assets/images/servicePage/nannyCareBGIMG.webp";
import elderlyBg from "../../assets/images/servicePage/eldercareBG.webp";
import driverBg from "../../assets/images/servicePage/driverBG.webp";
import chefBg from "../../assets/images/servicePage/chefBG.webp";
import babysittingBg from "../../assets/images/servicePage/BabySittingBGIMG.webp";
import housekeepingBg from "../../assets/images/servicePage/housekeepingBG.webp";

export interface ServiceItem {
  id: string;
  name: string;
  bgImage: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "nanny",
    name: "Nanny",
    bgImage: nannyBg,
  },
  {
    id: "elderly",
    name: "Elderly Care",
    bgImage: elderlyBg,
  },
  {
    id: "driver",
    name: "Driver",
    bgImage: driverBg,
  },
  {
    id: "chef",
    name: "Chef",
    bgImage: chefBg,
  },
  {
    id: "babysitting",
    name: "Babysitting",
    bgImage: babysittingBg,
  },
  {
    id: "housekeeping",
    name: "Housekeeping",
    bgImage: housekeepingBg,
  },
];
