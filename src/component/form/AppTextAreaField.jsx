import { useFormikContext } from "formik";

const AppTextAreaField = ({
  name,
  type,
  placeholder,
  className,
  defaultValue,
  rows = 4,
}) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <div className="flex flex-col gap-2">
      <textarea
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        className="border border-[rgb(228,230,252)] rounded-md p-2 w-full"
        type={type}
        placeholder={placeholder}
      />
      {error && isInputTouched && <span className="error">{error}</span>}
    </div>
  );
};

export default AppTextAreaField;
