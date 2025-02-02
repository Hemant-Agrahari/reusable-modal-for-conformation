import React from "react";
import "./style.scss";

/**
 * InputField component renders a customizable input field with error handling.
 *
 * @param {Object} props - The props for the input field.
 * @param {string} [props.type="text"] - The type of the input field (e.g., "text", "password", etc.).
 * @param {string} props.name - The name attribute for the input field, typically used in forms.
 * @param {string} props.value - The value of the input field, typically bound to state.
 * @param {function} props.onChange - Function to call on input value change.
 * @param {string} [props.placeholder=""] - The placeholder text for the input field.
 * @param {string} [props.error=""] - Error message to display under the input field.
 * @param {boolean} [props.required=false] - Whether the input field is required.
 * @param {string} [props.className=""] - Additional class names to apply to the input container.
 * @param {Object} rest - Any other props to be spread onto the input element (e.g., autoFocus, maxLength).
 *
 * @returns {JSX.Element} The rendered input field component.
 */
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
