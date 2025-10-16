import { addNewStaff } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import StaffFormInner from "./StaffFormInner";

const StaffForm = ({ type, data, setopen }) => {
  const handleSubmit = async (values) => {
    console.log("values", values);
    console.log("the submit button is clicked");

    const response = type === "create" ? await addNewStaff(values) : null; // : type === "update"
    // ? await updateSale(data?._id, values)
    // null;
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
          <StaffFormInner handleSubmit={handleSubmit} type={type} data={data} />
        )
      ) : (
        <StaffFormInner handleSubmit={handleSubmit} type={type} />
      )}
    </>
  );
};

export default StaffForm;
