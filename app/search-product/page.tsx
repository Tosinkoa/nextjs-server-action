import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

const Page = ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = searchParams?.query || "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <SearchProduct />
      <ProductList query={query} />
    </main>
  );
};

export default Page;
