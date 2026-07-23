import React, { useState } from "react";
import {
  NANNY_SERVICES,
  NIGERIA_STATES,
  INITIAL_FORM_DATA,
  type BookingFormData,
} from "../../data/Bookings/formData";
import FormField from "./FormField";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import SuccessMessage from "./SuccessMessage";

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

const MAX_NOTES_LENGTH = 600;

// Props
interface BookingFormProps {
  preselectedService?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService = "",
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    ...INITIAL_FORM_DATA,
    serviceId: preselectedService,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedService = NANNY_SERVICES.find(
    (s) => s.id === formData.serviceId,
  );

  // Field change handlers
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "serviceId") {
        return { ...prev, serviceId: value, packageId: "" };
      }
      return { ...prev, [name]: value };
    });

    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validation
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[- \d\s+()]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }
    if (!formData.serviceId) newErrors.serviceId = "Please select a service.";
    if (formData.serviceId && !formData.packageId) {
      newErrors.packageId = "Please select a package.";
    }
    if (!formData.state) newErrors.state = "Please select your state.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.requiredDate) {
      newErrors.requiredDate = "Please select when you need the service.";
    }
    if (formData.extraNotes.length > MAX_NOTES_LENGTH) {
      newErrors.extraNotes = `Notes must be ${MAX_NOTES_LENGTH} characters or fewer.`;
    }

    return newErrors;
  };

  // Submit Handler
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitError("");

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = document.querySelector("[aria-invalid='true']");

      firstErrorField?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace this with your API call (e.g., Zoho Forms / Zoho CRM submission)
      console.log("Booking submitted:", formData);

      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ ...INITIAL_FORM_DATA, serviceId: preselectedService });
    setErrors({});
    setIsSuccess(false);
    setSubmitError("");
  };

  // Render Success State
  if (isSuccess) {
    return <SuccessMessage onReset={handleReset} />;
  }

  const notesRemaining = MAX_NOTES_LENGTH - formData.extraNotes.length;

  const headerLabel = selectedService
    ? `Book a ${selectedService.bookingTitle}`
    : "Book a Service";

  return (
    <div className="flex flex-col gap-5">
      {/* Header — title updates dynamically based on selected/preselected service */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#06111f] leading-tight">
          {headerLabel}
        </h1>
        <p className="text-sm text-gray-500">
          Fill in your details and we'll match you with the right professional
          within 24 hours.
        </p>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-4">
        {/* Name */}
        <FormField label="Full Name" required error={errors.name}>
          <TextInput
            name="name"
            placeholder="e.g. Amaka Okonkwo"
            value={formData.name}
            onChange={handleChange}
            hasError={!!errors.name}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
        </FormField>

        {/* Email */}
        <FormField label="Email Address" required error={errors.email}>
          <TextInput
            name="email"
            type="email"
            placeholder="e.g. amaka@email.com"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
        </FormField>

        {/* Phone */}
        <FormField label="Phone Number" required error={errors.phoneNumber}>
          <TextInput
            name="phoneNumber"
            type="tel"
            placeholder="e.g. +234 801 234 5678"
            value={formData.phoneNumber}
            onChange={handleChange}
            hasError={!!errors.phoneNumber}
            aria-invalid={!!errors.phoneNumber}
            autoComplete="tel"
          />
        </FormField>

        {/* Service */}
        <FormField label="Service" required error={errors.serviceId}>
          <SelectInput
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            hasError={!!errors.serviceId}
            aria-invalid={!!errors.serviceId}
            placeholder="Select a service"
            options={NANNY_SERVICES.map((s) => ({
              value: s.id,
              label: s.label,
            }))}
          />
        </FormField>

        {/* Package — only visible after service is selected */}
        {formData.serviceId && (
          <div className="animate-fadeIn">
            <FormField label="Package" required error={errors.packageId}>
              <SelectInput
                name="packageId"
                value={formData.packageId}
                onChange={handleChange}
                hasError={!!errors.packageId}
                aria-invalid={!!errors.packageId}
                placeholder="Select a package"
                options={
                  selectedService?.packages.map((p) => ({
                    value: p.id,
                    label: p.label,
                  })) ?? []
                }
              />
              {formData.packageId && (
                <p className="text-xs text-gray-500 mt-1">
                  {
                    selectedService?.packages.find(
                      (p) => p.id === formData.packageId,
                    )?.description
                  }
                </p>
              )}
            </FormField>
          </div>
        )}

        {/* State */}
        <FormField label="State" required error={errors.state}>
          <SelectInput
            name="state"
            value={formData.state}
            onChange={handleChange}
            hasError={!!errors.state}
            aria-invalid={!!errors.state}
            placeholder="Select your state"
            options={NIGERIA_STATES.map((s) => ({ value: s, label: s }))}
          />
        </FormField>

        {/* Address */}
        <FormField label="Home Address" required error={errors.address}>
          <TextInput
            name="address"
            placeholder="e.g. 12 Adeola Odeku Street, Victoria Island"
            value={formData.address}
            onChange={handleChange}
            hasError={!!errors.address}
            aria-invalid={!!errors.address}
            autoComplete="street-address"
          />
        </FormField>

        {/* Required Date */}
        <FormField
          label="When Do You Require our Service?"
          required
          error={errors.requiredDate}
        >
          <TextInput
            name="requiredDate"
            type="date"
            value={formData.requiredDate}
            onChange={handleChange}
            hasError={!!errors.requiredDate}
            aria-invalid={!!errors.requiredDate}
            min={new Date().toISOString().split("T")[0]}
          />
        </FormField>

        {/* Extra Notes */}
        <FormField label="Additional Notes" error={errors.extraNotes}>
          <div className="relative">
            <textarea
              name="extraNotes"
              rows={4}
              placeholder="Any allergies, special requirements, or other details we should know..."
              value={formData.extraNotes}
              onChange={handleChange}
              maxLength={MAX_NOTES_LENGTH}
              aria-invalid={!!errors.extraNotes}
              className={`
                w-full px-4 py-2.5 rounded-lg border text-sm text-[#06111f]
                bg-white placeholder-gray-400 outline-none transition-all duration-200
                resize-none focus:ring-2 focus:ring-[#06111f]/20 focus:border-[#06111f]
                ${errors.extraNotes ? "border-red-400" : "border-gray-300"}
              `}
            />
            <span
              className={`absolute bottom-2.5 right-3 text-xs ${
                notesRemaining < 50 ? "text-red-400" : "text-gray-400"
              }`}
            >
              {notesRemaining} characters remaining
            </span>
          </div>
        </FormField>
      </div>

      {/* Submit error */}
      {submitError && (
        <p className="text-sm text-red-500 text-center" role="alert">
          {submitError}
        </p>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`
          w-full py-3 px-6 rounded-lg text-white text-sm font-semibold
          transition-all duration-200 mt-1
          ${
            isSubmitting
              ? "bg-[#06111f]/60 cursor-not-allowed"
              : "bg-[#06111f] hover:bg-[#0d2240] active:scale-[0.98]"
          }
        `}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending Request...
          </span>
        ) : (
          "Send Booking Request"
        )}
      </button>

      <p className="text-xs text-center text-gray-400">
        We'll respond within 24 hours to confirm your booking.
      </p>
    </div>
  );
};

export default BookingForm;
