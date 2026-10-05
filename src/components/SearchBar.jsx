export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full sm:max-w-sm">
      <label htmlFor="search" className="sr-only">
        Search products
      </label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search tea, pashmina, singing bowl"
        className="w-full rounded-md border border-line bg-white px-4 py-2.5 text-sm placeholder:text-muted"
      />
    </div>
  );
}
