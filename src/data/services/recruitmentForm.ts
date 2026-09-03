export interface RecruitmentFormState {
  fullName: string;
  phone: string;
  location: string;
  staffRequired: string[];
  liveInOut: string;
  budget: string;
  startDate: string;
}

export const INITIAL_RECRUITMENT_FORM_STATE: RecruitmentFormState = {
  fullName: "",
  phone: "",
  location: "",
  staffRequired: [],
  liveInOut: "",
  budget: "",
  startDate: "",
};

export const REQUIRED_RECRUITMENT_FIELDS: (keyof RecruitmentFormState)[] = [
  "fullName",
  "phone",
  "location",
  "staffRequired",
  "liveInOut",
  "budget",
  "startDate",
];

export const STAFF_TYPES = [
  "Nanny",
  "Housekeeper",
  "Chef",
  "Driver",
  "Caregiver",
  "Other",
];

export const LIVE_IN_OUT_OPTIONS = ["Live-In", "Live-Out"];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell Us What You Need",
    desc: "Complete a short form detailing the type of staff, duties, schedule, location, and salary budget.",
  },
  {
    step: "02",
    title: "We Recruit & Screen",
    desc: "NannyBay sources, interviews, screens, and shortlists suitable candidates.",
  },
  {
    step: "03",
    title: "Meet Your Candidates",
    desc: "You review shortlisted profiles and interview your preferred candidates.",
  },
  {
    step: "04",
    title: "Select & Hire",
    desc: "Once you choose a candidate, we coordinate the placement and handover.",
  },
  {
    step: "05",
    title: "You Manage Your Staff",
    desc: "After placement, salary, supervision, welfare, and performance management are handled directly by you.",
  },
];

export const INPUT_CLASS =
  "w-full bg-[#06111f] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-colors";
