interface SectionHeaderProps {
  icon: React.ElementType;
  title: string;
}

const SectionHeader = ({ icon: Icon, title }: SectionHeaderProps) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-8 h-8 rounded-lg bg-[#1E40AF]/20 border border-[#1E40AF]/30 flex items-center justify-center flex-shrink-0">
      <Icon size={15} className="text-[#60A5FA]" />
    </div>
    <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
      {title}
    </h3>
  </div>
);

export default SectionHeader;
