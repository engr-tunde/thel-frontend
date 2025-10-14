import { FaChevronDown } from "react-icons/fa";
import { currencyFormatter, saleDateFormatter } from "../../../utility/helpers";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaRegEye, FaRegMoneyBillAlt } from "react-icons/fa";
import FormModal from "../../form/FormModal";
import { IoIosCheckmark, IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";

const SaleListRowTemplate = (item, i) => {
  // console.log("data", data);
  const [actionOpen, setActionOpen] = useState(false);
  const [index, setindex] = useState(null);

  const handleActionClick = (i) => {
    // setActionOpen(actionOpen === i ? null : i);
    setActionOpen(!actionOpen);
  };

  return (
    <tr key={i} className="border-t border-gray-200 hover:bg-gray-50 border">
      <td className="p-4">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      {/* <td className="p-4">
        <div className="relative">
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded border">
            Action
            <FaChevronDown size={16} />
          </button>
        </div>
      </td> */}
      <td className="relative">
        <div
          className="my-2 flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
          onClick={() => handleActionClick(i)}
        >
          <span>action</span>
          <RiArrowDownSFill />
        </div>
        <div>
          {actionOpen ? (
            <div className="absolute z-50 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-[-12px] bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
              <div className="flex items-center gap-1">
                <FaRegEye />
                <span>view</span>
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  table="sale"
                  id={item?._id}
                  type="update"
                  title="Edit"
                  data={item}
                  closeAction={handleActionClick}
                />
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  type="delete"
                  id={item?._id}
                  table="sale"
                  title="Delete"
                />
              </div>
              <div className="flex gap-2 items-center justify-start">
                <FaRegMoneyBillAlt />
                <span>View Payment</span>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <IoMdAdd />
                <span>Add Payment</span>
              </div>
            </div>
          ) : null}
        </div>
      </td>
      <td className="p-4 text-gray-600">{item?.sale_date}</td>
      <td className="p-4">{item?.customer}</td>
      <td className="p-4">{item?.warehouse}</td>
      <td className="p-4">{item?.discount}</td>
      <td className="p-4">{item?.order_tax}</td>
      <td className="p-4">{item?.shipping_cost}</td>
      <td className="p-4">{item?.total_before_discount}</td>
      <td className="p-4">{item?.grand_total}</td>
      <td className="p-4">{item?.delivery_status}</td>
      <td className="p-4">{item?.sale_status}</td>
      <td className="p-4">{item?.payment_status}</td>
    </tr>
  );
};

export default SaleListRowTemplate;
