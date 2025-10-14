import { formDetails, papperSize, productSearch } from "../../utility/dataArr";
import AppSubmitButton from "../../component/form/AppSubmitButton";
import { useEffect, useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import CustomFormik from "../../component/global/CustomFormik";
import Table from "../../component/global/Table";
import FormModal from "../../component/form/FormModal";
// import { printbarcode } from "../../../utility/initialValues";
// import { validateAddProduct } from "../../../utility/validations";

const PrintBarcodePage = () => {
  const dropdownValue =
    "20 Label per Sheet, Sheet Size: 8.5 x 11, Label Size: 4 x 1, Label...";
  const [selectedValue, setSelectedValue] = useState(dropdownValue);

  //handle change
  const handleChanges = (event) => {
    setSelectedValue(event.target.value);
  };

  const tableColumn = [
    {
      accessor: "input",
      title: "Name",
      className: "font-semibold p-2",
    },
    {
      accessor: "Date",
      title: "Code",
      className: "font-semibold p-2",
    },
    {
      accessor: "Refrence",
      title: "Quantity",
      className: "font-semibold p-2",
    },
  ];

  // const initialValues = printbarcode()
  // const validationSchema = validateAddProduct()
  return (
    <CustomFormik>
      <div className="w-full flex flex-col p-6 text-[rgb(94,88,115)] bg-white border-[2px] border-[rgb(229,229,229)] rounded-lg mr-12">
        <h1 className="font-semibold text-xl mb-2">Print Barcode</h1>
        <p className="text-sm mb-6 text-gray-400">
          The field labels marked with * are required input fields.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <label htmlFor="" className="font-semibold text-[14px]">
            Add Product Barcode
          </label>
          <div className="w-max">
            <FormModal
              table="product"
              type="create"
              title="Generate Product Barcode"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Existing Product Barcodes</h1>
          <p className="text-sm text-gray-400">
            Below are the available generated barcodes for products
          </p>
        </div>
        <Table
          tableColumn={tableColumn}
          deleIcon={true}
          // rowData={printBarode}
          // rowTemplate={rowTemplate}
        />
        {/* <div className="w-full grid grid-cols-4 h-36 border-[rgb(229,229,229)] border-b-[1px]">
        {productSearch?.map((item, i) => (
          <div key={i} className="">
            {item.heading}
          </div>
        ))}
        <RiDeleteBinLine />
      </div> */}
        <div className="w-full flex flex-col gap-3 pt-4 border-b-1 border-b-[rgb(229,229,229)] pb-6 mt-4">
          <h1 className="text-[rgb(94,88,115)] font-semibold text-sm">
            Information on Label *
          </h1>
          <div className="w-full grid grid-cols-3 justify-between item-center gap-y-5">
            {formDetails?.map((item, i) => {
              // to validate the info label
              const [validate, setValidate] = useState(formDetails); //original data

              const checkValidate = () => {
                setValidate(!validate);
              };

              return (
                <div key={i} className="flex flex-col gap-1 w-[250px]">
                  <div className="flex items-center gap-1">
                    <span
                      key={i}
                      onClick={checkValidate}
                      className={`${item.className} border-1  size-4 items-center flex rounded-sm`}
                    >
                      <IoIosCheckmark
                        className={
                          validate ? "bg-blue-800 text-white" : "hidden"
                        }
                      />
                    </span>
                    <label
                      htmlFor=""
                      className="font-semibold text-[rgb(94,88,115)]"
                    >
                      {item.Name}
                    </label>
                  </div>
                  <div className="flex gap-[2px]">
                    <span>{item.size}:</span>
                    <div className="border-[rgb(118,118,118)] border-1 rounded-sm relative h-[35px]">
                      <input
                        className={`${item.className}  h-full`}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full py-12 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="myDropdown"
                className="text-[rgb(94,88,115)] font-semibold text-sm"
              >
                Paper Size *
              </label>
              <select
                name=""
                id="myDropdown"
                value={selectedValue}
                className="border-[rgb(118,118,118)] h-10  w-[60%] text-blue-600 border-1 rounded-md"
                onChange={handleChanges}
              >
                {papperSize?.map((item, i) => (
                  <option
                    key={i}
                    value={item.itemList}
                    className="p-4 text-sm rounded-md bg-[rgb(248,249,250)]"
                  >
                    {item.itemList}
                  </option>
                ))}
              </select>
              <p>Selected value: {selectedValue}</p>
            </div>
            <div className="border-1 border-[rgb(118,118,118)] rounded-md w-[85px] flex justify-center bg-blue-800 text-white">
              <AppSubmitButton title="submit" />
            </div>
          </div>
        </div>
      </div>
    </CustomFormik>
  );
};

export default PrintBarcodePage;
