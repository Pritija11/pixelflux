type IconProps = {
  size?: number;
  strokeWidth?: number;
};

export function InstagramIcon({ size = 20, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DribbbleIcon({ size = 20, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M4 9.5c2.8 1 10 2.2 15.5 0.6" />
      <path d="M8.2 3.3c2.6 3.3 4.7 8.2 4.9 17" />
      <path d="M15.4 4.2c-1.4 3-4.7 7-10.8 9.6" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V10" />
      <path d="M11.5 12.8c0-1.5 1.1-2.4 2.3-2.4 1.3 0 2.2 0.9 2.2 2.6v3.5" />
    </svg>
  );
}
