import { addNewSale, updateSale } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import SaleFormInner from "./SaleFormInner";

const SaleForm = ({ type, data, setopen }) => {

  const handleSubmit = async (values) => {
    console.log("values", values);
    const payload = {
      ...values,
      total_before_discount: 5000,
      grand_total: 4900,
    };
    console.log("payload", payload);

    const response =
      type === "create"
        ? await addNewSale(payload)
        : type === "update"
        ? await updateSale(data?._id, payload)
        : null;
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
      {type == "update" ? (
        data && (
          <SaleFormInner
            handleSubmit={handleSubmit}
            type={type}
            data={data}
          />
        )
      ) : (
        <SaleFormInner
          handleSubmit={handleSubmit}
          type={type}
        />
      )}
    </>
  );
};

export default SaleForm;
