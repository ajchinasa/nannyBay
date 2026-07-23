import { Link } from "react-router-dom";

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  to?: string;
  serviceId?: string;
}

const CTAButton = ({ label, onClick, to, serviceId }: CTAButtonProps) => {
  const className =
    "inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90 active:scale-95";

  const style = {
    background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)",
    color: "white",
    boxShadow: "0 4px 24px rgba(30,64,175,0.35)",
  };

  const href = serviceId ? `/booking?service=${serviceId}` : to;

  if (href) {
    return (
      <Link to={href} className={className} style={style}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} style={style}>
      {label}
    </button>
  );
};

export default CTAButton;
