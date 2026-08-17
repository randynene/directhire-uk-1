export default function AvatarPlaceholder({ label, size, radius }) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <div className="avatar-placeholder" style={radius ? { ...style, borderRadius: radius } : style}>
      {label}
    </div>
  );
}
