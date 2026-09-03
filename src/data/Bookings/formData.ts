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
        description: "",
      },
      {
        id: "premium-housekeeping",
        label: "Premium - ₦180,000/Monthly",
        description: "",
      },
      {
        id: "premiumplus-housekeeping",
        label: "Premium+ - ₦220,000/Monthly",
        description: "",
      },
      {
        id: "standard-live-out-housekeeping",
        label: "Standard live-out - ₦170,000",
        description: "",
      },
      {
        id: "premium-live-out-housekeeping",
        label: "Premium live-out - ₦210,000",
        description: "",
      },
      {
        id: "premium-plus-live-out-housekeeping",
        label: "live-out(Premium+) - ₦250,000",
        description: "",
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
        description: "",
      },
      {
        id: "premium-nanny",
        label: "Premium - ₦190,000/Monthly",
        description: "",
      },
      {
        id: "premium-plus-nanny",
        label: "Premium+ - ₦220,000/Monthly",
        description: "",
      },
      {
        id: "live-out-nanny",
        label: "Live out - ₦180,000/Month",
        description: "",
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
        description: "",
      },
      {
        id: "overnight-babysitting-hours",
        label: "Overnight - ₦50,000/Flat rate",
        description: "",
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
        label: "Standard (Non-medical) - ₦150,000/Monthly",
        description: "",
      },
      {
        id: "elderly-care-premium-care",
        label: "Premium (Non-medical) - ₦200,000/Monthly",
        description: "",
      },
      {
        id: "elderly-care-premium-plus-care",
        label: "Premium (Non-medical) - ₦280,000/Monthly",
        description: "",
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
        description: "",
      },
      {
        id: "elite-ntercontinental-chef",
        label: "Elite Intercontinental & Local Chef - ₦280,000/Monthly",
        description: "",
      },
      {
        id: "standard-live-out-chef",
        label: "live-out(Standard) - ₦210,000/Monthly",
        description: "",
      },
      {
        id: "premium-live-out-chef",
        label: "live-out(Premium) - ₦310,000/Monthly",
        description: "",
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
        description: "",
      },
      {
        id: "executive-driver-services",
        label: "Executive - ₦220,000/Monthly",
        description: "",
      },
      {
        id: "daily-driver-services",
        label: "Daily - ₦10,000/Hour",
        description: "",
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
