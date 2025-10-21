import {
  addNewExpenseCategory,
  updateExpenseCategory,
} from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import ExpenseCatFormInner from "./ExpenseCatFormInner";

const ExpenseCatForm = ({ type, data, setopen }) => {

  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);

    const response =
      type === "create"
        ? await addNewExpenseCategory(values)
        : await updateExpenseCategory(values, data?._id);
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
        <ExpenseCatFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
        />
      ) : (
        <ExpenseCatFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};
export default ExpenseCatForm;
