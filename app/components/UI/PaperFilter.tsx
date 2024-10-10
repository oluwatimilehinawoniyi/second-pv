export default function PaperFilter({
  filters,
  selectedFilters,
  onHandleSelectedFilters,
}: {
  filters: string[];
  selectedFilters: string[];
  onHandleSelectedFilters: (tag: string) => void;
}) {
  return (
    <div className="mt-12">
      <h1 className="capitalize">filter</h1>
      <div className="mt-4 flex flex-wrap gap-4">
        {["all", ...Array.from(new Set(filters.flatMap(tag => tag.split(", ").map(t => t.trim()))))].map((tag, index) => (
          <Filter
            selectedFilters={selectedFilters}
            tag={tag}
            key={index}
            onClick={onHandleSelectedFilters}
          />
        ))}
      </div>
    </div>
  );
}

function Filter({
  tag,
  onClick,
  selectedFilters,
}: {
  tag: string;
  onClick: (tag: string) => void;
  selectedFilters: string[];
}) {
  const isActive = selectedFilters.includes(tag);

  return (
    <div
      onClick={() => onClick(tag)}
      key={tag}
      className={`flex cursor-pointer items-center gap-2 rounded-full border border-brown px-4 text-sm transition-all duration-200 ease-linear ${isActive ? "bg-brown *:text-background" : "bg-transparent"}`}
    >
      <p className="">{tag}</p>
    </div>
  );
}
