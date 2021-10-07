import React from 'react';
import Login from '../components/Login'
import Home from '../components/Home'
import Search from '../components/Search';
import BookDetails from '../components/BookDetails';

import '../css/router.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export default function Routing() {
    return (
        <Router> 
            <div className="link">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/search" component={Search} /> 
                    <Route path="/details" component={BookDetails} />

                    <Redirect from='/' to='/login' />
                    <Redirect from='/login' to='/home' />
                    <Redirect from='/home' to='/search' />
                    <Redirect from='/home' to='/details' />
                </Switch>
            </div>
        </Router>
    );
}