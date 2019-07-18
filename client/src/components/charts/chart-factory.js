// Reference: https://api.highcharts.com/highcharts

export const xAxisLabelMaxLength = 35

export const addSeriesClickHandler = (series, clickHandler) => {
    if (!Array.isArray(series) || series.length === 0)
      return
  
    series.forEach(s => {
      s.cursor = 'pointer'
  
      if (!Array.isArray(s.data) || s.data.length === 0)
        return
  
      s.data.forEach(d => {
        d.events = {
          ...d.events,
          click: clickHandler
        }
      })
    })
  }
  
export const createColumnChartConfig = (title, subtitle, xTitle, yTitle, height) => {
  const baseConfig = createConfig(title, subtitle, height)
  return {
    ...baseConfig,
    chart: {
      ...baseConfig.chart,
      type: 'column'
    },
    tooltip: {
      ...baseConfig.tooltip,
      pointFormatter: function () {
        const point = this
        let percentage = 0
        let seriesTotal = 0

        for (let index = 0; index < point.series.yData.length; index++) {
          seriesTotal += point.series.yData[index]
        }

        if (seriesTotal === 0)
          seriesTotal = 1

        percentage = Math.round(point.y / seriesTotal * 1000) / 10
        return `<div><b>${percentage.toFixed(1)}%</b> of total ${point.series.name}</div>`
      }
    },
    xAxis: {
      type: 'category',
      title: {
        text: xTitle
      },
      labels: {
        useHTML: true,
        reserveSpace: true,
        //autoRotation: false,
        align: 'center',
        formatter: function () {
          const point = this
          //adding spaces so that word will break and wrap
          const value = point.value.replace('/', ' / ')

          if (point.value.length > xAxisLabelMaxLength)
            return `<span title="${point.value}">${value.slice(0, xAxisLabelMaxLength - 3)}...</span>`

          return value
        }
      }
    },
    yAxis: {
      title: {
        text: yTitle
      }
    }
  }
}


export const createConfig = (title, subtitle, height) => {
  const config = {
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    },
    chart: {
      height
    },
    tooltip: {
      useHTML: true,
      hideDelay: 200,
      headerFormat: '<span style="color:{point.color}">{point.key}</span>'
    },
    drilldown: {
      drillUpButton: {
        relativeTo: 'spacingBox',
        position: {
          align: 'right',
          verticalAlign: 'top',
          x: 10,
          y: 50
        }
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.y}',
          distance: 10,
          style: {
            textOutline: false
          }
        }
      }
    },
  }

  return config
}
