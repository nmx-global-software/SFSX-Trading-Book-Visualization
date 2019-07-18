import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { createColumnChartConfig } from './chart-factory';

export default class ColumnChart extends React.Component {

  render() {
    const { buy, sell } = this.props

    console.log({buy, sell});


    if(!buy.length && !sell.length) return null

    const { chartOptions } = createColumnChartConfig(this.props);

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
