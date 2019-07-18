import React from "react";
import { connect } from "react-redux";
import Table from "../components/table/table";

const resolvers = [
  row => row.orderTimestamp,
  row => row.trader,
  row => row.numberOfShares
];
const headers = ["Timestamp", "Trader", "Share"];

const TableWrapper = ({ data }) => (
  <Table resolvers={resolvers} headers={headers} data={data} />
);

const mapStateToProps = state => {
  const ticker = state.tradingForm.ticker;
  const data = state.traders.book && state.traders.book[ticker]["1"].orders;
  return {
    data
  };
};

export const DrillDownContainer = connect(mapStateToProps)(TableWrapper);
export default DrillDownContainer;
