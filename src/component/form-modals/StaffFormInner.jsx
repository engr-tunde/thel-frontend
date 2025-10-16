import AppInputField from "../form/AppInputField";
import CustomFormik from "../global/CustomFormik";
import AppSubmitButton from "../form/AppSubmitButton";
import AppSelectField from "../form/AppSelectField";
import { addStaffValues } from "../../utility/initialValues";
import { validateAddStaff } from "../../utility/validations";
import { role } from "../../data/staff";

const StaffFormInner = ({ type, handleSubmit, data }) => {
  const initialValues = addStaffValues(data);
  const validationSchema = validateAddStaff();

  return (
    <CustomFormik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="w-full flex flex-col gap-10 p-8">
        <div className="w-full flex flex-col gap-5 p-5 border-[1px] border-[rgb(228,230,252)] rounded-sm">
          <div className="flex flex-col gap-4">
            <div>Add Staff</div>
            <div>The field labels marked with * are required input fields.</div>
          </div>

          <div className="grid grid-cols-2 gap-3 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                UserName *
              </label>
              <AppInputField
                name="username"
                type="text"
                defaultValue={data?.username}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Password *
              </label>
              <AppInputField
                name="password"
                type="password"
                defaultValue={data?.password}
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
                Phone Number *
              </label>
              <AppInputField
                name="phone_number"
                type="number"
                defaultValue={data?.phone_number}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Company Name *
              </label>
              <AppInputField
                name="company_name"
                type="text"
                defaultValue={data?.company_name}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="" className="text-[#785873] text-sm">
                Role *
              </label>
              <AppSelectField
                name="role"
                array={role}
                title="Select role"
                defaultValue={data?.role}
              />
            </div>
          </div>

          <AppSubmitButton
            title={type == "create" ? "Add Staff" : "Update Sale"}
            // disabled={disabled}
          />
        </div>
      </div>
    </CustomFormik>
  );
};

export default StaffFormInner;
