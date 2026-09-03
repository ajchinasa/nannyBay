import { CheckCircle2 } from "lucide-react";

interface SuccessScreenProps {
  name: string;
  onReset: () => void;
}

const SuccessScreen = ({ name, onReset }: SuccessScreenProps) => (
  <section className="w-full py-16">
    <div className="mx-auto max-w-screen-xl px-5 md:px-6">
      <div className="w-full max-w-2xl mx-auto p-10 bg-[#090D16] rounded-3xl border border-slate-800/80 shadow-2xl flex flex-col items-center text-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#1E40AF]/20 border border-[#1E40AF]/40 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-[#60A5FA]" />
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Request Submitted!
        </h2>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed">
          Thank you, <span className="text-white font-semibold">{name}</span>.
          The NannyBay team will review your cleaning requirements, confirm
          availability, and provide your service quote. Your booking is
          confirmed once payment is received.
        </p>
        <button
          onClick={onReset}
          className="mt-2 px-6 py-2.5 rounded-full text-sm font-bold bg-[#1E40AF] hover:bg-blue-600 text-white transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    </div>
  </section>
);

export default SuccessScreen;
