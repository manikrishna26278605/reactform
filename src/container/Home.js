import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Login from './Login';
import DataTable from './DataTable';
import Default from './Default';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                {/* <Sidebar /> */}
                <Router>
                    <Switch>
                        <Route path='/datatable' component ={DataTable} />
                        <Route path='/' component ={Login} />
                        <Route  component ={Default} />
                    </Switch>
                </Router>
            </div> );
    }
}
 
export default Home;