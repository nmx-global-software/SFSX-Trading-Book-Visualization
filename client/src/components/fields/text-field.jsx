import React from "react";
import PropTypes from "prop-types";

const TextField = props => {
  const { label, onChange, value, type, disabled } = props;

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <input
              className="input"
              type={type || "text"}
              placeholder="Text input"
              value={value}
              onChange={onChange}
              required
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
  type:PropTypes.string,
  disabled:PropTypes.bool,
};



export default TextField;
