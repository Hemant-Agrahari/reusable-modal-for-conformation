import React from "react";
import "./style.scss";
const InputField = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  required = false,
  className = "",
  ...rest
}) => {
  return (
    <div className={`input-container ${className}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${error ? "input-error" : ""}`}
        {...rest}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputField;
