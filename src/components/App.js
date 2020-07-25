import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Header from './Header'
import StreamList from './streams/StreamList'
import StreamsCreate from './streams/StreamsCreate'
import StreamsEdit from './streams/StreamsEdit'
import StreamsDelete from './streams/StreamsDelete'
import StreamsShow from './streams/StreamsShow'


class App extends React.Component{



    render(){


        return(
            <div className="ui container">
                <BrowserRouter>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' component={StreamsCreate} />
                <Route path='/streams/edit' component={StreamsEdit} />
                <Route path="/streams/delete" component={StreamsDelete} />
                <Route path="/streams/show" component={StreamsShow} />
                </BrowserRouter>
            </div>
        )
    }
}


export default App