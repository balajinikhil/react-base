import {combineReducers} from 'redux'
import googleReducer from './googleReducers'



export default combineReducers({
    auth:googleReducer
})