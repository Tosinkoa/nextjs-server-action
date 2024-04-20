"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) params.set("query", searchTerm);
    else params.delete("query");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <p className="font-semibold text-lg">Search Product</p>
      <div>
        <input
          className="text-black rounded-md p-3 w-full"
          placeholder="Search"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchProduct;
