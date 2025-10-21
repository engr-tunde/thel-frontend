import { fetchAllPurchases } from "../../api";
import Table from "../global/Table";
import RecentPurchaseRowTemplate from "../recentPurchase/RecentPurchaseRowTemplate";
import { recentPurchaseTableColumn } from "../../data/recentPurchase";

export default function RecentPurchaseTable() {
  const { data, loading, mutate } = fetchAllPurchases();

  return (
    <div className="col-span-1 rounded border-[1px] border-gray-300 w-full bg-white p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Purchase</h2>
        <span className="bg-purple-600 font-semibold text-[10px] text-white px-2 py-1 rounded hover:bg-purple-700 transition">
          View more
        </span>
      </div>

      <div className="overflow-x-auto">
        {data ? (
          <Table
            tableColumn={recentPurchaseTableColumn}
            rowData={data?.data.slice(0, 3)}
            rowTemplate={RecentPurchaseRowTemplate}
          />
        ) : null}
      </div>
    </div>
  );
}
