import { useState } from "react";
import { errorMessage, successMessage } from "../../utility/helpers";
import ExpenseFormInner from "./ExpenseFormInner";

const ExpenseForm = ({ type, data, setopen }) => {
  const [docText, setdocText] = useState("");
  const [docError, setdocError] = useState("");
  const [expense_document, setexpense_document] = useState();

  const handleSetImage = (e) => {
    let file = e.target.files[0];
    setexpense_document(file);
    setdocText(file.name);
    setdocError("");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);
    // const payload = {...values, total_before_discount: 500, grand_total:58585}
    const formData = new FormData();
    formData.append("expense_date", values.expense_date);
    formData.append("expense_category", values.expense_category);
    formData.append("Warehouse", values.Warehouse);
    formData.append("amount", values.amount);
    formData.append("Account", values.Account);
    formData.append("note", values.note);
    formData.append("expense_document", expense_document);

    console.log("formData", ...formData);

    const response =
      type === "create"
        ? await addNewExpense(formData)
        : await editExpense(formData, data?._id);
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
        <ExpenseFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
          docText={docText}
          docError={docError}
          handleSetImage={handleSetImage}
        />
      ) : (
        <ExpenseFormInner
          handleSubmit={handleSubmit}
          type={type}
          docText={docText}
          docError={docError}
          handleSetImage={handleSetImage}
        />
      )}
    </>
  );
};
export default ExpenseForm;
