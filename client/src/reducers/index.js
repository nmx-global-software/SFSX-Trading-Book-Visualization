import { combineReducers } from 'redux';

import startupReducer from '../redux-ducks/startup/startup';
import tradingFormReducer from '../redux-ducks/trading-form/trading-form';


const rootReducer = combineReducers({
        startup: startupReducer,
        tradingForm:tradingFormReducer
    })

export default rootReducer;