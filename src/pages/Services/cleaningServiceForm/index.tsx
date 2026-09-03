import { useState } from "react";
import {
  CalendarDays,
  ClipboardList,
  Home,
  Info,
  CheckCircle2,
} from "lucide-react";

import {
  type FormState,
  INITIAL_FORM_STATE,
  REQUIRED_FIELDS,
  PROPERTY_TYPES,
  CLEANING_TYPES,
  FREQUENCY_OPTIONS,
  ROOM_COUNTS,
  INPUT_CLASS,
} from "../../../data/services/cleaningForm";

import SectionHeader from "../../../components/ui/CleaningServiceComponents/SectionHeader";
import PillSelector from "../../../components/ui/CleaningServiceComponents/PillSelector";
import CheckboxButtons from "../../../components/ui/CleaningServiceComponents/CheckboxButtons";
import SuccessScreen from "../../../components/ui/CleaningServiceComponents/FormSuccessScreen";

const CleaningServiceForm = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    REQUIRED_FIELDS.forEach((key) => {
      if (!form[key]) newErrors[key] = "This field is required";
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
    setForm(INITIAL_FORM_STATE);
  };

  if (submitted) {
    return <SuccessScreen name={form.fullName} onReset={handleReset} />;
  }

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-screen-xl px-5 md:px-6">
        <div className="w-full max-w-2xl mx-auto bg-[#090D16] rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-6 md:px-10 pt-8 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-10 bg-[#1E40AF] rounded-full flex-shrink-0" />
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  CLEANING SERVICE
                </h2>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Fill in the details below and the NannyBay team will get back
                  to you with availability and a quote.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 md:px-10 py-8 flex flex-col gap-8">
            {/* Contact Information */}
            <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
              <SectionHeader icon={ClipboardList} title="Contact Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Phone Number / WhatsApp{" "}
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

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Email Address{" "}
                    <span className="text-slate-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. amaka@email.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Cleaning Address / Area{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 Bode Thomas Street, Surulere, Lagos"
                    value={form.address}
                    onChange={(e) => set("address", e.target.value)}
                    className={INPUT_CLASS}
                  />
                  {errors.address && (
                    <p className="text-xs text-red-400">{errors.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
              <SectionHeader icon={Home} title="Property Details" />
              <div className="flex flex-col gap-5">
                <PillSelector
                  label="Property Type"
                  required
                  options={PROPERTY_TYPES}
                  value={form.propertyType}
                  onChange={(val) => set("propertyType", val)}
                  error={errors.propertyType}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(
                    [
                      { label: "Number of Bedrooms", field: "bedrooms" },
                      { label: "Number of Bathrooms", field: "bathrooms" },
                      { label: "Number of Living Rooms", field: "livingRooms" },
                    ] as { label: string; field: keyof FormState }[]
                  ).map(({ label, field }) => (
                    <div key={field} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {label} <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={form[field]}
                        onChange={(e) => set(field, e.target.value)}
                        className={`${INPUT_CLASS} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {ROOM_COUNTS.map((n) => (
                          <option key={n} value={n} className="bg-[#06111f]">
                            {n}
                          </option>
                        ))}
                      </select>
                      {errors[field] && (
                        <p className="text-xs text-red-400">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <CheckboxButtons
                  label="Is the property currently occupied?"
                  required
                  options={["Yes", "No"]}
                  value={form.occupied}
                  onChange={(val) => set("occupied", val)}
                  error={errors.occupied}
                />
              </div>
            </div>

            {/* Cleaning Required */}
            <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
              <SectionHeader icon={ClipboardList} title="Cleaning Required" />
              <PillSelector
                label="Type of Cleaning"
                required
                options={CLEANING_TYPES}
                value={form.cleaningType}
                onChange={(val) => set("cleaningType", val)}
                error={errors.cleaningType}
              />
            </div>

            {/* Booking Details */}
            <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
              <SectionHeader icon={CalendarDays} title="Booking Details" />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Preferred Cleaning Date{" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => set("preferredDate", e.target.value)}
                    className={`${INPUT_CLASS} cursor-pointer`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-400">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <CheckboxButtons
                  label="How often do you need the service?"
                  optional
                  options={FREQUENCY_OPTIONS}
                  value={form.frequency}
                  onChange={(val) => set("frequency", val)}
                />
              </div>
            </div>

            {/* Special Requirements */}
            <div className="bg-[#0E1420] rounded-2xl border border-slate-800 p-6">
              <SectionHeader
                icon={ClipboardList}
                title="Anything We Should Know?"
              />
              <textarea
                rows={4}
                placeholder="Please briefly tell us about any special cleaning requirements, difficult areas, pets, or other important information."
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            {/* What Happens Next */}
            <div className="bg-[#1E40AF]/10 border border-[#1E40AF]/30 rounded-2xl p-6 flex gap-4">
              <Info size={18} className="text-[#60A5FA] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  What Happens Next?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Once your request is submitted, the NannyBay team will review
                  your cleaning requirements, confirm availability and provide
                  your service quote. Your booking is confirmed once payment is
                  received.
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pb-2">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 bg-[#1E40AF] hover:bg-blue-600 active:scale-95 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-blue-900/40 hover:shadow-blue-600/30 transition-all duration-200 text-sm"
              >
                Submit Cleaning Request
                <CheckCircle2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningServiceForm;
