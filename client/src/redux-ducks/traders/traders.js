/**
 * FYI: this is a redux duck https://github.com/erikras/ducks-modular-redux
 */
import axios from 'axios'

import { duckifyActionType } from "../../utils/action-utils";
import { order } from '../../constants/endpoints'

const LOAD_CHART_DATA = duckifyActionType("traders", "LOAD_CHART_DATA");
const HANDLE_CHART_ON_SELECTION = duckifyActionType("traders", "HANDLE_CHART_ON_SELECTION");

export const loadChartData = dispatch => value => {
    dispatch({ type: LOAD_CHART_DATA, value });
};

export const handleChartSelection = dispatch => value =>{
    dispatch({ type: HANDLE_CHART_ON_SELECTION, value });
}

export 

const initState = {
    chart:{}
}

export default function reducer(state = initState, action = {}){
    switch (action.type){
        case LOAD_CHART_DATA:
            return {
                ...state
            }
        default:
            return state
    }

}

