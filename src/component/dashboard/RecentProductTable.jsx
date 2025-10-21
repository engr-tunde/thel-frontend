import { fetchAllProducts } from "../../api";
import { recentProductTableColumn } from "../../data/RecentProduct";
import Table from "../global/Table";
import RecentProductRowTemplate from "../recentProduct/RecentProductRowTemplate";

export default function RecentProductTable() {
  const { data, loading, mutate } = fetchAllProducts();

  return (
    <div className="col-span-1 p-4 rounded w-full border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Products</h2>
        <span className="bg-purple-600 font-semibold text-[10px] text-white px-2 py-1 rounded hover:bg-purple-700 transition">
          View more
        </span>
      </div>

      {data ? (
        <Table
          tableColumn={recentProductTableColumn}
          rowData={data?.data.slice(0, 3)}
          rowTemplate={RecentProductRowTemplate}
        />
      ) : null}
    </div>
  );
}
