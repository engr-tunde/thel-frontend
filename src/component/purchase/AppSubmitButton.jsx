import { useFormikContext } from "formik";

const AppSubmitButton = ({ title }) => {
  const { handleSubmit, isSubmitting } = useFormikContext;
  return (
    <button type="button" onClick={handleSubmit} className="primary-btn p-2 bg-blue-700 text-white w-[120px] rounded-sm">
      {isSubmitting ? "Submitting..." : title}
    </button>
  );
};

export default AppSubmitButton;
