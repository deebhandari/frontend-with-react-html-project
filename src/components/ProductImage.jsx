import { useState } from "react";

// Shows the product photo from public/images. If the photo is missing or fails to load,
// a drawn illustration is shown instead, so the shop never has a broken image.
function Shape({ shape, fg, label }) {
  const text = (x, y, size = 10) =>
    label ? (
      <text x={x} y={y} textAnchor="middle" fontSize={size} fontWeight="700" fill={fg} fontFamily="sans-serif">
        {label}
      </text>
    ) : null;

  switch (shape) {
    case "bag":
      return (
        <>
          <path d="M58 48h84l10 22v100a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V70z" fill={fg} />
          <path d="M58 48h84l10 22H48z" fill="#fff" opacity=".25" />
          <rect x="52" y="64" width="96" height="4" fill="#000" opacity=".15" />
          <rect x="64" y="95" width="72" height="50" rx="5" fill="#fff" opacity=".95" />
          {text(100, 125, 11)}
          <rect x="58" y="80" width="10" height="84" fill="#fff" opacity=".12" />
        </>
      );
    case "jar":
      return (
        <>
          <rect x="60" y="52" width="80" height="18" rx="5" fill="#1c222b" opacity=".85" />
          <path d="M64 72h72a8 8 0 0 1 8 8v82a10 10 0 0 1-10 10H66a10 10 0 0 1-10-10V80a8 8 0 0 1 8-8z" fill={fg} />
          <rect x="66" y="98" width="68" height="46" rx="4" fill="#fff" opacity=".95" />
          {text(100, 126, 11)}
          <rect x="64" y="80" width="8" height="78" rx="4" fill="#fff" opacity=".3" />
        </>
      );
    case "shawl":
      return (
        <>
          <path d="M42 52h116v104c-20 14-38-8-58 4s-38-10-58 2z" fill={fg} />
          <path d="M42 80h116M42 98h116M42 116h116M42 134h116" stroke="#fff" strokeWidth="4" opacity=".3" />
          <path d="M42 52h116v10H42z" fill="#fff" opacity=".25" />
          <path d="M58 150v14M72 154v14M86 152v14M100 158v14M114 152v14M128 154v14M142 150v14" stroke={fg} strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case "hat":
      return (
        <>
          <path d="M48 142L58 84Q100 54 142 84L152 142z" fill={fg} />
          <rect x="48" y="122" width="104" height="22" rx="3" fill="#fff" opacity=".3" />
          <path d="M64 96l8 14 8-14 8 14 8-14 8 14 8-14 8 14 8-14M64 134l8 8 8-8 8 8 8-8 8 8 8-8 8 8 8-8" fill="none" stroke="#fff" strokeWidth="3" opacity=".55" />
        </>
      );
    case "bowl":
      return (
        <>
          <path d="M40 96h120a60 60 0 0 1-120 0z" fill={fg} />
          <ellipse cx="100" cy="96" rx="60" ry="10" fill="#fff" opacity=".3" />
          <ellipse cx="100" cy="98" rx="52" ry="7" fill="#000" opacity=".35" />
          <path d="M60 120q40 12 80 0" stroke="#fff" strokeWidth="3" fill="none" opacity=".35" />
          <rect x="80" y="154" width="40" height="10" rx="4" fill={fg} opacity=".6" />
          <path d="M156 48l-36 36" stroke={fg} strokeWidth="8" strokeLinecap="round" />
        </>
      );
    case "notebook":
      return (
        <>
          <rect x="56" y="40" width="90" height="122" rx="6" fill={fg} />
          <rect x="56" y="40" width="16" height="122" rx="4" fill="#fff" opacity=".25" />
          <rect x="82" y="64" width="52" height="30" rx="3" fill="#fff" opacity=".92" />
          {text(108, 83, 10)}
          <rect x="82" y="104" width="40" height="5" rx="2" fill="#fff" opacity=".4" />
          <path d="M72 50v102" stroke="#fff" strokeWidth="2" strokeDasharray="4 5" opacity=".6" />
        </>
      );
    case "coasters":
      return (
        <>
          <circle cx="82" cy="92" r="40" fill={fg} />
          <circle cx="82" cy="92" r="26" fill="none" stroke="#fff" strokeWidth="3" opacity=".5" />
          <circle cx="120" cy="116" r="40" fill={fg} opacity=".8" stroke="#fff" strokeWidth="3" />
          <circle cx="120" cy="116" r="26" fill="none" stroke="#fff" strokeWidth="3" opacity=".5" />
        </>
      );
    case "bottle":
      return (
        <>
          <rect x="86" y="38" width="28" height="20" rx="4" fill={fg} />
          <path d="M82 58h36l16 28v74a10 10 0 0 1-10 10H76a10 10 0 0 1-10-10V86z" fill={fg} />
          <rect x="66" y="104" width="68" height="16" fill="#fff" opacity=".28" />
          <rect x="74" y="92" width="9" height="64" rx="4" fill="#fff" opacity=".3" />
        </>
      );
    case "lamp":
      return (
        <>
          <path d="M100 56c16 16 16 36 0 48-16-12-16-32 0-48z" fill="#fff" opacity=".95" />
          <path d="M100 74c7 8 7 17 0 23-7-6-7-15 0-23z" fill={fg} />
          <path d="M54 116h92a46 32 0 0 1-92 0z" fill={fg} />
          <path d="M64 124q36 12 72 0" stroke="#fff" strokeWidth="3" fill="none" opacity=".35" />
          <rect x="91" y="146" width="18" height="22" rx="3" fill={fg} />
          <rect x="68" y="166" width="64" height="9" rx="4" fill={fg} />
        </>
      );
    default:
      return <circle cx="100" cy="100" r="40" fill={fg} />;
  }
}

export default function ProductImage({ product, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (product.image && !failed) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    );
  }

  const [bg, fg] = product.colors;
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={product.name}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`glow-${product.id}`} cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#fff" stopOpacity=".55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={bg} />
      <rect width="200" height="200" fill={`url(#glow-${product.id})`} />
      <ellipse cx="100" cy="176" rx="52" ry="7" fill="#000" opacity=".14" />
      <g transform="translate(-14 -12) scale(1.14)">
        <Shape shape={product.shape} fg={fg} label={product.label} />
      </g>
    </svg>
  );
}
