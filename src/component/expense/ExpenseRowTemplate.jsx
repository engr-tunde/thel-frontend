import { FaRegEye, FaRegMoneyBillAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import FormModal from "../form/FormModal";
import { IoMdAdd } from "react-icons/io";
import { useToggleOpen } from "../../utility/helpers";

function ExpenseRowTemplate(item, i, openIndex, setOpenIndex) {
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );

  return (
    <tr
      key={i}
      className={`text-xs text-gray-600 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer text-[14px] ${
        i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
      }`}
    >
      <td className="text-[rgb(177,117,115)] py-4">{item?.purchase_date}</td>
      <td className="table-cell text-start">{item?.product}</td>
      <td className="table-cell text-start w-[140px]">
        {item?.reference_number}
      </td>
      <td className="table-cell text-start">{item?.supplier}</td>
      <td className="table-cell text-start">
        <div className="text-white bg-[rgb(22,211,154)] rounded-sm w-[50px] px-[3px] text-[11px]">
          {item?.purchase_status}
        </div>
      </td>
      <td className="table-cell text-start">{item?.grand_total}</td>
      

      <td className="table-cell">
        <div className="relative" ref={ref}>
          <button
            className="my-2 flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <span>action</span>
            <RiArrowDownSFill />
          </button>
          {isOpen ? (
            <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
              <div className="flex items-center gap-1">
                <FaRegEye />
                <span>view</span>
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  table="expense"
                  id={item?._id}
                  type="update"
                  title="Edit"
                  data={item}
                />
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  type="delete"
                  id={item?._id}
                  table="expense"
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
    </tr>
  );
}

export default ExpenseRowTemplate;
