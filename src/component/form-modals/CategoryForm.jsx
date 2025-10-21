import { addNewCategory, updateCategory } from "../../api";
import { errorMessage, successMessage } from "../../utility/helpers";
import CategoryFormInner from "./CategoryFormInner";
import { useState } from "react";

const CategoryForm = ({ type, data, setopen }) => {
  const [image, setimage] = useState();
  const [imageError, setimageError] = useState("");
  const [imageText, setimageText] = useState("");
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
    setimageError("");
    setimageText(file.name);
  };

  const handleSubmit = async (values) => {
    console.log("values", values);
    if (!image) {
      setimageError("Category image is missing");
    } else {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("category", values.category);
      formData.append("parent_category", values.parent_category);
      console.log("formData", ...formData);
      const res =
        type === "create"
          ? await addNewCategory(formData)
          : type === "update"
          ? await updateCategory(data?._id, formData)
          : null;
      if (res.status === 200) {
        successMessage(res?.data?.message);
        setopen(false);
        window.location.reload();
      } else {
        errorMessage(res?.data?.error);
      }
    }
  };

  return (
    <>
      {type == "update" ? (
        data && (
          <CategoryFormInner
            handleSubmit={handleSubmit}
            type={type}
            data={data}
            imageError={imageError}
            imageText={imageText}
            handleImageChange={handleImageChange}
          />
        )
      ) : (
        <CategoryFormInner
          handleSubmit={handleSubmit}
          type={type}
          imageError={imageError}
          imageText={imageText}
          handleImageChange={handleImageChange}
        />
      )}
    </>
  );
};

export default CategoryForm;
