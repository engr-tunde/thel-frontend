import React from 'react'
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

const StockCountTable = ({stockCountTableCol,stockCountRowData,rowTemplate}) => {
   return (
      <table className="w-full h-[90px] overflow-y-scroll mt-10">
        <thead className=" text-gray-500">
          <tr className="">
            {stockCountTableCol?.map((item, i) => (
              <th
                key={i}
                className={`${item.className} text-start text-sm pb-2 cursor-pointer item`}
              >
                {i == 0 || i == 1 || i == 8 || i == 9 ? (
                  <div>
                    {item.title === "checkbox" ? (
                      <input type="checkbox" />
                    ) : (
                      item.title
                    )}
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="flex text-xs text-gray-400 ">
                      <GoArrowUp className="-mr-1" />
                      <GoArrowDown />
                    </div>
                    {item?.title}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mt-20 overflow-y-scroll">
          {stockCountRowData?.map((item, i) => rowTemplate(item, i))}
        </tbody>
      </table>
    );
}

export default StockCountTable;