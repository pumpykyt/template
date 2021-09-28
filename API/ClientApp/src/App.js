import React, {Component, useEffect} from 'react';

import './custom.css'
import {Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

const App = () => {

    useEffect(() => {
        document.title = "Template"
    }, [])

  return(
    <div className="app">
        <Nav/>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </div>
  )
}

export default App