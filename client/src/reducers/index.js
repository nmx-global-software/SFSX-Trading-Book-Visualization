import { combineReducers } from 'redux';

import startupReducer from '../redux-ducks/startup/startup';
import tradingFormReducer from '../redux-ducks/trading-form/trading-form';
import tradingReducer from '../redux-ducks/traders/traders'

const rootReducer = combineReducers({
        startup: startupReducer,
        tradingForm:tradingFormReducer,
        traders:tradingReducer
    })

export default rootReducer;