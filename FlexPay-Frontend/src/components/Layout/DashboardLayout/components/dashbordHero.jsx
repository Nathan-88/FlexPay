import AvailableBalance from "./avaliableBalance";

function DashboardHero() {
  return (
    <div
      className="px-4 mt-12 w-full bg-slate-100 "
      style={{ height: "92vh", width: "182vh" }}
    >
      <div className="font-bold text-xl ">
        <h1 className="py-6"> Dashboard</h1>
        <h1>Hi Samuel!</h1>

        <div className="flex  gap-32">
          <h1 className="text-xl">What will you like to do today?</h1>
          <button className="bg-[blue] text-white text-[15px] p-2 px-5 rounded-2xl">
            Add New Client
          </button>
          <button className="bg-[black] text-white text-[15px] p-2 px-5 rounded-2xl">
            Create Invoice
          </button>
        </div>
      </div>
      <div className="mt-[40px]">
        <AvailableBalance />
      </div>
    </div>
  );
}

export default DashboardHero;
