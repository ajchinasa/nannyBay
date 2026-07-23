import React from "react";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-6 gap-6">
      {/* Checkmark icon */}
      <div className="w-16 h-16 rounded-full bg-[#06111f] flex items-center justify-center flex-shrink-0">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-[#06111f]">
          Request Received
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out. We've received your booking request and
          will be in touch within 24 hours to confirm your service placement.
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-2 text-sm text-[#06111f] underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        Submit another request
      </button>
    </div>
  );
};

export default SuccessMessage;
