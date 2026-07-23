import React from "react";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

interface SelectInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
  "aria-invalid"?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  value,
  onChange,
  hasError = false,
  placeholder = "Select an option",
  options,
}) => {
  const selected = options.find((o) => o.value === value) ?? null;

  // Headless UI returns the option value directly, so we
  // simulate a change event to keep BookingForm's handleChange working
  const handleChange = (val: string) => {
    const syntheticEvent = {
      target: { name, value: val },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
  };

  return (
    <Listbox value={value} onChange={handleChange}>
      <div className="relative">
        {/* Trigger button */}
        <ListboxButton
          className={`
            w-full px-4 py-2.5 rounded-lg border text-sm text-left
            bg-white outline-none transition-all duration-200 cursor-pointer
            flex items-center justify-between
            focus:ring-2 focus:ring-[#06111f]/20 focus:border-[#06111f]
            ${hasError ? "border-red-400 focus:ring-red-200" : "border-gray-300"}
            ${!selected ? "text-gray-400" : "text-[#06111f]"}
          `}
        >
          <span>{selected ? selected.label : placeholder}</span>
          <svg
            className="w-4 h-4 text-gray-400 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </ListboxButton>

        {/* Dropdown options */}
        <ListboxOptions
          className="
            absolute z-50 mt-1 w-full
            bg-white border border-gray-200 rounded-lg shadow-lg
            max-h-52 overflow-y-auto
            focus:outline-none text-sm
          "
        >
          {options.map((opt) => (
            <ListboxOption
              key={opt.value}
              value={opt.value}
              className={({ focus }) =>
                `flex items-center justify-between px-4 py-2.5 cursor-pointer select-none
                ${focus ? "bg-[#06111f]/5 text-[#06111f]" : "text-gray-700"}`
              }
            >
              {({ selected: isSelected }) => (
                <>
                  <span
                    className={isSelected ? "font-medium text-[#06111f]" : ""}
                  >
                    {opt.label}
                  </span>
                  {isSelected && (
                    <svg
                      className="w-4 h-4 text-[#06111f] flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectInput;
