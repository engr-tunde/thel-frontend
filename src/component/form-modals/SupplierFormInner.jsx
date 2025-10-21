
import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import { addSupplierValues } from "../../utility/initialValues";
import { validateAddSupplier } from "../../utility/validations";
const SupplierFormInner = ({
  type,
  handleSubmit,
  data,
}) => {
  const initialValues = addSupplierValues(data);
  const validationSchema = validateAddSupplier();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Supplier</div>
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
                Company Name
              </label>
              <AppInputField
                name="company_name"
                defaultValue={data?.company_name}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                VAT Number / Tax Number
              </label>
              <AppInputField
                name="tax_number"
                defaultValue={data?.tax_number}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                balance owed
              </label>
              <AppInputField
                name="balance_owed"
                defaultValue={data?.balance_owed}
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
            title={type == "create" ? "Add Supplier" : "Update Supplier"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default SupplierFormInner;
