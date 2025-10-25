import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import { addWarehouseValues } from "../../utility/initialValues";
import { validateAddWarehouse } from "../../utility/validations";
const WarehouseFormInner = ({ type, handleSubmit, data }) => {
  const initialValues = addWarehouseValues(data);
  const validationSchema = validateAddWarehouse();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Warehouse</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>
          <div className="grid grid-cols-1 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Warehouse *
              </label>
              <AppInputField
                name="warehouse"
                type="text"
                defaultValue={data?.warehouse}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Warehouse Slug *
              </label>
              <AppInputField
                name="warehouse_slug"
                type="text"
                defaultValue={data?.warehouse_slug}
              />
            </div>
          </div>

          <AppSubmitButton
            title={
              type == "create"
                ? "Add Warehouse"
                : "Update Warehouse"
            }
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default WarehouseFormInner;
