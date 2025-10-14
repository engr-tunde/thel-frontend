import { useEffect, useState } from "react";
import { FaRegEye, FaRegMoneyBillAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import FormModal from "../form/FormModal";
import { IoIosCheckmark, IoMdAdd } from "react-icons/io";

function SelectedRowTemplate(item, i) {
  // const [actionOpen, setActionOpen] = useState(false);
  // const [index, setindex] = useState(null);

  // const handleActionClick = (i) => {
  //   // setActionOpen(actionOpen === i ? null : i);
  //   setActionOpen(!actionOpen);
  // };
  // // console.log("actionOpen", actionOpen);

  // // useEffect(() => {
  // //   if (index === i) {
  // //     setActionOpen(true);
  // //   } else {
  // //     setActionOpen(false);
  // //   }
  // // }, [index]);

  return (
    <tr
      key={i}
      className={`text-xs text-gray-600 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer text-[14px] ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="text-[rgb(177,117,115)] py-4">{item?.product_name}</td>
      <td className="table-cell text-start">{item?.product_code}</td>
      <td className="table-cell text-start">{item?.barcode_format}</td>
      <td className="table-cell text-start w-[140px]">{item?.product_price}</td>
      <td className="table-cell text-start w-[140px]">{item?.qunatity}</td>
    </tr>
  );
}

export default SelectedRowTemplate;
