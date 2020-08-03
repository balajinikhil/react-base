import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import authReducer from './authReducers'
import streamsReducer from './streamReducer'

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    streams:streamsReducer
})