import { addNewWarehouse, updateWarehouse } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import WarehouseFormInner from "./WarehouseFormInner";

const WarehouseForm = ({ type, data, setopen }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(false);
    console.log("values", values);

    const response =
      type === "create"
        ? await addNewWarehouse(values)
        : await updateWarehouse(values, data?._id);
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
        <WarehouseFormInner
          handleSubmit={handleSubmit}
          data={data}
          type={type}
        />
      ) : (
        <WarehouseFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};
export default WarehouseForm;
