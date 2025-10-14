import { FaRegEye } from "react-icons/fa";
import { MdLocalPrintshop, MdNotes } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import FormModal from "../form/FormModal";
import { currencyFormatter, useToggleOpen } from "../../utility/helpers";

function ProductRowTemplate(item, i, openIndex, setOpenIndex) {
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
      <td className="p-4 flex-row flex items-center gap-3 text-start">
        <img src={item?.image} alt="product" className="w-8 h-8 object-cover" />
        <span>{item?.product_name}</span>
      </td>
      <td className="table-cell text-start">
        <div className="">{item?.product_code}</div>
      </td>
      <td className="table-cell text-start">{item?.brand}</td>
      <td className="table-cell text-start">{item?.category}</td>
      <td className="table-cell text-start">{item?.quantity}</td>
      <td className="table-cell text-start">{item?.unit}</td>
      <td className="table-cell text-start">{item?.product_price}</td>
      <td className="table-cell text-start">{item?.product_cost}</td>
      <td className="table-cell text-start text-[15px]">
        {currencyFormatter(Number(item?.quantity * item?.product_price))} /{" "}
        {currencyFormatter(Number(item?.quantity * item?.product_cost))}
      </td>
      <td className="table-cell">
        <div className="relative cursor-pointer" ref={ref}>
          <button
            className=" flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <span>action</span>
            <RiArrowDownSFill />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
              <div className="flex items-center gap-1" onClick={() => close()}>
                <FaRegEye />
                <span>view</span>
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  table="product"
                  id={item?._id}
                  type="update"
                  title="Edit"
                />
              </div>
              <div className="flex items-center gap-1">
                <MdNotes />
                <span>Product History</span>
              </div>
              <div className="flex items-center gap-1">
                <MdLocalPrintshop />
                <span>Print Barcode</span>
              </div>
              <div className="flex items-center gap-1">
                <FormModal
                  type="delete"
                  id={item?._id}
                  table="product"
                  title="Delete"
                />
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default ProductRowTemplate;
