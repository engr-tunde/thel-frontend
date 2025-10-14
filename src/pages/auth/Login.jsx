import { useNavigate } from "react-router-dom";
import { loginAmin } from "../../api";
import AppInputField from "../../component/form/AppInputField";
import AppSubmitButton from "../../component/form/AppSubmitButton";
import CustomFormik from "../../component/global/CustomFormik";
import { errorMessage, successMessage } from "../../utility/helpers";
import { loginAdminValues } from "../../utility/initialValues";
import { validateLogin } from "../../utility/validations";
import Cookies from "js-cookie";

function LoginPage() {
  const initialValues = loginAdminValues();
  const validationSchema = validateLogin();
  const history = useNavigate();

  const handleSubmit = async (values, formikActions) => {
    const res = await loginAmin(values);
    console.log("res", res);
    if (res.status === 200) {
      Cookies.set("u-x-key", res.headers["u-x-key"]);
      successMessage(res?.data?.message);
      setTimeout(() => {
        history("/dashboard");
      }, 300);
    } else {
      errorMessage(res?.data?.error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full lg:w-[500px] mx-auto border-[1px] border-gray-300 rounded-md p-5 lg:px-10 flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="font-semibold ">Welcome, Admin</div>
          <div className="text-sm">Please login to continue</div>
        </div>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="w-full mt-4 flex flex-col gap-6">
            <AppInputField name="email" placeholder="Email address" />
            <AppInputField
              name="password"
              type="password"
              placeholder="******"
            />
            <AppSubmitButton title="Login" full={true} />
          </div>
        </CustomFormik>
      </div>
    </div>
  );
}

export default LoginPage;
