const ProductList = async ({ query }: { query: string }) => {
  let data;
  const res = await fetch(`${process.env.RETOOL_API}?_page=1&_limit=${query}`);
  if (!res) return null;
  else data = (await res.json()).reverse();
  if (!data) data = [];

  console.log(data);

  return (
    <div className="mt-3 flex flex-col gap-y-2">
      {data?.map((eachData: IData, index: number) => (
        <div key={eachData?.id}>
          {eachData?.name && eachData?.email && (
            <div className="border p-3 rounded-md">
              <p className="ml-auto font-bold border rounded-full w-10  place-content-center text-center h-10">
                {index + 1}
              </p>
              <p>Name: {eachData?.name}</p>
              <p>Email: {eachData?.email}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
