export const createColumnChartConfig = ({title, buy, sell, actions }) => {
  return {
    chartOptions: {
      chart: {
        type: "column"
      },
      plotOptions: {
        series: {
          cursor: "pointer",
          point: {
            events: {
              click: function() {
                actions.handleChartSelection(this.category)
              }
            }
          }
        }
      },
      xAxis: {
        minPadding: 0.05,
        maxPadding: 0.05
      },
      series: [
        {
          title: "Buy",
          color: "#66A7C5",
          data: buy
        },
        {
          title: "Sell",
          color: "#EE3233",
          data: sell
        }
      ]
    }
  };
}
