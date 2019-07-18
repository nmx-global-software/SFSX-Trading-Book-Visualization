import React from "react";
import { connect } from "react-redux";

import TradingFormContainer from "../../containers/trading-form-container";
import HistoryContainer from "../../containers/history-container.js";
import ColumnChartContainer from "../../containers/chart-container";
import DrillDownContainer from '../../containers/drill-down-container'

import wrapper from "../../components/wrapper";

import { loadTradersData } from "../../redux-ducks/traders/traders";

import "./home.css";

const Home = props => {
  return (
    <div className="main">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child ">
                <TradingFormContainer />
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <ColumnChartContainer />
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <DrillDownContainer />
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child">
            <HistoryContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  didMount: props => {
    loadTradersData(dispatch)();
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps);

export const HomeEnhanced = connect(
  null,
  mapDispatchToProps,
  mergeProps
)(wrapper(Home));

export default HomeEnhanced;
