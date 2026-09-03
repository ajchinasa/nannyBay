export interface FormState {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  livingRooms: string;
  occupied: string;
  cleaningType: string;
  preferredDate: string;
  frequency: string;
  notes: string;
}

export const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  livingRooms: "",
  occupied: "",
  cleaningType: "",
  preferredDate: "",
  frequency: "",
  notes: "",
};

export const REQUIRED_FIELDS: (keyof FormState)[] = [
  "fullName",
  "phone",
  "address",
  "propertyType",
  "bedrooms",
  "bathrooms",
  "livingRooms",
  "occupied",
  "cleaningType",
  "preferredDate",
];

export const PROPERTY_TYPES = [
  "Apartment",
  "Duplex",
  "Detached House",
  "Office",
  "Other",
];

export const CLEANING_TYPES = [
  "Regular Home Cleaning",
  "Deep Cleaning",
  "Move-In/Move-Out Cleaning",
  "Post-Construction Cleaning",
  "Office Cleaning",
  "Other",
];

export const FREQUENCY_OPTIONS = ["One-Time", "Weekly", "Bi-Weekly", "Monthly"];

export const ROOM_COUNTS = ["0", "1", "2", "3", "4", "5", "6+"];

export const INPUT_CLASS =
  "w-full bg-[#06111f] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-colors";
