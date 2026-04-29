import { Link } from "@tanstack/react-router";

const BLUE = "#1E90E8";

const ARMS = [0, 60, 120, 180, 240, 300];

interface LogoProps {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

function Snowflake({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ARMS.map((angle) => (
        <g key={angle} transform={`rotate(${angle}, 50, 50)`} stroke={BLUE} strokeWidth="6.5">
          <line x1="50" y1="50" x2="50" y2="7" />
          <line x1="50" y1="27" x2="37" y2="19" />
          <line x1="50" y1="27" x2="63" y2="19" />
          <line x1="50" y1="39" x2="41" y2="31" />
          <line x1="50" y1="39" x2="59" y2="31" />
        </g>
      ))}
    </svg>
  );
}

const sizeMap = {
  sm: { icon: 26, wordmark: "text-lg", super: "text-xs" },
  md: { icon: 32, wordmark: "text-2xl", super: "text-sm" },
  lg: { icon: 44, wordmark: "text-4xl", super: "text-base" },
};

export function Logo({ light = false, size = "md", className = "", asLink = true }: LogoProps) {
  const s = sizeMap[size];
  const textColor = light ? "#ffffff" : "currentColor";

  const inner = (
    <span className={`flex items-center gap-2 ${className}`}>
      <Snowflake size={s.icon} />
      <span className="flex items-baseline gap-0.5">
        <span
          className={`font-sans font-bold uppercase tracking-[-0.02em] leading-none ${s.wordmark}`}
          style={{ color: textColor }}
        >
          Rožaje
        </span>
        <span
          className={`font-sans font-bold leading-none ${s.super}`}
          style={{ color: BLUE }}
        >
          365
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link to="/" className="focus-visible:outline-none">
      {inner}
    </Link>
  );
}
