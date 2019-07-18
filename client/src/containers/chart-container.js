import { connect } from 'react-redux'


import { handleChartSelection } from '../redux-ducks/traders/traders'
import ColumnChart from '../components/charts/column-chart';

const getSeries = input => {

  const init = { buy: [], sell: [] }

  if(!input) return init;

  return Object.entries(input).reduce((acc, [price, value]) => {
    const totalShares = value.orders.reduce((sum, val) => sum + val.numberOfShares, 0)
    acc[value.type].push([parseFloat(price), totalShares])
    return acc
  }, init)
}

const mapStateToProps = state => {

  const ticker = state.tradingForm.ticker
  const input = state.traders.book && state.traders.book[ticker]
  const { buy, sell } = getSeries(input)

  return {
    chartOptions: {
      chart: {
        type: "column",
        events: {
          click: (e) => console.log(e.yAxis[0].value)
        }
      },
      xAxis: {
        minPadding: 0.05,
        maxPadding: 0.05
      },
      series: [{
        title: "Buy",
        color: '#66A7C5',
        data: buy
      },
      {
        title: "Sell",
        color: '#EE3233',
        data: sell
      }]

    }
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    handleChartSelection: handleChartSelection(dispatch),
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps)

export const ColumnChartContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ColumnChart);

export default ColumnChartContainer