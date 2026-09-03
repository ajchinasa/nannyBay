interface PillSelectorProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  error?: string;
  label: string;
  required?: boolean;
  optional?: boolean;
}

const PillSelector = ({
  options,
  value,
  onChange,
  error,
  label,
  required,
  optional,
}: PillSelectorProps) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-slate-300">
      {label} {required && <span className="text-red-400">*</span>}
      {optional && (
        <span className="text-slate-500 font-normal ml-1">(optional)</span>
      )}
    </label>
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(value === opt ? "" : opt)}
          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
            value === opt
              ? "bg-[#1E40AF] border-[#60A5FA]/50 text-white"
              : "bg-[#06111f] border-slate-700 text-slate-300 hover:border-slate-500"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
    {error && <p className="text-xs text-red-400">{error}</p>}
  </div>
);

export default PillSelector;
