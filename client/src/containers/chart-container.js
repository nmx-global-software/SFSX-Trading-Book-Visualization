import { connect } from 'react-redux'


import { handleChartSelection } from '../redux-ducks/traders/traders'
import ColumnChart from '../components/charts/column-chart';

const mapStateToProps = state => {
  return {
    chart: { test: "data" },

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