import React from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const ExpenseTable = ({
  expenseTableCol,
  expenseTableRowData,
  rowTemplate,
}) => {
  return (
    <table className="w-[90%] mt-10 overflow-y-auto">
      <thead className="text-gray-500">
        <tr>
          {expenseTableCol?.map((item, i) => (
            <th
              key={i}
              className={`${item.className} text-start text-sm pb-2 cursor-pointer`}
            >
              {i === 0 || i === 1 ? (
                <div>
                  {item.title === "checkbox" ? (
                    <input type="checkbox" />
                  ) : (
                    item.title
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="flex text-xs text-gray-400">
                    <GoArrowUp className="-mr-1" />
                    <GoArrowDown />
                  </div>
                  {item.title}
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {expenseTableRowData?.map((item, i) => rowTemplate(item, i))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
