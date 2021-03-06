import React from 'react'
import {connect} from 'react-redux'

import {streamCreate} from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{

    onSubmit = (formVal)=>{
        this.props.streamCreate(formVal)
    }

    render(){
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    streamCreate
})(StreamCreate)