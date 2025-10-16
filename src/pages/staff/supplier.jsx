import { AiOutlineFilePdf, AiOutlineFileExcel } from "react-icons/ai";
import { BsFiletypeCsv } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";
import { RiChatDeleteLine } from "react-icons/ri";
import { useState } from "react";
import FormModal from "../../component/form/FormModal";
import Table from "../../component/global/Table";
import { fetchAllPurchases } from "../../api";
import Loader from "../../component/global/Loader";
import { supplierTableColumn, ViewSupplier } from "../../data/supplier";
import SupplierRowTemplate from "../../component/staff/supplier/SupplierRowTemplate";

const SupplierListPage = () => {
  const [viewSupplier, setviewSupplier] = useState(false);

  const { data, loading, error, mutate } = fetchAllPurchases();

  // handle view purchases
  const handleViewSupplier = () => {
    setviewSupplier(!viewSupplier);
  };

  return (
    <div className="mt-8 w-full flex flex-col">
      {/* main first section */}
      <div className="flex flex-col">
        <div className="flex gap-2 pb-5">
          <FormModal type="create" table="supplier" title="Add Supplier" />
        </div>
      </div>
      {/* main second section */}
      <div className="flex w-full justify-between items-center mt-10 mb-10">
        <div className="flex gap-2 item-center justify-center ">
          <div className="w-[80px] h-[35px] rounded-sm border-[rgb(228,230,252)] border-[1px]">
            <input type="number" className="w-full" />
          </div>
          <span>record per page</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="">Search</label>
          <div className="w-[180px] h-[35px] rounded-sm border-[rgb(228,230,252)] border-[1px]">
            <input type="text" className="w-full" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[4px] relative">
          <div className=" flex item-center justify-center p-3 bg-[rgb(255,117,136)] hover:bg-[rgb(113,122,131)] rounded-l-sm cursor-pointer">
            <AiOutlineFilePdf className="text-white " />
          </div>
          <div className=" flex item-center justify-center p-3 bg-[rgb(134,142,150)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <AiOutlineFileExcel className="text-white " />
          </div>
          <div className="flex item-center justify-center p-3 bg-[rgb(255,193,7)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <BsFiletypeCsv className="text-white " />
          </div>
          <div className=" flex item-center justify-center p-3 bg-[rgb(33,150,243)] hover:bg-[rgb(113,122,131)]  cursor-pointer">
            <TfiPrinter className="text-white " />
          </div>
          <div className="flex item-center justify-center p-3 bg-[rgb(235,84,58)] hover:bg-[rgb(113,122,131)]  font-semibold text[14px] cursor-pointer text-white">
            <RiChatDeleteLine className="text-white " />
          </div>
          <div
            onClick={handleViewSupplier}
            className="flex item-center justify-center p-3 bg-[rgb(124,92,196)] hover:bg-[rgb(113,122,131)] cursor-pointer rounded-l-s rounded-r-md"
          >
            <MdOutlineVisibility className="text-white " />
          </div>
          <div
            onMouseLeave={handleViewSupplier}
            className={
              viewSupplier
                ? "absolute z-50 bg-blue-700 text-white w-[130px] text-sm top-[43px] left-[140px] rounded-sm flex flex-col gap-2 justify-center p-3"
                : "hidden"
            }
          >
            {ViewSupplier.map((item, i) => (
              <div key={i}>{item.item}</div>
            ))}
          </div>
        </div>
      </div>
      {/* main table */}
      {data ? (
        <Table
          tableColumn={supplierTableColumn}
          rowData={data?.data}
          rowTemplate={SupplierRowTemplate}
          checkAll={true}
        />
      ) : loading ? (
        <Loader />
      ) : null}
    </div>
  );
};

export default SupplierListPage;
