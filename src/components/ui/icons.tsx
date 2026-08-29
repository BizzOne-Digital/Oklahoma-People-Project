export function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M12 6h18l10 10v26a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
        fill="url(#docGrad)"
        fillOpacity="0.15"
      />
      <path d="M30 6v10h10" stroke="currentColor" strokeWidth="2" />
      <path d="M16 24h16M16 30h12M16 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="docGrad" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#D95F22" />
          <stop offset="1" stopColor="#4B809D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 4L8 12v12c0 10 6.5 16.5 16 20 9.5-3.5 16-10 16-20V12L24 4z"
        stroke="currentColor"
        strokeWidth="2"
        fill="url(#shieldGrad)"
        fillOpacity="0.15"
      />
      <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="shieldGrad" x1="8" y1="4" x2="40" y2="48">
          <stop stopColor="#F3A332" />
          <stop offset="1" stopColor="#24566F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M6 22L24 6l18 16v20a2 2 0 01-2 2H8a2 2 0 01-2-2V22z"
        stroke="currentColor"
        strokeWidth="2"
        fill="url(#homeGrad)"
        fillOpacity="0.15"
      />
      <path d="M18 44V28h12v16" stroke="currentColor" strokeWidth="2" />
      <defs>
        <linearGradient id="homeGrad" x1="6" y1="6" x2="42" y2="44">
          <stop stopColor="#D95F22" />
          <stop offset="1" stopColor="#F3A332" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="url(#compassGrad)" fillOpacity="0.1" />
      <path d="M24 6v4M24 38v4M6 24h4M38 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 18L22 26l-4-4-8 8 8 8 8-8-4-4 8-8z" fill="url(#compassGrad)" />
      <defs>
        <linearGradient id="compassGrad" x1="6" y1="6" x2="42" y2="42">
          <stop stopColor="#4B809D" />
          <stop offset="1" stopColor="#D95F22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 40s-14-8.5-14-18.5C10 14 16 10 24 16c8-6 14-2 14 5.5C38 31.5 24 40 24 40z"
        stroke="currentColor"
        strokeWidth="2"
        fill="url(#heartGrad)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient id="heartGrad" x1="10" y1="10" x2="38" y2="40">
          <stop stopColor="#D95F22" />
          <stop offset="1" stopColor="#F3A332" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="22" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="url(#lockGrad)" fillOpacity="0.15" />
      <path d="M16 22v-6a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="32" r="3" fill="currentColor" />
      <defs>
        <linearGradient id="lockGrad" x1="10" y1="14" x2="38" y2="42">
          <stop stopColor="#24566F" />
          <stop offset="1" stopColor="#4B809D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="url(#userGrad)" fillOpacity="0.15" />
      <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="userGrad" x1="8" y1="8" x2="40" y2="42">
          <stop stopColor="#F3A332" />
          <stop offset="1" stopColor="#D95F22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 8h14a6 6 0 016 6v28l-6-4-6 4-8-4V8z" stroke="currentColor" strokeWidth="2" fill="url(#bookGrad)" fillOpacity="0.15" />
      <path d="M26 8h14v32l-8-4" stroke="currentColor" strokeWidth="2" />
      <defs>
        <linearGradient id="bookGrad" x1="8" y1="8" x2="40" y2="42">
          <stop stopColor="#4B809D" />
          <stop offset="1" stopColor="#78806A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="url(#infoGrad)" fillOpacity="0.1" />
      <path d="M24 22v12M24 16v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="infoGrad" x1="6" y1="6" x2="42" y2="42">
          <stop stopColor="#D95F22" />
          <stop offset="1" stopColor="#4B809D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2" fill="url(#calGrad)" fillOpacity="0.1" />
      <path d="M6 18h36M16 6v8M32 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="28" r="2" fill="currentColor" />
      <circle cx="30" cy="28" r="2" fill="currentColor" />
      <defs>
        <linearGradient id="calGrad" x1="6" y1="6" x2="42" y2="42">
          <stop stopColor="#F3A332" />
          <stop offset="1" stopColor="#D95F22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="url(#helpGrad)" fillOpacity="0.1" />
      <path d="M18 18a6 6 0 0112 0c0 4-6 4-6 8M24 34v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="helpGrad" x1="6" y1="6" x2="42" y2="42">
          <stop stopColor="#24566F" />
          <stop offset="1" stopColor="#4B809D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 10h36v24H18l-12 8V10z" stroke="currentColor" strokeWidth="2" fill="url(#msgGrad)" fillOpacity="0.15" />
      <path d="M14 20h20M14 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="msgGrad" x1="6" y1="10" x2="42" y2="42">
          <stop stopColor="#D95F22" />
          <stop offset="1" stopColor="#F3A332" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M30 30l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 14l12-4 12 4 12-4v28l-12 4-12-4-12 4V14z" stroke="currentColor" strokeWidth="2" fill="url(#mapGrad)" fillOpacity="0.1" />
      <path d="M18 10v28M30 14v28" stroke="currentColor" strokeWidth="2" />
      <defs>
        <linearGradient id="mapGrad" x1="6" y1="10" x2="42" y2="42">
          <stop stopColor="#4B809D" />
          <stop offset="1" stopColor="#78806A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M38 18a14 14 0 00-24-10M10 30a14 14 0 0024 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 8v10H28M10 40V30h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="url(#checkGrad)" fillOpacity="0.1" />
      <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="checkGrad" x1="6" y1="6" x2="42" y2="42">
          <stop stopColor="#78806A" />
          <stop offset="1" stopColor="#4B809D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 28l8-8 8 8 8-12 8 8v8H8v-4z" stroke="currentColor" strokeWidth="2" fill="url(#handGrad)" fillOpacity="0.15" />
      <defs>
        <linearGradient id="handGrad" x1="8" y1="16" x2="40" y2="36">
          <stop stopColor="#F3A332" />
          <stop offset="1" stopColor="#D95F22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M6 40c0-6 5.4-10 12-10s12 4 12 10M28 40c0-4 3-7 8-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  document: DocumentIcon,
  shield: ShieldIcon,
  home: HomeIcon,
  compass: CompassIcon,
  heart: HeartIcon,
  lock: LockIcon,
  user: UserIcon,
  book: BookIcon,
  info: InfoIcon,
  calendar: CalendarIcon,
  help: HelpIcon,
  message: MessageIcon,
  search: SearchIcon,
  map: MapIcon,
  refresh: RefreshIcon,
  check: CheckIcon,
  handshake: HandshakeIcon,
  users: UsersIcon,
} as const;

export type IconName = keyof typeof iconMap;

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} />;
}
