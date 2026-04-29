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
        <g key={angle} transform={`rotate(${angle}, 50, 50)`} stroke={BLUE} strokeWidth="7.5">
          <line x1="50" y1="50" x2="50" y2="6" />
          <line x1="50" y1="14" x2="43" y2="6" />
          <line x1="50" y1="14" x2="57" y2="6" />
          <line x1="50" y1="28" x2="40" y2="18" />
          <line x1="50" y1="28" x2="60" y2="18" />
        </g>
      ))}
    </svg>
  );
}

const sizeMap = {
  sm: { icon: 28, wordmark: "text-base", super: "text-[9px]", gap: "gap-1.5" },
  md: { icon: 36, wordmark: "text-xl", super: "text-[10px]", gap: "gap-2" },
  lg: { icon: 52, wordmark: "text-3xl", super: "text-sm", gap: "gap-2.5" },
};

export function Logo({ light = false, size = "md", className = "", asLink = true }: LogoProps) {
  const s = sizeMap[size];
  const textColor = light ? "#ffffff" : "currentColor";

  const inner = (
    <span className={`flex items-center ${s.gap} ${className}`}>
      <Snowflake size={s.icon} />
      <span className="relative inline-flex items-start">
        <span
          className={`uppercase leading-[0.85] ${s.wordmark}`}
          style={{
            color: textColor,
            fontFamily: '"Bowlby One", "Inter", sans-serif',
            letterSpacing: "-0.01em",
          }}
        >
          Rožaje
        </span>
        <span
          className={`ml-0.5 leading-none ${s.super}`}
          style={{
            color: BLUE,
            fontFamily: '"Bowlby One", "Inter", sans-serif',
            transform: "translateY(-0.1em)",
          }}
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
