import React from "react";

const RadioField = props => {
  const { firstLabel, secondLabel, onChange } = props;

  return (
    <div className="field is-horizontal">
        <div className="field-label is-normal">
        <label className="label"></label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <label className="radio">
              <input type="radio" name="orderType" value="buy" onChange={onChange}/>
              {firstLabel}
            </label>
            <label className="radio">
              <input type="radio" name="orderType" value="sell" onChange={onChange}/>
              {secondLabel}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioField;
