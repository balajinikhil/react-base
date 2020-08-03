import {SIGN_IN, SIGN_OUT} from '../actions/types'

const intialize = {
    isSignedIn:null,
    userId:null
}

const authReducer = (state = intialize, action)=>{
    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn:true, userId:action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn:false}
        default:
            return state
    }
}

export default authReducer