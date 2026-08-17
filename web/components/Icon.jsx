const PATHS = {
  arrow: { d: 'M2.708 6.5H10.291M6.5 2.708 10.291 6.5 6.5 10.291', box: 13 },
  check: { d: 'M2.5 7.5l3.125 3.125L12.5 3.75', box: 15 },
  plus: { d: 'M9 3.75v10.5M3.75 9h10.5', box: 18 },
  minus: { d: 'M3.75 9h10.5', box: 18 },
  chevrons: { d: 'M6 4.5 1.5 9 6 13.5M12 4.5 16.5 9 12 13.5', box: 18 },
  shield: { d: 'M9 16.5C9 16.5 15 13.5 15 9V3.75L9 1.5 3 3.75V9c0 4.5 6 7.5 6 7.5Z', box: 18 },
};

export default function Icon({ name, size = 15, strokeWidth }) {
  const spec = PATHS[name];
  if (!spec) return null;
  return (
    <svg
      className="icon"
      viewBox={`0 0 ${spec.box} ${spec.box}`}
      width={size}
      height={size}
      strokeWidth={strokeWidth ?? (spec.box / size) * 0.9}
      aria-hidden="true"
    >
      <path d={spec.d} />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg className="icon icon--fill" viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">
      <path d="M6.5 4.333 21.667 13 6.5 21.667V4.333Z" />
    </svg>
  );
}
