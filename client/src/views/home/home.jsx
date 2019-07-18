import React from "react";
import { connect } from 'react-redux'

import TradingFormContainer from '../../containers/trading-form-container';
import HistoryContainer from '../../containers/history-container.js'
import ColumnChart from '../../components/charts/column-chart'

import wrapper from '../../components/wrapper'

import { loadTradersData } from '../../redux-ducks/traders/traders';

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

const mapDispatchToProps = dispatch => ({
  didMount:props =>{
    loadTradersData(dispatch)()
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps)

export const HomeEnhanced = connect(null, mapDispatchToProps, mergeProps)(wrapper(Home))

export default HomeEnhanced
