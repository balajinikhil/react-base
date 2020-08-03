import React from 'react'
import {connect} from 'react-redux'

import {fetchStream} from '../../actions'



class StreamShow extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    renderContent(){
        if(!this.props.stream) return "loading..."

        const {title, description} = this.props.stream

        return (
            <div>
                
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream
})(StreamShow)