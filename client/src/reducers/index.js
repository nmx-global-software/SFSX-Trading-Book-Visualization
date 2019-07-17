import { combineReducers } from 'redux';

import startupReducer from '../redux-ducks/startup/startup';

const rootReducer = combineReducers({
        startup: startupReducer,
    })

export default rootReducer;