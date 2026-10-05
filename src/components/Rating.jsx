export default function Rating({ value }) {
  const full = Math.round(value);
  return (
    <span className="text-sm text-muted" aria-label={`Rated ${value} out of 5`}>
      <span className="text-accent" aria-hidden="true">
        {"★".repeat(full)}
        {"☆".repeat(5 - full)}
      </span>{" "}
      {value.toFixed(1)}
    </span>
  );
}
