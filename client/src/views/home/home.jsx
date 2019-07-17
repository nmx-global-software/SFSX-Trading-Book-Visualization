import React from "react";

import TradingFormContainer from '../../containers/trading-form-container';
import "./home.css";

const Home = () => (
  <div className="main">
    <div className="columns">
      <div className="column">
        <TradingFormContainer />
      </div>
      <div className="column" />
      <div className="column" />
    </div>
  </div>
);

export default Home;
