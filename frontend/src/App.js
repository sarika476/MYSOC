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
import UserMaint from './components/User/UserMaint'
import AdminMaint from './components/Admin/AdminMaint'
import UserServices from './components/User/UserServices'
import UserHousing from './components/User/UserHousing'
import AdminMaintDetail from './components/Admin/AdminMaintDetail';


export default class Paths extends Component {
    constructor(props){
        super(props);
        this.state = {
            // user_id: null,
        }
        this.set_user_id = this.set_user_id.bind(this);
    }

    set_user_id = (id) => {
        console.log(id);
        this.setState({user_id: id})
    }

    componentDidMount() {
        sessionStorage.setItem("ip_add", "http://34.229.88.193:8080");
    }


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
                        <Route path="/user_services">
                            <UserServices />
                        </Route>
                        <Route path="/admin_userinfo">
                            <AdminUserinfo />
                        </Route>
                        <Route path="/edit_userinfo">
                            <EditUserinfo />
                        </Route>
                        <Route path="/user_comp">
                            <UserComplains />
                        </Route>
                        <Route path="/user_housing">
                            <UserHousing />
                        </Route>
                        <Route path="/admin_complain">
                            <AdminComplains />
                        </Route>
                        <Route path="/user_maint">
                            <UserMaint/>
                        </Route>
                        <Route path="/admin_maint">
                            <AdminMaint {...this}{...this.state}/>
                        </Route>
                        <Route path="/admin_maint_detail">
                            <AdminMaintDetail {...this}{...this.state}/>
                        </Route>
                    </div>
                </Switch>
                
            
        </Router>

          
            
        )
    }
}