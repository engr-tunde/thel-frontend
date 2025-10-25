import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import { addAccountValues } from "../../utility/initialValues";
import { validateAccount } from "../../utility/validations";
const AccountFormInner = ({ type, handleSubmit, data }) => {
  const initialValues = addAccountValues(data);
  const validationSchema = validateAccount();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Account</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-1 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Bank name *
              </label>
              <AppInputField
                name="bank_name"
                type="text"
                defaultValue={data?.bank_name}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Account name *
              </label>
              <AppInputField
                name="account_name"
                type="text"
                defaultValue={data?.account_name}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Account number *
              </label>
              <AppInputField
                name="account_number"
                type="text"
                defaultValue={data?.account_number}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Initial Balance *
              </label>
              <AppInputField
                name="initial_balance"
                type="text"
                defaultValue={data?.initial_balance}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Available Balance *
              </label>
              <AppInputField
                name="available_balance"
                type="text"
                defaultValue={data?.available_balance}
              />
            </div>
          </div>

          <AppSubmitButton
            title={
              type == "create"
                ? "Add Account"
                : "Update Account"
            }
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default AccountFormInner;
