import { useState } from "react";
import PurchaseFormInner from "./PurchaseFormInner";
import { addNewPurchase, editPurchase } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";

const PurchaseForm = ({ type, data, setopen }) => {
  const [docText, setdocText] = useState("");
  const [docError, setdocError] = useState("");
  const [supply_document, setsupply_document] = useState();

  const handleSetImage = (e) => {
    let file = e.target.files[0];
    setsupply_document(file);
    setdocText(file.name);
    setdocError("");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);
    const formData = new FormData();
    formData.append("purchase_date", values.purchase_date);
    formData.append("reference_number", values.reference_number);
    formData.append("purchase_status", values.purchase_status);
    formData.append("supplier", values.supplier);
    formData.append("product", values.product);
    formData.append("quantity", values.quantity);
    formData.append("currency", values.currency);
    formData.append("exchange_rate", values.exchange_rate);
    formData.append("amount_currrency", values.amount_currrency);
    formData.append("order_tax", values.order_tax);
    formData.append("discount", values.discount);
    formData.append("shipping_cost", values.shipping_cost);
    formData.append("paid", values.paid);
    formData.append("payment_status", values.payment_status);
    formData.append("note", values.note);
    formData.append("supply_document", supply_document);

    console.log("formData", ...formData);

    const response =
      type === "create"
        ? await addNewPurchase(formData)
        : await editPurchase(formData, data?._id);
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
        <PurchaseFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
          docText={docText}
          docError={docError}
          handleSetImage={handleSetImage}
        />
      ) : (
        <PurchaseFormInner
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
export default PurchaseForm;
