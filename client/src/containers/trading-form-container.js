import { connect } from 'react-redux'

import TradingForm from '../views/home/trading-form';
import { handleTickerChange, handleTraderChange, handlePriceChange, handleSharesChange, handleOrderTypeChange, handleOrderSubmit } from '../redux-ducks/trading-form/trading-form'

const mapStateToProps = state => {
    return {
      tradingForm:state.tradingForm,
      tickers:state.startup.tickers  
    }
  }

  const mapDispatchToProps = dispatch => ({
      actions:{
        handleTickerChange:handleTickerChange(dispatch),
        handleTraderChange:handleTraderChange(dispatch),
        handlePriceChange:handlePriceChange(dispatch),
        handleSharesChange:handleSharesChange(dispatch),
        handleOrderTypeChange:handleOrderTypeChange(dispatch),
        handleOrderSubmit:handleOrderSubmit(dispatch),
      }
  })

  const mergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, stateProps, dispatchProps, ownProps)

export const TradingFormContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TradingForm);

export default TradingFormContainer