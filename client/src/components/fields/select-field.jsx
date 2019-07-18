import React from "react";
import PropTypes from "prop-types";

const SelectField = props => {
  const { label, onChange, value, data, disabled } = props;

  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select">
              <select value={value} onChange={onChange} required disabled={disabled}>
                {data.map((d, i)=>(
                  <option key={i} name={d.value}>{d.value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
  disabled:PropTypes.bool,
  data:PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SelectField;
