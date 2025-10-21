import { FaRegEye, FaRegMoneyBillAlt } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import FormModal from "../../form/FormModal";
import { useToggleOpen } from "../../../utility/helpers";

function SupplierRowTemplate(item, i, openIndex, setOpenIndex) {
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
      <td className="p-4 pr-2 text-start">
        <input type="checkbox" />
      </td>
      <td className="text-[rgb(177,117,115)] py-4">{item?.name}</td>
      <td className="table-cell text-start">{item?.company_name}</td>
      <td className="table-cell text-start w-[140px]">{item?.tax_number}</td>
      <td className="table-cell text-start w-[140px]">{item?.balance_owed}</td>
      <td className="table-cell text-start w-[140px]">{item?.address}</td>
      <td className="table-cell text-start w-[140px]">{item?.city}</td>
      <td className="table-cell text-start w-[140px]">{item?.state}</td>
      <td className="table-cell text-start w-[140px]">{item?.country}</td>

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
                  table="supplier"
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
                  table="supplier"
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

export default SupplierRowTemplate;
