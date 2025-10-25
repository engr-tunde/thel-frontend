import {
  currencies,
  orderTax,
  paymentStatus,
  purchaseStatus,
  supplier,
} from "../../data/purchases";
import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import AppSelectField from "../form/AppSelectField";
import AppTextAreaField from "../form/AppTextAreaField";
import { addExpenseValues } from "../../utility/initialValues";
import { validateAddExpense } from "../../utility/validations";
import AppFileField from "../form/AppFileField";
import { bankAccount, expenseCategory, warehouse } from "../../data/expense";
import { fetchAllExpenseCategory } from "../../api";
import { useEffect, useState } from "react";

const ExpenseFormInner = ({
  type,
  handleSubmit,
  data,
  docText,
  docError,
  handleSetImage,
}) => {
  const initialValues = addExpenseValues(data);
  const validationSchema = validateAddExpense();

  const { data: expenseCatData } = fetchAllExpenseCategory();

  const [cats, setcats] = useState();
  useEffect(() => {
    if (expenseCatData) {
      let dataArr = expenseCatData?.data;
      let newArr = [];
      if (dataArr?.length) {
        for (let ele of dataArr) {
          newArr.push(ele?.category);
        }
        setcats(newArr);
      }
    }
  }, [expenseCatData]);

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Expense</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Date
              </label>
              <AppInputField
                name="expense_date"
                type="date"
                defaultValue={data?.expense_date}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Expense Category
              </label>
              {cats && (
                <AppSelectField
                  name="expense_category"
                  array={cats}
                  title="Select Expense Category"
                  defaultValue={data?.expense_category}
                />
              )}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Warehouse
              </label>
              <AppSelectField
                name="warehouse"
                array={warehouse}
                title="Select Warehouse"
                defaultValue={data?.warehouse}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Amount *
              </label>
              <AppInputField name="amount" type="number" />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Bank Account
              </label>
              <AppSelectField
                name="bank_account"
                array={bankAccount}
                title="Select Account"
                defaultValue={data?.bank_account}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-gray-400 text-sm">
                Attach Document
              </label>
              <AppFileField
                label="Document"
                name="expense_document"
                nameText={docText}
                error={docError}
                handleChange={handleSetImage}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className="text-[#785873] text-sm">
              Note
            </label>
            <AppTextAreaField
              name="note"
              placeholder="Enter some notes"
              rows="6"
            />
          </div>

          <AppSubmitButton
            title={type == "create" ? "Add Expense" : "Update Expense"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ExpenseFormInner;
