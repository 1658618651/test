import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import App from './App.js';
import Login from './pages/login/index.js';
import Admin from './Admin.js';
import Buttons from './pages/ui/buttons.js';
import NoMatch from './pages/nomatch/index.js';
export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                  <Route path="/login" component={Login}/>
                  <Route path="/admin" render={()=>
                  <Admin>
                      <Route path="/admin/ui/buttons" component={Buttons}/>
                      <Route component={NoMatch}/>
                  </Admin>
                }/>
                  <Route path="/order/details" component={Login}/>
                  
                </App>
            </HashRouter>
        )
    }
}