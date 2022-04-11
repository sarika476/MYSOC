import React, { Component } from 'react'
import { BrowserRouter as Router, 
         Switch, 
         Route, 
         Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';
import AdminServices from './components/Admin/AdminServices';
import EditUserinfo from './components/Admin/EditUserinfo';
import AdminUserinfo from './components/Admin/AdminUserinfo';
import AdminComplains from './components/Admin/AdminComplains';
import UserComplains from './components/User/UserComplains';


export default class Paths extends Component {
    render(){
        return (
          
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" /> 
                    </Route>
                    <Route path="/login">
                            <Login />
                        </Route>
                    <div>
                        <Navigation /> 
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/admin_services">
                            <AdminServices />
                        </Route>
                        <Route path="/admin_userinfo">
                            <AdminUserinfo />
                        </Route>
                        <Route path="/edit_userinfo">
                            <EditUserinfo />
                        </Route>
                        <Route path="/user_complain">
                            <UserComplains />
                        </Route>
                        <Route path="/admin_complain">
                            <AdminComplains />
                        </Route>
                    </div>
                </Switch>
                
            
        </Router>

          
            
        )
    }
}