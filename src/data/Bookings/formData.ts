export interface ServicePackage {
  id: string;
  label: string;

  description: string;
}

export interface NannyService {
  id: string;
  label: string;
  bookingTitle: string;
  packages: ServicePackage[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phoneNumber: string;
  serviceId: string;
  packageId: string;
  state: string;
  address: string;
  requiredDate: string;
  extraNotes: string;
}

export const NANNY_SERVICES: NannyService[] = [
  {
    id: "house-keeping",
    label: "House Keeping",
    bookingTitle: "Housekeeper",

    packages: [
      {
        id: "basic-housekeeping",
        label: "Standard - ₦140,000/Monthly",
        description: "Monday to Friday, 8am – 6pm",
      },
      {
        id: "premium-housekeeping",
        label: "Premium - ₦180,000/Monthly",
        description: "Monday to Saturday, 8am – 6pm",
      },
      {
        id: "premiumplus-housekeeping",
        label: "Premium+ - ₦220,000/Monthly",
        description: "Nanny lives with the family, 6 days/week",
      },
      {
        id: "standard-live-out-housekeeping",
        label: "Standard live-out - ₦170,000",
        description: "Nanny lives with the family, 6 days/week",
      },
      {
        id: "premium-live-out-housekeeping",
        label: "Premium live-out - ₦210,000",
        description: "Nanny lives with the family, 6 days/week",
      },
      {
        id: "premium-plus-live-out-housekeeping",
        label: "live-out(Premium+) - ₦250,000",
        description: "Nanny lives with the family, 6 days/week",
      },
    ],
  },
  {
    id: "nanny-services",
    label: "Nanny services",
    bookingTitle: "Nanny",
    packages: [
      {
        id: "standard-nanny",
        label: "Standard - ₦150,000/Monthly",
        description: "Monday to Friday, 7am – 1pm",
      },
      {
        id: "premium-nanny",
        label: "Premium - ₦190,000/Monthly",
        description: "Monday to Friday, 1pm – 7pm",
      },
      {
        id: "premium-plus-nanny",
        label: "Premium+ - ₦220,000/Monthly",
        description: "Saturday and Sunday, flexible hours",
      },
      {
        id: "live-out-nanny",
        label: "Live out - ₦180,000/Month",
        description: "Saturday and Sunday, flexible hours",
      },
    ],
  },
  {
    id: "babysitting",
    label: "Babysitting",
    bookingTitle: "Baby Sitter",
    packages: [
      {
        id: "standard-babysitting-hours",
        label: "Standard Hours - ₦5,000/Per hour",
        description:
          "With a minimum booking of 3 hours. Additional time beyond the agreed hours, will attract an extra charge of N5000/per hour",
      },
      {
        id: "overnight-babysitting-hours",
        label: "Overnight - ₦50,000/Flat rate",
        description:
          " (E.G., 8 PM TO 8 AM). Additional time beyond the agreed hours, will attract an extra charge of N5000/per hour",
      },
    ],
  },
  {
    id: "elderly-care",
    label: "Elderly Care",
    bookingTitle: "Care Assistant",

    packages: [
      {
        id: "elderly-care-standard-care",
        label: "Standard - ₦150,000/Monthly",
        description: "(Non-medical)",
      },
      {
        id: "elderly-care-premium-care",
        label: "Premium - ₦200,000/Monthly",
        description: "(Non-medical)",
      },
      {
        id: "elderly-care-premium-plus-care",
        label: "Premium - ₦280,000/Monthly",
        description: "(Non-medical)",
      },
    ],
  },
  {
    id: "chefSevices",
    label: "Chef Serices",
    bookingTitle: "Chef",

    packages: [
      {
        id: "essential-local-chef",
        label: "Essential Local Chef - ₦180,000/Monthly",
        description: "Homework help and structured activities",
      },
      {
        id: "elite-ntercontinental-chef",
        label: "Elite Intercontinental & Local Chef - ₦280,000/Monthly",
        description: "Structured curriculum support, 5 days/week",
      },
      {
        id: "standard-live-out-chef",
        label: "live-out(Standard) - ₦210,000/Monthly",
        description: "Structured curriculum support, 5 days/week",
      },
      {
        id: "premium-live-out-chef",
        label: "live-out(Premium) - ₦310,000/Monthly",
        description: "Structured curriculum support, 5 days/week",
      },
    ],
  },
  {
    id: "driver-services",
    label: "Driver Serices",
    bookingTitle: "Driver",

    packages: [
      {
        id: "standard-driver-services",
        label: "Standard - ₦160,000/Monthly",
        description: "Homework help and structured activities",
      },
      {
        id: "executive-driver-services",
        label: "Executive - ₦220,000/Monthly",
        description: "Structured curriculum support, 5 days/week",
      },
      {
        id: "daily-driver-services",
        label: "Daily - ₦10,000/Hour",
        description: "Structured curriculum support, 5 days/week",
      },
    ],
  },
];

export const NIGERIA_STATES: string[] = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT – Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export const INITIAL_FORM_DATA: BookingFormData = {
  name: "",
  email: "",
  phoneNumber: "",
  serviceId: "",
  packageId: "",
  state: "",
  address: "",
  requiredDate: "",
  extraNotes: "",
};
