import React from "react";

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

export default SelectField;
