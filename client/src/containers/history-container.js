import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/table/table'


const resolvers = [row => row.timestamp, row => row.ticker, row => row.price, row => row.numberOfShares]
const headers = ["Timestamp", "Ticker", "Price", "Share"]

const TableWrapper = ({ data }) => <Table title="Trading log" resolvers={resolvers} headers={headers} data={data} />

const mapStateToProps = ({ traders }) => ({ data: traders.executionHistory })

export const HistoryTableContainer = connect(mapStateToProps)(TableWrapper);
export default HistoryTableContainer
