import React from 'react'
import {reduxForm, Field} from 'redux-form'


class StreamCreate extends React.Component{

    renderError = ({error, touched})=>{
        if (touched && error) {
            return (
              <div className="ui error message">
                <div className="header">{error}</div>
              </div>
            );
          }
    }

    renderInput = ({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return(   
                <div className={className}> 
                    <label>{label}</label>
                    <input type="text"  {...input} />
                    {this.renderError(meta)}
                </div> 
        )
    }

    onFormSubmit = (formVal)=>{
        this.props.onSubmit(formVal)
    }

    renderForm = ()=>{
        return(            
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off" className="ui equal width form error" >
                <div className="fields">
                        <Field name="title" label="Enter Title" component={this.renderInput} />
                        <Field name="description" label="Enter Description" component={this.renderInput} />
                </div>
                <div className="fields">
                    <button className="ui button primary">Submit</button>
                </div>
            </form>
        )
    }
    
    render(){
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

const validate = (formVal) => {
    let errors = {}
    if(!formVal.title) errors.title = "You must enter title"
    if(!formVal.description) errors.description = "You must enter description"
    return errors
}

export default reduxForm({
    form:"streamForm",
    validate
})(StreamCreate)
