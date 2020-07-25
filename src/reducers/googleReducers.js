import {SIGN_IN, SIGN_OUT} from './../actions/types'


const intialize = {
    isSignedIn:null,
    userId:null
}


 const googleReducer = (auth = intialize, action)=>{

    switch(action.type){
        case SIGN_IN:
            return { ...auth, isSignedIn:true, userId:action.payload }
        case SIGN_OUT:
            return { ...auth, isSignedIn:false }

        default:
            return auth

        }

}

export default googleReducer