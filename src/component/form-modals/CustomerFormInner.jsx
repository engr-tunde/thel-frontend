
import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import { addCustomerValues } from "../../utility/initialValues";
import { validateAddCustomer } from "../../utility/validations";
const CustomerFormInner = ({
  type,
  handleSubmit,
  data,
}) => {
  const initialValues = addCustomerValues(data);
  const validationSchema = validateAddCustomer();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Customer</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-3 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Name *
              </label>
              <AppInputField
                name="name"
                type="text"
                defaultValue={data?.name}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Email *
              </label>
              <AppInputField
                name="email"
                type="email"
                defaultValue={data?.email}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Phone *
              </label>
              <AppInputField
                name="phone"
                defaultValue={data?.phone}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                WhatsApp Number
              </label>
              <AppInputField
                name="whatsapp_number"
                defaultValue={data?.whatsapp_number}
              />
            </div>
           
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                VAT Number
              </label>
              <AppInputField
                name="vat_number"
                defaultValue={data?.vat_number}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Opening balance
              </label>
              <AppInputField
                name="opening_balance"
                defaultValue={data?.opening_balance}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Initial deposit
              </label>
              <AppInputField
                name="initial_deposit"
                defaultValue={data?.initial_deposit}
              />
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Address *
              </label>
              <AppInputField name="address" defaultValue={data?.address} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                City *
              </label>
              <AppInputField name="city" defaultValue={data?.city} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                State
              </label>
              <AppInputField name="state" defaultValue={data?.state} />
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Country
              </label>
              <AppInputField name="country" defaultValue={data?.country} />
            </div>
          </div>

          <AppSubmitButton
            title={type == "create" ? "Add Customer" : "Update Customer"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default CustomerFormInner;
