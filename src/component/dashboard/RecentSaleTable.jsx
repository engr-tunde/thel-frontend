import { fetchAllSales } from "../../api";
import Table from "../global/Table";
import { recentSaleTableColumn } from "../../data/recentSale";
import RecentSaleRowTemplate from "../recentSale/RecentSaleRowTemplate";

// Column config for mapping and custom rendering
const columnConfig = {
  Date: { key: "date" },
  Reference: { key: "reference" },
  Amount: { key: "amount" },
  "Paid By": { key: "paidby" },
  Status: {
    key: "status",
    render: (value) => (
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${
          value === "Completed"
            ? "bg-green-400 text-white"
            : value === "Pending"
            ? "bg-green-400 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {value}
      </span>
    ),
  },
  Customer: { key: "customer" },
  Supplier: { key: "supplier" },
  Client: { key: "client" },
  "Grand Total": { key: "grandtotal" },
  Total: { key: "total" },
  Payment: { key: "paidby" },
};

export default function RecentSaleTable() {
  const { data, loading, mutate } = fetchAllSales();

  return (
    <div className="col-span-1 rounded border-[1px] border-gray-300 w-full bg-white p-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Sale</h2>
        <span className="bg-purple-600 font-semibold text-[10px] text-white px-2 py-1 rounded hover:bg-purple-700 transition">
          View more
        </span>
      </div>

      <div className="overflow-x-auto">
        {data ? (
          <Table
            tableColumn={recentSaleTableColumn}
            rowData={data?.data.slice(0, 3)}
            rowTemplate={RecentSaleRowTemplate}
          />
        ) : null}
      </div>
    </div>
  );
}
