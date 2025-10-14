// src/components/RecentTransaction.jsx

// import { useState } from "react";
// import { transactionData } from "../../utility/dashboardData";

// export default function RecentTransactionTable() {
//   const tabs = Object.keys(transactionData);
//   const [activeTab, setActiveTab] = useState("Sale");
//   const { columns, rows } = transactionData[activeTab];

//   return (
//     <div className=" p-4 rounded shadow-md w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Recent Transaction</h2>
//         <button className="text-white font-semibold text-[12px] bg-purple-500 p-1 rounded-sm">
//           Latest 5
//         </button>
//       </div>

//       <div className="flex gap-6 border-b mb-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 font-medium ${
//               activeTab === tab
//                 ? "text-purple-600 border-b-2 border-purple-600"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <table className="w-full text-left border-collapse">
//         <thead className="bg-gray-100 text-gray-700 font-semibold">
//           <tr>
//             {columns.map((col, i) => (
//               <th key={i} className="p-2">
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, i) => (
//             <tr key={i} className="border-b hover:bg-gray-50">
//               {columns.map((col, j) => {
//                 const key = col.toLowerCase().replace(/ /g, "");
//                 return (
//                   <td key={j} className="p-2">
//                     {row[key]}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { useState } from "react";
import { transactionData } from "../../utility/dashboardData";

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

export default function RecentTransactionTable() {
  const tabs = Object.keys(transactionData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { columns, rows } = transactionData[activeTab];

  return (
    <div className="col-span-1 rounded border-[1px] border-gray-300 w-full bg-white ">
      <div className="flex justify-between items-center mb-4 p-4">
        <h2 className="text-lg font-semibold">Recent Transaction</h2>
        <button className="text-white font-semibold text-[10px] bg-purple-500 px-2 py-1 rounded hover:bg-purple-600 transition">
          Latest 5
        </button>
      </div>

      <div className="flex gap-6 border-b mb-4 p-4 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium text-[14px] transition ${
              activeTab === tab
                ? "text-purple-600 border-b-[1.5px] border-purple-600"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse ">
          <thead className="bg-gray-100 text-gray-500 font-light text-[13px]">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="py-2 px-4 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-4 text-center text-gray-400"
                >
                  No transactions found.
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr
                  key={i}
                  className="border border-gray-200  hover:bg-gray-50 transition"
                >
                  {columns.map((col, j) => {
                    const config = columnConfig[col] || {
                      key: col.toLowerCase().replace(/ /g, ""),
                    };
                    const value = row[config.key];
                    return (
                      <td key={j} className="p-5 whitespace-nowrap">
                        {config.render ? config.render(value) : value}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
