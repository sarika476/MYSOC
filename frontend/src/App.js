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
import MyComplains from './components/User/MyComplains'
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

    authGuard = (Component) => () => {
        return sessionStorage.getItem("logged_in") ? (
            <Component {...this}{...this.state}/>
        ) : (
            <Redirect to="/login" />
        );
    };
    
    componentDidMount() {
        sessionStorage.setItem("ip_add", "http://localhost:8081");
    }


    render(){
        return (
          
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" /> 
                    </Route>
                    <Route path="/login" render={this.authGuard(Login)}> 
                            <Login />
                        </Route>
                    <div>
                        <Navigation /> 
                        <Route path="/home" render={this.authGuard(Home)} />

                        <Route path="/admin_services" render={this.authGuard(AdminServices)} />

                        <Route path="/user_services" render={this.authGuard(UserServices)} />

                        <Route path="/admin_userinfo" render={this.authGuard(AdminUserinfo)} />

                        <Route path="/edit_userinfo" render={this.authGuard(EditUserinfo)} />

                        <Route path="/user_comp" render={this.authGuard(UserComplains)} />

                        <Route path="/user_housing" render={this.authGuard(UserHousing)} />

                        <Route path="/admin_complain" render={this.authGuard(AdminComplains)} />

                        <Route path="/my_complains" render={this.authGuard(MyComplains)} />

                        <Route path="/user_maint" render={this.authGuard(UserMaint)} />

                        <Route path="/admin_maint" render={this.authGuard(AdminMaint)} />

                        <Route path="/admin_maint_detail" render={this.authGuard(AdminMaintDetail)} />
                    </div>
                </Switch>
                
            
        </Router>

          
            
        )
    }
}
