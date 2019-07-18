/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import axios from 'axios'

import { duckifyActionType } from "../../utils/action-utils";
import { order } from '../../constants/endpoints'
import { updateTradersData } from '../traders/traders'

export const HANDLE_TICKER_CHANGE = duckifyActionType("trading-form", "HANDLE_TICKER_CHANGE");
export const HANDLE_TRADER_CHANGE = duckifyActionType("trading-form", "HANDLE_TRADER_CHANGE");
export const HANDLE_PRICE_CHANGE = duckifyActionType("trading-form", "HANDLE_PRICE_CHANGE");
export const HANDLE_SHARES_CHANGE = duckifyActionType("trading-form", "HANDLE_SHARES_CHANGE");
export const HANDLE_ORDER_TYPE_CHANGE = duckifyActionType("trading-form", "HANDLE_ORDER_TYPE_CHANGE");
export const LOCK_FORM = duckifyActionType("trading-form", "LOCK-FORM");
export const UNLOCK_FORM = duckifyActionType("trading-form", "UNLOCK_FORM");
export const FORM_SUCCESS = duckifyActionType("trading-form", "FORM_SUCCESS");

export const handleTickerChange = dispatch => value => {
    dispatch({ type: HANDLE_TICKER_CHANGE, value });
  };

  export const handleTraderChange = dispatch => value => {
    dispatch({ type: HANDLE_TRADER_CHANGE, value });
  };

  export const handlePriceChange = dispatch => value => {
    dispatch({ type: HANDLE_PRICE_CHANGE, value });
  };

  export const handleSharesChange = dispatch => value => {
    dispatch({ type: HANDLE_SHARES_CHANGE, value });
  };

  export const handleOrderTypeChange = dispatch => value => {
    dispatch({ type: HANDLE_ORDER_TYPE_CHANGE, value });
  };


  export const handleOrderSubmit = dispatch => data => {

    dispatch({ type: LOCK_FORM });
    delete data.isLocked;
    return axios.post(order, data)
      .then(response=> {
        dispatch({ type: UNLOCK_FORM });
        dispatch({type:FORM_SUCCESS})
        dispatch(updateTradersData(response.data))
      })
      .catch(e=>{
        console.log(e);
        dispatch({ type: UNLOCK_FORM })
      })
  };

  export const initState = {
    ticker: "ZGRO",
    trader: "",
    price: "",
    numberOfShares: "",
    type: "buy",
    isLocked: false
  };

  export default function reducer(state = initState, action = {}) {
    switch (action.type) {
      case HANDLE_TICKER_CHANGE:
        return {
          ...state,
          ticker: action.value
        };
      case HANDLE_TRADER_CHANGE:
        return {
          ...state,
          trader: action.value
        };
      case HANDLE_PRICE_CHANGE:
        return {
          ...state,
          price: action.value
        };
      case HANDLE_SHARES_CHANGE:
        return {
          ...state,
          numberOfShares: action.value
        };
      case HANDLE_ORDER_TYPE_CHANGE:
        return {
          ...state,
          type: action.value
        };
      case LOCK_FORM:
        return {
          ...state,
          isLocked: true
        };
      case UNLOCK_FORM:
        return {
          ...state,
          isLocked:false
        };
        case FORM_SUCCESS:
        return {
          ...state,
          ...initState,
          ticker: state.ticker
        };
      default:
        return state;
    }
  }