const iconPaths = {
  ai: (
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m18.4 5.6-2.1 2.1" />
      <path d="m7.7 16.3-2.1 2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  code: (
    <>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
      <path d="m13 5-2 14" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.2-4-2-5.5-2.5M14.5 22v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.6-1.3 5.6-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C5.9 3 4.9 3.3 4.9 3.3a4.4 4.4 0 0 0-.1 3.3 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V22" />
  ),
  instagram: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  product: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <rect width="8" height="8" x="13" y="3" rx="2" />
      <rect width="8" height="8" x="3" y="13" rx="2" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.2 1-2 2.5-2 4 1.5 0 3-.8 4-2" />
      <path d="M12 15 9 12c.6-3.8 3.2-7.2 8-9 1.3 4.8-.6 8.7-4 11Z" />
      <path d="m9 12-4 1 1-4 3-3 6 6-3 3Z" />
      <path d="M15 7h.01" />
    </>
  ),
  strategy: (
    <>
      <path d="M4 19V5" />
      <path d="M4 7h13l-2 4 2 4H4" />
      <path d="M8 19h10" />
    </>
  ),
  x: (
    <>
      <path d="M4 4 20 20" />
      <path d="M20 4 4 20" />
    </>
  ),
  youtube: (
    <>
      <path d="M22 12s0-3.5-.4-5a2.8 2.8 0 0 0-2-2C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 8.5 2 12 2 12s0 3.5.4 5a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.5.4-5 .4-5Z" />
      <path d="m10 9 5 3-5 3Z" />
    </>
  ),
}

function Icon({ name }) {
  return (
    <svg
      className="icon"
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {iconPaths[name]}
    </svg>
  )
}

export default Icon
