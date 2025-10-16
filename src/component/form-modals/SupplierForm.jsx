import { useState } from "react";
import { addNewPurchase, editPurchase } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import SupplierFormInner from "./SupplierFormInner";

const SupplierForm = ({ type, data, setopen }) => {
  const [docText, setdocText] = useState("");
  const [docError, setdocError] = useState("");
  const [supplier_document, setsupplier_document] = useState();

  const handleSetImage = (e) => {
    let file = e.target.files[0];
    setsupplier_document(file);
    setdocText(file.name);
    setdocError("");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);
    // const payload = {...values, total_before_discount: 500, grand_total:58585}
    const formData = new FormData();
    formData.append("purchase_date", values.name);
    formData.append("reference_number", values.company_name);
    formData.append("purchase_status", values.tax_number);
    formData.append("supplier", values.opening_balance);
    formData.append("product", values.email);
    formData.append("quantity", values.phone_number);
    formData.append("currency", values.whatsapp_number);
    formData.append("exchange_rate", values.address);
    formData.append("amount_currrency", values.city);
    formData.append("order_tax", values.state);
    formData.append("discount", values.postal_code);
    formData.append("shipping_cost", values.country);
    formData.append("supplier_document", supplier_document);

    console.log("formData", ...formData);

    const response =
      type === "create"
        ? await addNewSupplier(formData)
        : await editSupplier(formData, data?._id);
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
        <SupplierFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
          docText={docText}
          docError={docError}
          handleSetImage={handleSetImage}
        />
      ) : (
        <SupplierFormInner
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
export default SupplierForm;
