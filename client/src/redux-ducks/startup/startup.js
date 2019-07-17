/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import { duckifyActionType } from "../../utils/action-utils";

const LOAD_STARTUP_DATA = duckifyActionType("startup", "LOAD_STARTUP_DATA");

const initState = {
  tickers: [
    { name: "Zeguro", value: "ZGRO" },
    { name: "Google", value: "GOOG" },
    { name: "Facebook", value: "FB" },
    { name: "Oracle", value: "ORCL" }
  ]
};
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case LOAD_STARTUP_DATA:
      return state;
    default:
      return state;
  }
}
