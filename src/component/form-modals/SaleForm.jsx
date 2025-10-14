import { addNewSale, updateSale } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import { useState } from "react";
import SaleFormInner from "./SaleFormInner";

const SaleForm = ({ type, data, setopen }) => {
  // const [image, setimage] = useState();
  // const [imageError, setimageError] = useState("");
  // const [imageText, setimageText] = useState("");
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setimage(file);
  //   setimageError("");
  //   setimageText(file.name);
  // };

  const handleSubmit = async (values) => {
    console.log("values", values);
    const payload = {
      ...values,
      total_before_discount: 5000,
      grand_total: 4900,
    };
    console.log("payload", payload);
    // if (!image) {
    //   setimageError("Category image is missing");
    // } else {
    //   const formData = new FormData();
    //   formData.append("image", image);
    //   formData.append("category", values.category);
    //   formData.append("parent_category", values.parent_category);
    //   console.log("formData", ...formData);

    const response =
      type === "create"
        ? await addNewSale(values)
        : type === "update"
        ? await updateSale(data?._id, values)
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
            // imageError={imageError}
            // imageText={imageText}
            // handleImageChange={handleImageChange}
          />
        )
      ) : (
        <SaleFormInner
          handleSubmit={handleSubmit}
          type={type}
          // imageError={imageError}
          // imageText={imageText}
          // handleImageChange={handleImageChange}
        />
      )}
    </>
  );
};

export default SaleForm;
