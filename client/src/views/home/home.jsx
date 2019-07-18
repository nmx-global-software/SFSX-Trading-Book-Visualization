import React from "react";


import TradingFormContainer from '../../containers/trading-form-container';
import HistoryContainer from '../../containers/history-container.js'
import ColumnChart from '../../components/charts/column-chart'

import "./home.css";

const Home = props=>{
  return (
    <div className="main">
    <div className="columns">
      <div className="column">
        <TradingFormContainer />
      </div>
      <div className="column"><ColumnChart /></div>
      <div className="column" ><HistoryContainer /></div>
    </div>
  </div>
  )
}




export default Home;
