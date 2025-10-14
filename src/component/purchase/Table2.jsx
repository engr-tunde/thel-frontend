import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";

const Table2 = ({
  tableColumn,
  rowData,
  rowTemplate,
  validateHead,
  setValidateHead,
}) => {
  [validateHead, setValidateHead] = useState(tableColumn);
  return (
    <table className="w-full h-[90px] overflow-y-scroll mt-10">
      <thead className="w-full text-gray-500">
        <tr className="w-full">
          {tableColumn?.map((item, i) => {
            const checkValidate = () => {
              setValidateHead(!validateHead);
            };

            return (
              <th
                key={i}
                className={`${item.className} text-start text-[14px] font-normal pb-4 cursor-pointer item table-cell  p-1 border-b-[rgb(222,226,230)] border-b-[1px]`}
              >
                {i == 1 || i == 2 || i == 5 || i == 7 ? (
                  <div className="items-center gap-3 flex  px-2 w-[80px]">
                    {item?.title}
                    <div className="flex items-center text-xs text-gray-400 ">
                      <GoArrowUp className="-mr-1" />
                      <GoArrowDown />
                    </div>
                  </div>
                ) : (
                  <div className=" px-2 w-[80px] ">
                    {item.title === "checkbox" ? (
                      <span
                        key={i}
                        onClick={checkValidate}
                        className={`${item.className} border-1  size-5 items-center flex rounded-sm`}
                      >
                        <IoIosCheckmark
                          className={
                            validateHead
                              ? "bg-blue-800 text-white size-full"
                              : "hidden"
                          }
                        />
                      </span>
                    ) : (
                      item.title
                    )}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="mt-20 overflow-y-scroll">
        {rowData?.map((item, i) => rowTemplate(item, i))}
      </tbody>
    </table>
  );
};

export default Table2;
