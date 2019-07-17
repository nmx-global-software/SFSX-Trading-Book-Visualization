import React from "react";

import TextField from "../../components/fields/text-field";
import SelectField from "../../components/fields/select-field";
import RadioField from "../../components/fields/radio-field";

const TradingForm = props => {
  return (
    <form onSubmit={(e)=> {e.preventDefault(); props.actions.handleOrderSubmit(props.tradingForm)}}>
      <SelectField
        disabled={props.tradingForm.isLocked}
        data={props.tickers}
        label="SFSX"
        onChange={e => props.actions.handleTickerChange(e.target.value)}
        value={props.tradingForm.ticker}
      />
      <TextField
        disabled={props.tradingForm.isLocked}
        label="Trader"
        onChange={e => props.actions.handleTraderChange(e.target.value)}
        value={props.trader}
      />
      <TextField
        disabled={props.tradingForm.isLocked}
        label="Price"
        type="number"
        onChange={e => props.actions.handlePriceChange(e.target.value)}
        value={props.tradingForm.price}
      />
      <TextField
        disabled={props.tradingForm.isLocked}
        label="Shares"
        type="number"
        onChange={e => props.actions.handleSharesChange(e.target.value)}
      />
      <RadioField
        disabled={props.tradingForm.isLocked}
        firstLabel="Buy"
        secondLabel="Sell"
        firstValue="buy"
        secondValue="sell"
        value={props.tradingForm.order}
        onChange={e => props.actions.handleOrderTypeChange(e.target.value)}
      />

      <div className="field is-horizontal">
        <div className="field-label" />
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit" disabled={props.tradingForm.isLocked}>Add order</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TradingForm;
