/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import axios from "axios";

import { duckifyActionType } from "../../utils/action-utils";
import { order } from "../../constants/endpoints";

const LOAD_TRADERS_DATA = duckifyActionType("traders", "LOAD_TRADERS_DATA");
const HANDLE_CHART_ON_SELECTION = duckifyActionType(
  "traders",
  "HANDLE_CHART_ON_SELECTION"
);
const UPDATE_TRADERS_DATA = duckifyActionType("traders", "UPDATE_TRADERS_DATA");

export const loadTradersData = dispatch => value => {
  return axios
    .get(order)
    .then(response => {
      console.log(response.data);
      dispatch({ type: LOAD_TRADERS_DATA, value: response.data });
    })
    .catch(e => {
      console.log(e);
    });
};

export const updateTradersData = values => {
  return { type: UPDATE_TRADERS_DATA, value: values };
};

export const handleChartSelection = dispatch => value => {
  dispatch({ type: HANDLE_CHART_ON_SELECTION, value });
};

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_TRADERS_DATA:
      return {
        ...state,
        ...action.value
      };
    case UPDATE_TRADERS_DATA:
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
}
