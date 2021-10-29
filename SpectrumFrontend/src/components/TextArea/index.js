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
  cols,
  rows,
  textareadisabled,
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
        <textarea
          type={type}
          value={value}
          className={inputClass}
          onChange={handleInputChange}
          rows={rows}
          cols={cols}
          disabled={textareadisabled}
          placeholder={placeholder}
        ></textarea>
        {error && <span className="error-msg">{error.message}</span>}
      </div>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  inputClass: PropTypes.array,
  labelClass: PropTypes.array,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  textareadisabled: PropTypes.bool,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  inputClass: [],
  labelClass: [],
  type: "text",
  rows: "",
  cols: "",
  validators: [],
  textareadisabled: false,
};

export default InputField;
