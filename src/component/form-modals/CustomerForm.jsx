
import {
  addNewCustomer,
  updateCustomer,
} from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import CustomerFormInner from "./CustomerFormInner";

const CustomerForm = ({ type, data, setopen }) => {


  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);

    const response =
      type === "create"
        ? await addNewCustomer(values)
        : await updateCustomer(values, data?._id);
    console.log("response", response);
    if (response?.status?.toString()?.includes("20")) {
      successMessage(response?.data?.message);
      setopen(false);
      window.location.reload();
    } else {
      errorMessage(response?.data?.error);
    }
  };

  return (
    <>
      {type === "update" ? (
        <CustomerFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
        />
      ) : (
        <CustomerFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};
export default CustomerForm;
