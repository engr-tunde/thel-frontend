import React, { useEffect, useState } from "react";
import AppSelectField from "../../form/AppSelectField";
import CustomFormik from "../../global/CustomFormik";
import { addPosLeftSIdeValues } from "../../../utility/initialValues";
import { validatePosLeftSIde } from "../../../utility/validations";
import { bankAccount } from "../../../data/expense";
import AppInputField from "../../form/AppInputField";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { RiBarcodeFill } from "react-icons/ri";
import { fetchAllProducts } from "../../../api";
import { selectedSalesColumn } from "../../../data/sale";
import SelectedRowTemplate from "../SelectedRowTemplate";
import Table from "../../global/Table";
import { FiEdit } from "react-icons/fi";
import ScannerModal from "../../global/ScannerModal";

const LeftSideFunction = () => {
  const initialValues = addPosLeftSIdeValues();
  const validationSchema = validatePosLeftSIde();

  const [search, setsearch] = useState();
  const [showProducts, setshowProducts] = useState(false);
  const [selectedProduct, setselectedProduct] = useState([]);
  const [productArr, setproductArr] = useState();
  const [productClick, setproductClick] = useState(false);

  const { data: productData, error: productError } = fetchAllProducts();
  const handleSearch = (val) => {
    setsearch(val);
    setshowProducts(true);
  };

  useEffect(() => {
    let newArr = productData?.data?.filter(
      (item) =>
        item?.product_name?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.product_code?.toLowerCase().includes(search?.toLowerCase())
    );
    setproductArr(newArr);
    if (!search) {
      setshowProducts(false);
    }
  }, [search]);

  const handleAddProductToSelected = (prod) => {
    const newItem = {
      product_name: prod?.product_name,
      product_code: prod?.product_code,
      barcode_format: prod?.barcode_format,
      product_price: prod?.product_price,
      qunatity: 5,
    };
    setselectedProduct((prev) => [...(prev || []), newItem]);
    // toggle to trigger any UI that relied on the old productClick flag
    setproductClick((p) => !p);
  };

  const [showScanner, setShowScanner] = useState(false);

  const handleScannedCode = (code) => {
    // try to find matching product in fetched product list
    const list = productData?.data || [];
    const found = list.find(
      (p) =>
        p?.product_code === code ||
        p?.barcode_format === code ||
        (p?.product_code && code && p.product_code.includes(code))
    );

    if (found) {
      handleAddProductToSelected(found);
    } else {
      // optional: show a small message; for now just log
      console.warn("Scanned code did not match any product:", code);
    }
    setShowScanner(false);
  };

  return (
    <div className="flex flex-col gap-3 p-2 w-[60%]">
      <CustomFormik
        onSubmit={""}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <div className="flex w-full gap-4 items-center">
          <div className="grid grid-cols-4 gap-2 items-center justify-between w-[95%]">
            <AppInputField
              name="date"
              type="date"
              // defaultValue={data?.expense_date}
            />

            <AppSelectField
              name="warehouse"
              type="text"
              array={bankAccount}
              title="Select Warehouse"
              // defaultValue={data?.bank_account}
            />
            <AppSelectField
              name="biller"
              type="text"
              array={bankAccount}
              title="Select Biller"
              // defaultValue={data?.bank_account}
            />
            <AppSelectField
              name="customer"
              type="text"
              array={bankAccount}
              title="Select customer"
              // defaultValue={data?.bank_account}
            />
          </div>
          <div className="bg-[#7c5cc4] px-3 py-1 rounded-md flex items-center cursor-pointer text-white w-[5%]">
            <HiEllipsisHorizontal className="text-3xl" />
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          <div className="w-[95%]">
            <input
              type="text"
              onChange={(e) => {
                handleSearch(e.target.value);
                productClick ? (e.target.value = "") : null;
              }}
              className="w-full border p-2 rounded"
              placeholder="search product"
            />
            {showProducts
              ? productArr?.map((ele, i) => (
                  <div
                    key={i}
                    className="py-2"
                    onClick={() => handleAddProductToSelected(ele)}
                  >
                    {ele.product_name} - {ele.product_code}
                  </div>
                ))
              : null}
          </div>

          <div
            className="bg-[#7c5cc4] px-3 py-1 rounded-md flex items-center cursor-pointer text-white w-[5%]"
            onClick={() => setShowScanner(true)}
            title="Open barcode scanner"
          >
            <RiBarcodeFill className="text-3xl" />
          </div>
          {showScanner && (
            <ScannerModal
              onDetected={handleScannedCode}
              onClose={() => setShowScanner(false)}
            />
          )}
        </div>

        <div className="w-full h-[25vw] bg-amber-100 overflow-y-scroll">
          <Table
            tableColumn={selectedSalesColumn}
            rowData={selectedProduct}
            rowTemplate={SelectedRowTemplate}
          />
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-3 bg-[#f5f6f7] px-2 py-3">
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Items</span>
              <span className="text-[#7c5cc4]">0 (0)</span>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Total</span>
              <span className="text-[#7c5cc4]">0.00</span>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Discount</span>
              <span className="text-[#7c5cc4]">
                <FiEdit />
              </span>
              <span className="text-[#7c5cc4]">0.00</span>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Coupon</span>
              <span className="text-[#7c5cc4]">
                <FiEdit />
              </span>
              <span className="text-[#7c5cc4]">0.00</span>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Tax</span>
              <span className="text-[#7c5cc4]">
                <FiEdit />
              </span>
              <span className="text-[#7c5cc4]">0.00</span>
            </div>
            <div className="w-full flex items-center gap-3">
              <span className="text-[#7c5cc4]">Shipping</span>
              <span className="text-[#7c5cc4]">
                <FiEdit />
              </span>
              <span className="text-[#7c5cc4]">0.00</span>
            </div>
          </div>

          <div className="bg-[#d6deff] flex items-center justify-center h-12">
            <span className="text-[#7c5cc4] text-2xl font-bold">
              Grand Total 0.00
            </span>
          </div>
        </div>
      </CustomFormik>
    </div>
  );
};

export default LeftSideFunction;
