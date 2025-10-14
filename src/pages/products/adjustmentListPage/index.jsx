import { AiFillEdit, AiFillPrinter } from "react-icons/ai";
import {
  FaPlus,
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLocalPrintshop,
  MdNotes,
} from "react-icons/md";
import { RiArrowDownSFill, RiDeleteBin6Line } from "react-icons/ri";
import {
  adjustListRowData,
  adjustListTableCol,
} from "../../../utility/dataArr";
import { useState } from "react";
import AdjustmentListTable from "../../../component/global/AdjustmentListTable";
import FormModal from "../../../component/form/FormModal";

const AdjustmentListPage = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  const rowTemplate = (item, i) => {
    return (
      <tr
        key={i}
        className={`text-xs text-gray-400 border-t-gray-200 border-t-[1px] hover:bg-[#f8f9fa] cursor-pointer ${
          i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"
        }`}
      >
        <td className="py-3 pr-2 text-start">
          <input type="checkbox" />
        </td>
        <td className="py-3 pr-3 flex-row flex items-center gap-3 text-start">
          {item?.date}
        </td>
        <td className="py-3 pr-3 table-cell text-start">
          <div className="">{item?.reference}</div>
        </td>
        <td className="py-3 pr-3 table-cell text-start">{item?.warehouse}</td>
        <td className="py-3 pr-3 flex-col table-cell text-start">
          <div className="text-[13px]">{item?.product?.title}</div>
          <div>{item?.product?.dimension}</div>
        </td>
        <td className="py-3 pr-3 table-cell text-start">{item.quantity}</td>
        <td className="">
          <div
            className="relative flex gap-2 items-center border-[1px] text-[#7c5cc4] border-[#7c5cc4] p-2 rounded-sm w-fit"
            onClick={() => handleActionClick(i)}
          >
            <span>action</span>
            <RiArrowDownSFill />

            <div>
              {actionOpen === i && (
                <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-9 right-0 bg-white shadow-2xl text-[#7c5cc4] transition-transform ease-in duration-700">
                  <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span>view</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiFillEdit />
                    <span>Edit</span>
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
                    <RiDeleteBin6Line />
                    <span>Delete</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="w-full">
      
      <FormModal type="create" table="adjustment" title="Add Adjustment" />

      {/* Records per page */}
      <div className="flex items-center justify-between mt-10">
        {/* {left side */}
        <div className="flex items-center gap-1">
          <select className="border border-[#858c85] rounded-sm outline-none px-2 py-1">
            <option value="10">10</option>
            <option value="20">25</option>
            <option value="30">50</option>
            <option value="40">All</option>
          </select>
          <span className="text-[#858c85]">records per page</span>
        </div>

        {/* middle side */}
        <div>
          <span>Search</span>
          <input
            type="text"
            className="border border-[#858c85] rounded-sm outline-none px-2 py-1 ml-2 focus:border-[#7c5cc4]"
          />
        </div>

        {/* right side */}
        <div className="flex items-center gap-1">
          <div className="p-2 bg-[#ff7588] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFilePdf />
          </div>
          <div className="p-2 bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFile />
          </div>
          <div className="p-2 bg-[#ffc107] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <FaRegFileAlt />
          </div>
          <div className="p-2 bg-[#2196f3] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <AiFillPrinter />
          </div>
          <div className="p-2 bg-[#eb543a] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer">
            <LiaTimesSolid />
          </div>
          <div
            className="relative p-2 bg-[#7c5cc4] hover:bg-[#868e96] text-[18px] text-white rounded-sm cursor-pointer flex items-center"
            onClick={() => setEyeBtnOpen(!eyeBtnOpen)}
          >
            <FaRegEye />
            <RiArrowDownSFill />

            {eyeBtnOpen ? (
              <div className="absolute z-10 w-52 text-sm rounded-md flex flex-col py-3 px-4 gap-3 top-9 right-0 bg-[#7c5cc4] transition-transform ease-in duration-700">
                <span>Product</span>
                <span>Code</span>
                <span>Brand</span>
                <span>Categories</span>
                <span>Quantity</span>
                <span>Unit</span>
                <span>Price</span>
                <span>Stock Worth (Price/Cost)</span>
                <span>Action</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Table section */}
      <AdjustmentListTable
        adjustListTableCol={adjustListTableCol}
        adjustListRowData={adjustListRowData}
        rowTemplate={rowTemplate}
      />

      <div className="flex items-center justify-between w-full mt-10">
        <div>Showing 1 - 10 (51)</div>
        <div className="flex items-center border-[1px] border-[#7b5cc468]">
          <button className="px-3 py-4 border-r-[1px] border-[#7b5cc468] hover:bg-[#7b5cc451] h-full">
            <MdKeyboardArrowLeft />
          </button>
          <button className="px-3 py-3 border-r-[1px] bg-[#7c5cc4] border-[#7b5cc468]">
            1
          </button>
          <button className="px-3 py-3 border-r-[1px] border-[#7b5cc468] hover:bg-[#7b5cc451]">
            2
          </button>
          <button className="px-3 py-4 hover:bg-[#7b5cc451] h-full">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdjustmentListPage;
