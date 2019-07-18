/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import { duckifyActionType } from "../../utils/action-utils";
import { loadTradersData } from  "../traders/traders";

const LOAD_STARTUP_DATA = duckifyActionType("startup", "LOAD_STARTUP_DATA");

const initState = {
  tickers: [
    { name: "Zeguro", value: "ZGRO" },
    { name: "Google", value: "GOOG" },
    { name: "Facebook", value: "FB" },
    { name: "Oracle", value: "ORCL" }
  ]
};

export const loadAppData = dispatch=>{
  dispatch(loadTradersData(dispatch))
}

export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case LOAD_STARTUP_DATA:
      return state;
    default:
      return state;
  }
}
