import { AiFillPrinter } from "react-icons/ai";
import {
  FaRegEye,
  FaRegFile,
  FaRegFileAlt,
  FaRegFilePdf,
} from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineFilterAlt,
} from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { productListInputData } from "@/utility/dataArr";
import ProductListFilterInput from "@/component/form/ProductListFilterInput";
import { useState } from "react";
import FormModal from "../../component/form/FormModal";
import ImportProduct from "../../component/products/ImportProduct";
import { productTableColumn, proListRowData } from "../../data/productData";
import Table from "../../component/global/Table";
import ProductRowTemplate from "../../component/products/ProductRowTemplate";
import FilterProduct from "../../component/products/FilterProduct";
import { fetchAllProducts } from "../../api";

const ProductPageList = () => {
  const [eyeBtnOpen, setEyeBtnOpen] = useState(false);
  const [filterOpen, setfilterOpen] = useState(false);
  const [importOpen, setimportOpen] = useState(false);

  const { data, loading, mutate } = fetchAllProducts();
  console.log("data", data);
  mutate();

  const handleImportClick = () => {
    setimportOpen(!importOpen);
  };

  return (
    <div className="w-full h-full bg-white p-5 rounded-lg shadow-sm">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col">
          <div className="">
            {/* The three form modals buttons */}
            <div className="flex items-center gap-2 w-full">
              <FormModal table="product" type="create" title="Add Product" />
              <div
                onClick={() => handleImportClick()}
                className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#7c5cc4] text-lg text-[15px] text-white cursor-pointer trigger_import"
              >
                <span>
                  <FaRegFileAlt />
                </span>
                <span>Import Product</span>
              </div>
              <div className="flex items-center gap-2 py-2 px-3 rounded-sm bg-[#ffc107] text-lg text-[15px] cursor-pointer">
                <span>
                  <MdOutlineFilterAlt />
                </span>
                <span onClick={() => setfilterOpen(!filterOpen)}>
                  Filter Product
                </span>
              </div>
            </div>

            {/* Filter by category modal section*/}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-linear ${
                filterOpen ? "max-h-[1000px]" : "max-h-[100px]"
              }`}
            >
              {filterOpen && (
                <FilterProduct productListInputData={productListInputData} />
              )}
            </div>

            {/* import modal section */}
            <div>
              {importOpen && (
                <ImportProduct handleImportClick={handleImportClick} />
              )}
            </div>

            {/* Records per page */}
            <div className="flex items-center justify-between mt-10">
              {/* {left side */}
              <div className="flex items-center gap-1">
                <select className="border border-gray-300 rounded-sm outline-none px-3 py-1">
                  <option value="10">10</option>
                  <option value="20">25</option>
                  <option value="30">50</option>
                  <option value="40">All</option>
                </select>
                <span className="text-gray-600">records per page</span>
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
          </div>

          {/* Table section */}
          {data ? (
            <Table
              tableColumn={productTableColumn}
              rowData={data?.data}
              rowTemplate={ProductRowTemplate}
              checkAll={true}
            />
          ) : null}
        </div>

        <div className="flex items-center justify-between w-full  p-5">
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
    </div>
  );
};

export default ProductPageList;
