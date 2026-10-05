export default function CategoryFilter({ categories, selected, onSelect }) {
  const options = ["All", ...categories];
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {options.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          aria-pressed={selected === category}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            selected === category
              ? "border-brand bg-brand text-white"
              : "border-line bg-white hover:border-brand"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
