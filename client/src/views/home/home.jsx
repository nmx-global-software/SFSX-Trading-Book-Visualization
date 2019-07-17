import React from "react";

import TradingFormContainer from '../../containers/trading-form-container';
import HistoryContainer from '../../containers/history-container.js'

import "./home.css";

const Home = () => (
  <div className="main">
    <div className="columns">
      <div className="column">
        <TradingFormContainer />
      </div>
      <div className="column"></div>
      <div className="column" ><HistoryContainer /></div>
    </div>
  </div>
);

export default Home;
