import { connect } from "react-redux";

import { handleChartSelection } from "../redux-ducks/traders/traders";
import ColumnChart from "../components/charts/column-chart";

const getSeries = input => {
  const init = { buy: [], sell: [] };

  if (!input) return init;

  return Object.entries(input).reduce((acc, [price, value]) => {
    const totalShares = value.orders.reduce(
      (sum, val) => sum + val.numberOfShares,
      0
    );
    acc[value.type].push([parseFloat(price), totalShares]);
    return acc;
  }, init);
};

const mapStateToProps = state => {
  const ticker = state.tradingForm.ticker;
  const input = state.traders.book && state.traders.book[ticker];
  const { buy, sell } = getSeries(input);

  return {
    buy,
    sell
  };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    handleChartSelection: handleChartSelection(dispatch)
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export const ColumnChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ColumnChart);

export default ColumnChartContainer;
