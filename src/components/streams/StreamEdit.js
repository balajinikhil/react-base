import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'

import StreamForm from './StreamForm'
import {fetchStream, editStream} from '../../actions/index'

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formVal)=>{
        this.props.editStream(this.props.match.params.id, formVal)
    }

    render(){
    return (
        <div>
           <h3>Edit a Stream</h3>
           <StreamForm initialValues={_.pick(this.props.stream, "title", "description")}  onSubmit={this.onSubmit} />
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
 
    return {
        stream : state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit)