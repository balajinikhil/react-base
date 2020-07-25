import React from 'react'
import {connect} from 'react-redux'

import {signUp, signOut} from './../actions'

class GoogleAuth extends React.Component{

    componentDidMount(){

        window.gapi.load("client:auth2", ()=>{

            window.gapi.client.init({
                clientId: "150408353524-jklfsdu7rvf3lk7bpfnfr269m9hk3vir.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{

                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())    //initial auth state of user
                this.auth.isSignedIn.listen(this.onAuthChange); //whenever auth state changes calls this.onAuthChange
            

            })
  
        })
    }

onAuthChange = (isSignedIn)=>{

    if(isSignedIn){

        this.props.signUp(this.auth.currentUser.get().getId())


    }else{
        
        this.props.signOut()

    }


}

    onSignOutClick=()=>{

        this.auth.signOut()
        

    }

    onSignInClick=()=>{

        this.auth.signIn()
       

    }


    renderButton(){

        if(this.props.isSignedIn === null){
            return null
        }else if (this.props.isSignedIn){
            return <button onClick={this.onSignOutClick} className="ui red button">Sign Out</button>
        }else{

            return <button onClick={this.onSignInClick} className="ui red button">Sign In </button>
        }

    }




    render(){

        return (
        <div>{this.renderButton()}</div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        isSignedIn:state.auth.isSignedIn
    }
}




export default connect(mapStateToProps,{
    signOut,
    signUp
} )(GoogleAuth)