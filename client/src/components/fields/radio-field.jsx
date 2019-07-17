import React from "react";

const RadioField = props => {
  const { firstLabel, secondLabel, onChange, value, firstValue, secondValue, disabled } = props;

  return (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
        <label className="label"></label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <label className="radio">
              <input type="radio" name="orderType" value="buy" onChange={onChange} checked={value===firstValue} disabled={disabled}/>
              {firstLabel}
            </label>
            <label className="radio">
              <input type="radio" name="orderType" value="sell" onChange={onChange} checked={value===secondValue} disabled={disabled}/>
              {secondLabel}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioField;
