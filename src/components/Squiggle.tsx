type SquiggleProps = {
  className?: string;
  color?: string;
};

export default function Squiggle({ className, color = '#1a1a1a' }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 10C12 2 22 18 32 10C42 2 52 18 62 10C72 2 82 18 92 10C102 2 112 18 122 10C132 2 142 18 152 10C162 2 172 18 182 10C188 6 194 8 198 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
