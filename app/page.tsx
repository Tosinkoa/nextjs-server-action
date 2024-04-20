import Form from "@/components/Form";

const Home = async () => {
  let data;
  const res = await fetch(`${process.env.RETOOL_API}`);
  if (!res) return null;
  else data = (await res.json()).reverse();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3">
      <Form />
      <div className="mt-[206px] flex flex-col gap-y-2">
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
    </main>
  );
};

export default Home;
