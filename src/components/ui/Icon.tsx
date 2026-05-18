import type { LucideProps } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  color = "#60A5FA",
  size = 24,
  className,
  ...props
}: IconProps) => {
  const LucideIcon = Icons[name] as React.ElementType;

  if (!LucideIcon) {
    return null;
  }

  return (
    <LucideIcon
      color={color}
      size={size}
      className={className}
      strokeWidth={1.5}
      {...props}
    />
  );
};

export default Icon;
