/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import { duckifyActionType } from "../../utils/action-utils";


const HANDLE_TICKER_CHANGE = duckifyActionType("trading-form", "HANDLE_TICKER_CHANGE");
const HANDLE_TRADER_CHANGE = duckifyActionType("trading-form", "HANDLE_TRADER_CHANGE");
const HANDLE_PRICE_CHANGE = duckifyActionType("trading-form", "HANDLE_PRICE_CHANGE");
const HANDLE_SHARES_CHANGE = duckifyActionType("trading-form", "HANDLE_SHARES_CHANGE");
const HANDLE_ORDER_TYPE_CHANGE = duckifyActionType("trading-form", "HANDLE_ORDER_TYPE_CHANGE");
const LOCK_FORM = duckifyActionType("trading-form", "LOCK-FORM");
const UNLOCK_FORM = duckifyActionType("trading-form", "UNLOCK_FORM");

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
  
  export const handleOrderSubmit = dispatch => order => {
    dispatch({ type: LOCK_FORM });
  };

  const initState = {
    ticker: "",
    trader: "",
    price: null,
    shares: null,
    order: "",
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
          shares: action.value
        };
      case HANDLE_ORDER_TYPE_CHANGE:
        return {
          ...state,
          order: action.value
        };
      case LOCK_FORM:
        return {
          ...state,
          isLocked: true
        };
      case UNLOCK_FORM:
        return {
          ...state,
          ...initState
        };
      default:
        return state;
    }
  }