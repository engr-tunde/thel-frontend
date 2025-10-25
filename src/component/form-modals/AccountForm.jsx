import { addNewAccount, updateAccount } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import AccountFormInner from "./AccountFormInner";

const AccountForm = ({ type, data, setopen }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);

    const response =
      type === "create"
        ? await addNewAccount(values)
        : await updateAccount(values, data?._id);
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
        <AccountFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
        />
      ) : (
        <AccountFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};
export default AccountForm;
