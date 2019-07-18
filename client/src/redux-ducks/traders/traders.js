/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import axios from 'axios'

import { duckifyActionType } from "../../utils/action-utils";
import { order } from '../../constants/endpoints'

const LOAD_TRADERS_DATA = duckifyActionType("traders", "LOAD_TRADERS_DATA");
const HANDLE_CHART_ON_SELECTION = duckifyActionType("traders", "HANDLE_CHART_ON_SELECTION");

export const loadTradersData = dispatch => value => {
    return axios.get(order)
      .then(response=> {
        console.log(response);
        dispatch({ type: LOAD_TRADERS_DATA, value:response.data });
      })
      .catch(e=>{
        console.log(e);
      })
};

export const handleChartSelection = dispatch => value =>{
    dispatch({ type: HANDLE_CHART_ON_SELECTION, value });   
}



export default function reducer(state = {}, action = {}){
    switch (action.type){
        case loadTradersData:
            return {
                ...state,
                ...action.value
            }
        default:
            return state
    }

}

