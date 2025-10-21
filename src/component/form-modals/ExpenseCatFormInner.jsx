import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import { addExpenseCategoryValues, addSupplierValues } from "../../utility/initialValues";
import {
  validateAddExpenseCategory,
} from "../../utility/validations";
const ExpenseCatFormInner = ({
  type,
  handleSubmit,
  data,
}) => {
  const initialValues = addExpenseCategoryValues(data);
  const validationSchema = validateAddExpenseCategory();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Expense Category</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-1 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Category *
              </label>
              <AppInputField
                name="category"
                type="text"
                defaultValue={data?.category}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Category Slug *
              </label>
              <AppInputField
                name="category_slug"
                type="text"
                defaultValue={data?.category_slug}
              />
            </div>
          </div>

          <AppSubmitButton
            title={
              type == "create"
                ? "Add Expense Category"
                : "Update Expense Category"
            }
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default ExpenseCatFormInner;
