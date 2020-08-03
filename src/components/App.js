import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'

import history from '../history'
import Header from './Header'
import StreamList from './Streams/StreamList'
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamShow from './Streams/StreamShow'

class App extends React.Component{

    render(){
        return(
            <div className="ui container">
                <Router history={history}>
                    <Header />
                    <Switch>
                    <Route path="/" exact component={StreamList}></Route>
                    <Route path="/streams/new" component={StreamCreate}></Route>
                    <Route path="/streams/edit/:id" component={StreamEdit}></Route>
                    <Route path="/streams/delete/:id" component={StreamDelete}></Route>
                    <Route path="/streams/:id" component={StreamShow} ></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App