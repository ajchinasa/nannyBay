import { useState } from "react";
import {
  Users,
  ClipboardList,
  CalendarDays,
  Info,
  CheckCircle2,
} from "lucide-react";

import {
  type RecruitmentFormState,
  INITIAL_RECRUITMENT_FORM_STATE,
  REQUIRED_RECRUITMENT_FIELDS,
  STAFF_TYPES,
  LIVE_IN_OUT_OPTIONS,
  HOW_IT_WORKS,
  INPUT_CLASS,
} from "../../../data/services/recruitmentForm";

import SectionHeader from "../../../components/ui/CleaningServiceComponents/SectionHeader";
import CheckboxButtons from "../../../components/ui/CleaningServiceComponents/CheckboxButtons";
import SuccessScreen from "../../../components/ui/CleaningServiceComponents/FormSuccessScreen";

const RecruitmentForm = () => {
  const [form, setForm] = useState<RecruitmentFormState>(
    INITIAL_RECRUITMENT_FORM_STATE,
  );
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RecruitmentFormState, string>>
  >({});

  // Single-value fields
  const set = (field: keyof RecruitmentFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Multi-select toggle for staffRequired
  const toggleStaff = (type: string) => {
    setForm((prev) => {
      const current = prev.staffRequired;
      const updated = current.includes(type)
        ? current.filter((s) => s !== type)
        : [...current, type];
      return { ...prev, staffRequired: updated };
    });
    setErrors((prev) => ({ ...prev, staffRequired: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RecruitmentFormState, string>> = {};
    REQUIRED_RECRUITMENT_FIELDS.forEach((key) => {
      const val = form[key];
      const isEmpty = Array.isArray(val) ? val.length === 0 : !val;
      if (isEmpty) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(INITIAL_RECRUITMENT_FORM_STATE);
  };

  if (submitted) {
    return <SuccessScreen name={form.fullName} onReset={handleReset} />;
  }

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-screen-xl px-5 md:px-6">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
          {/* ── Service Description ── */}
          <div className="bg-[#090D16] rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden">
            <div className="px-6 md:px-10 pt-8 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-[#1E40AF] rounded-full flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    RECRUITMENT ONLY
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Find the right domestic staff. Manage them your way.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-10 py-8 flex flex-col gap-6">
              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                With our Recruitment Only service, NannyBay handles the
                sourcing, screening, and selection process for you. Once your
                preferred candidate is successfully placed, they become directly
                managed and paid by you.{" "}
                <span className="text-white font-semibold">
                  There are no monthly NannyBay service fees or ongoing staff
                  management.
                </span>
              </p>

              {/* Recruitment Fee */}
              <div className="bg-[#1E40AF]/10 border border-[#1E40AF]/30 rounded-2xl p-5 flex gap-4">
                <Info
                  size={18}
                  className="text-[#60A5FA] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Recruitment Fee
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    One-time fee:{" "}
                    <span className="text-white font-semibold">
                      5% of the staff member's annual gross salary.
                    </span>
                    <br />
                    <span className="text-slate-400 mt-1 block">
                      Example: Staff salary of ₦150,000/month → Annual salary
                      ₦1,800,000 →{" "}
                      <span className="text-white font-semibold">
                        Recruitment fee: ₦90,000 one-time.
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <div>
                <SectionHeader icon={ClipboardList} title="How It Works" />
                <div className="flex flex-col gap-3">
                  {HOW_IT_WORKS.map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-4 bg-[#0E1420] border border-slate-800 rounded-2xl p-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-extrabold text-[#60A5FA]">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Staff Request Form ── */}
          <div className="bg-[#090D16] rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden">
            <div className="px-6 md:px-10 pt-8 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-[#1E40AF] rounded-full flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    STAFF REQUEST FORM
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Fill in the details below and NannyBay will begin your
                    candidate search.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-10 py-8 flex flex-col gap-6">
              {/* Contact & Location */}
              <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
                <SectionHeader icon={Users} title="Your Details" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Amaka Johnson"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                      className={INPUT_CLASS}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Phone / WhatsApp Number{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={INPUT_CLASS}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Location <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lekki Phase 1, Lagos"
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      className={INPUT_CLASS}
                    />
                    {errors.location && (
                      <p className="text-xs text-red-400">{errors.location}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Staff Details */}
              <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
                <SectionHeader
                  icon={ClipboardList}
                  title="Staff Requirements"
                />
                <div className="flex flex-col gap-5">
                  {/* Staff Required — multi select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Staff Required <span className="text-red-400">*</span>
                      <span className="text-slate-500 font-normal ml-1">
                        (select all that apply)
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {STAFF_TYPES.map((type) => {
                        const selected = form.staffRequired.includes(type);
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleStaff(type)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                              selected
                                ? "bg-[#1E40AF] border-[#60A5FA]/50 text-white"
                                : "bg-[#06111f] border-slate-700 text-slate-300 hover:border-slate-500"
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                                selected
                                  ? "border-white bg-white"
                                  : "border-slate-500"
                              }`}
                            >
                              {selected && (
                                <span className="w-2 h-2 rounded-sm bg-[#1E40AF] block" />
                              )}
                            </span>
                            {type}
                          </button>
                        );
                      })}
                    </div>
                    {errors.staffRequired && (
                      <p className="text-xs text-red-400">
                        {errors.staffRequired}
                      </p>
                    )}
                  </div>

                  {/* Live-In or Live-Out */}
                  <CheckboxButtons
                    label="Live-In or Live-Out"
                    required
                    options={LIVE_IN_OUT_OPTIONS}
                    value={form.liveInOut}
                    onChange={(val) => set("liveInOut", val)}
                    error={errors.liveInOut}
                  />

                  {/* Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Budget for Role <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₦150,000/month"
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className={INPUT_CLASS}
                    />
                    {errors.budget && (
                      <p className="text-xs text-red-400">{errors.budget}</p>
                    )}
                  </div>

                  {/* Start Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-[#60A5FA]" />
                      Preferred Start Date{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      value={form.startDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => set("startDate", e.target.value)}
                      className={`${INPUT_CLASS} cursor-pointer`}
                    />
                    {errors.startDate && (
                      <p className="text-xs text-red-400">{errors.startDate}</p>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-[#1E40AF]/10 border border-[#1E40AF]/30 rounded-2xl p-5 flex gap-4">
                    <Info
                      size={18}
                      className="text-[#60A5FA] flex-shrink-0 mt-0.5"
                    />
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <span className="text-white font-semibold">
                        Please note:{" "}
                      </span>
                      This is a recruitment-only service. Following successful
                      placement, the staff member is employed and managed
                      directly by the client. NannyBay does not provide ongoing
                      staff supervision, payroll management, or monthly service
                      management under this option.
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center pb-2">
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-blue-600 active:scale-95 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 text-sm"
                    >
                      Submit Recruitment Request
                      <CheckCircle2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentForm;
