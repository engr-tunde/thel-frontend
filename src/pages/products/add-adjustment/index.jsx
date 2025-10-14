import { useState } from "react";
import AppSubmitButton from "../../../component/form/AppSubmitButton";
import { availableSearch, tableTitle } from "../../../utility/dataArr";
import { RiDeleteBinLine } from "react-icons/ri";
import CustomFormik from "../../../component/global/CustomFormik";
import { addAdjustment } from "../../../utility/initialValues";
import { ValidateAddAdjustment } from "../../../utility/validations";
import { warehouse } from "../../../data/purchases";
import AppInputField from "../../../component/form/AppInputField";

const AddAdjustmentPage = () => {
  const [avilable, setAvailable] = useState();

  const handleChanges = (event) => {
    setAvailable(event.target.value);
  };

  const initialValues = addAdjustment();
  const validationSchema = ValidateAddAdjustment();

  const handleSubmit = () => {
    Cconsole.log("is coming");
  };

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col p-3 bg-white text-[rgb(94,88,115)] border-[2px] border-[rgb(229,229,229)] rounded-lg mr-12">
        <h1 className="font-semibold text-xl mb-12">Add Adjustment</h1>
        <p className="text-sm mb-6">
          The field labels marked with * are required input fields.
        </p>
        <div className="w-full flex gap-3 items-center mb-8">
          <div className="flex flex-col gap-1 w-[40%]">
            <label htmlFor="" className="text-[#785873] text-sm">
              Warehouse *
            </label>
            <AppInputField name="warehouse" options={warehouse} />
          </div>
          <div className="flex flex-col gap-2 w-[40%]">
            <label htmlFor="" className="text-[14px] font-medium">
              Attach Document
            </label>
            <div className="border-[rgb(217,216,246)] border-[1px] rounded-md w-full">
              <AppInputField name="attachDocument" type="file" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-12">
          <label htmlFor="" className="font-bold text-[14px]">
            Select Product
          </label>
          <div className=" flex h-[35px] border-[1px] gap-0 border-[rgb(229,229,229)] items-center">
            <div className="bg-[rgb(94,88,115)] w-[6%] h-full"></div>
            <AppInputField
              name="selectProduct"
              placeholder="please type product code and select"
              className=" bg-[rgb(253,253,255)] h-full"
            />
          </div>
        </div>
        <div className="flex w-full flex-col mb-10">
          <h2 className="font-medium text-[16px] mb-4">Order Table *</h2>
          <table className="w-full h-[90px] overflow-y-scroll">
            <thead className="mb-3  text-gray-400 border-b-1 border-[rgb(222,226,230)]">
              <tr className="">
                {tableTitle?.map((item, i) => (
                  <th key={i} className={`${item.className} text-start`}>
                    {item.title}
                  </th>
                ))}
                <th>
                  <RiDeleteBinLine />
                </th>
              </tr>
            </thead>
            <tbody className="mt-20 overflow-y-scroll">
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="font-bold text-[14px]">
            Name
          </label>
          <div className="w-full border-1 border-[rgb(222,226,230)] rounded-md">
            <textarea name="" id="" className="w-full"></textarea>
          </div>
          <div className="w-[70px] bg-blue-800 text-white">
            <AppSubmitButton title="Submit" />
          </div>
        </div>
      </div>
    </CustomFormik>
  );
};

export default AddAdjustmentPage;
