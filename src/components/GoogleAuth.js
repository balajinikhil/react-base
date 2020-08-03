import React from 'react'
import {connect} from 'react-redux'

import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:"150408353524-jklfsdu7rvf3lk7bpfnfr269m9hk3vir.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = isSignedIn =>{
        if(isSignedIn)  this.props.signIn(this.auth.currentUser.get().getId())
        else this.props.signOut()
    }

    onSingInClick = () => this.auth.signIn()
    onSignOutClick = () => this.auth.signOut()

    renderButton = ()=>{
        if(this.props.isSignedIn === null) return null
        else if(this.props.isSignedIn === true){
            return (
                <button onClick={this.onSignOutClick} className="ui google plus button">
                    <i className="google icon"></i>
                    Sign Out
                </button>)
        }else{
            return (
                <button onClick={this.onSingInClick} className="ui google plus button">
                    <i className="google icon"></i>
                    Sign in 
                </button>)
        }
    }

    render(){
        return (
        <div>
            {this.renderButton()}
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn:state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {
    signIn,
    signOut
})(GoogleAuth)