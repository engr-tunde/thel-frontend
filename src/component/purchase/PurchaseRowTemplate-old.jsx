import { useState } from "react";
import { IoIosCheckmark, IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import FormModal from "./FormModal";
import { FaRegMoneyBillAlt } from "react-icons/fa";

function PurchaseRowTemplate(item, i) {
  const [validate, setValidate] = useState(item); //original data
  const [action, setAction] = useState(false);
  const [leave, setLeave] = useState(true);

  const handleleave = () => {
    setLeave(false);
  };

  const checkValidate = () => {
    setValidate(!validate);
  };

  const toggleAction = (i) => {
    if (i) {
      setAction(!action);
    }
  };

  return (
    <tr
      key={i}
      className="text-[rgb(177,117,115)] pb-4 cursor-pointer item  text-[15px] p-1 border-b-[rgb(222,226,230)] border-b-[1px]"
    >
      <td className="table-cell p-3">
        <span
          key={i}
          onClick={checkValidate}
          className={`${item.className} border-1  size-5 items-center flex rounded-sm`}
        >
          <IoIosCheckmark
            className={validate ? "bg-blue-800 text-white size-full" : "hidden"}
          />
        </span>
      </td>
      <td className="text-[rgb(177,117,115)] p-3 w-[60px]">{item.date}</td>
      <td className="p-3 w-[140px] ">{item.reference}</td>
      <td className="p-3">{item.supplier}</td>
      <td className="p-3 table-cell">
        <div className="text-white bg-[rgb(22,211,154)] rounded-sm w-[50px] px-[3px] text-[11px]">
          {item.purchaseStatus}
        </div>
      </td>
      <td className="p-3">{item.grandTotal}</td>
      <td className="p-3">{item.returnedAmount}</td>
      <td className="p-3 ">{item.paid}</td>
      <td className="p-3">{item.due}</td>
      <td className="p-3 table-cell">
        <div className="text-white text-[11px] bg-[rgb(255,117,136)] rounded-sm w-[30px] px-[3px]">
          {item.paymentStatus}
        </div>
      </td>
      <td className="p-3 table-cell text-start">
        <div className="flex flex-col relative">
          <div
            onClick={(i) => {
              toggleAction(i);
            }}
            className=" flex items-center justify-center gap-2 border-[1px] border-[rgb(124,92,196)] rounded-sm p-1 w-[70px]"
          >
            <div>{item.action}</div>
            <div className={item.className}>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div
            onMouseLeave={toggleAction}
            className={
              action
                ? i == 0
                  ? "text-blue-800 bg-white w-[170px] h-[270px] text-sm z-1 rounded-sm p-2 absolute top-[35px] right-[5px] flex flex-col gap-6 justify-start"
                  : "text-blue-800 bg-white w-[170px] h-[270px] text-sm z-1 rounded-sm p-2 absolute bottom-[35px] right-[5px] flex flex-col gap-6 justify-start"
                : "hidden"
            }
          >
            <FormModal
              type="edit"
              table="purchase"
              data={item}
              id={item?._id}
            />
            <FormModal type="delete" table="purchase" id={item?._id} />
            <div className="flex gap-2 items-center justify-start">
              <FaRegMoneyBillAlt />
              <span>View Payment</span>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <IoMdAdd />
              <span>Add Payment</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default PurchaseRowTemplate;
