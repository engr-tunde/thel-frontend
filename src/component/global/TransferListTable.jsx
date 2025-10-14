import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const TransferListTable = ({
  transferListTableCol,
  transferListRowData,
  rowTemplate,
}) => {
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <table className="w-[90%] mt-10 overflow-y-auto">
      <thead className="text-gray-500 border-b border-gray-200">
        <tr>
          {transferListTableCol?.map((item, i) => (
            <th
              key={i}
              className={`${item.className} text-start text-sm pb-2 ${item.title === "Date" ? "cursor-pointer" : ""
                }`}
              onClick={item.title === "Date" ? handleSort : undefined}
            >
              {item.title === "checkbox" ? (
                <input type="checkbox" />
              ) : (
                <div className="flex items-center gap-1">
                  <span>{item.title}</span>
                  {item.title === "Date" && (
                    <span className="text-xs text-gray-400">
                      {sortDirection === "asc" ? (
                        <GoArrowUp />
                      ) : sortDirection === "desc" ? (
                        <GoArrowDown />
                      ) : (
                        // faded arrows when no sort applied
                        <div className="flex flex-col -space-y-1 opacity-40">
                          <GoArrowUp />
                          <GoArrowDown />
                        </div>
                      )}
                    </span>
                  )}
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {transferListRowData.map((row, i) => (
          <tr key={i} className="border-b border-gray-200">
            {transferListTableCol.map((col, j) => {
              const value = row[col.key];

              // ✅ Status column styling
              if (col.key === "Status") {
                const statusClass =
                  value === "Completed"
                    ? "bg-green-100 text-green-700"
                    : value === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : value === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700";

                return (
                  <td key={j} className="py-2 text-sm">
                    <span className={`${statusClass} px-2 py-1 rounded-md text-xs font-semibold`}>
                      {value}
                    </span>
                  </td>
                );
              }

              // ✅ Email Sent column styling
              if (col.key === "EmailSent") {
                const emailClass =
                  value === "Yes"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700";

                return (
                  <td key={j} className="py-2 text-sm">
                    <span className={`${emailClass} px-2 py-1 rounded-md text-xs font-semibold`}>
                      {value}
                    </span>
                  </td>
                );
              }

              // ✅ Action column styling
              if (col.key === "action") {
                return (
                  <td key={j} className="py-2 text-sm">
                    <span className="bg-gray-100 text-gray-700 px-3 py-3 rounded-md text-xs font-semibold border border-purple-700">
                      Action
                    </span>
                  </td>
                );
              }


              // ✅ Checkbox column
              if (col.key === "checkbox") {
                return (
                  <td key={j} className="py-2">
                    <input type="checkbox" />
                  </td>
                );
              }

              // ✅ Default cell
              return (
                <td key={j} className="py-2 text-sm">
                  {value ?? ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>



    </table>
  );
};

export default TransferListTable;
