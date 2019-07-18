import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default class ColumnChart extends React.Component {

  render() {
    const { chartOptions } = this.props;
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
