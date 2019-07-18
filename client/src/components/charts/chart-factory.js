export const createColumnChartConfig = ({ title, buy, sell, actions }) => {
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
              click: function () {
                actions.handleChartSelection({ price: this.category, type: this.series.name })
              }
            }
          }
        }
      },
      xAxis: {
        minPadding: 0.05,
        maxPadding: 0.05,
        title: {
          text: 'Price'
        }
      },
      yAxis: {
        title: {
          text: 'Shares'
        }
      },
      series: [
        {
          name: "Buy",
          color: "#66A7C5",
          data: buy
        },
        {
          name: "Sell",
          color: "#EE3233",
          data: sell
        }
      ]
    }
  };
}
