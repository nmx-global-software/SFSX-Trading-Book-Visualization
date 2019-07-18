import { connect } from 'react-redux'


import { handleChartSelection } from '../redux-ducks/traders/traders'
import ColumnChart from '../components/charts/column-chart';

const mapStateToProps = state => {



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
        color: 'blue',
        data: [
          [10, 100],
          [11, 90],
          [12, 101]
        ]
      },

      {
        color: 'red',
        data: [
          [15, 100],
          [16, 90],
          [17, 101]
        ]
      }
      ]

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