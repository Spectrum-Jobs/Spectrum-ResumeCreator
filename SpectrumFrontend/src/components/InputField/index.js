import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utilities/Validator";
import "../FormStyles.css";

const InputField = ({
  value,
  label,
  inputClass,
  labelClass,
  placeholder,
  validators,
  type,
  onChange,
  disabled,
}) => {
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div>
      <div class="form-info">
        {label && (
          <label htmlFor="app-input-field" className={labelClass}>
            {label}
          </label>
        )}
        <input
          type={type}
          value={value}
          className={inputClass}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
        />
        {error && <span className="error-msg">{error.message}</span>}
      </div>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  inputClass: "",
  labelClass: "",
  type: "text",
  validators: [],
  disabled: false,
};

export default InputField;
