import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App.js';
import Login from './pages/login/index.js';
import Admin from './Admin.js';
import Buttons from './pages/ui/buttons.js';
import Models from './pages/ui/models.js';
import NoMatch from './pages/nomatch/index.js';
import Loading from './pages/ui/loading';
import Notice from './pages/ui/notice';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/login/login'
import Register from './pages/login/register'
import Basic from './pages/tables/basic'
import HighTables from './pages/tables/hightables'
import City from './pages/city/index.js';
import Order from './pages/city/order/index';
import Common from './common'
import OrderDetail from './pages/order/details'
export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>  
                    {/* 接纳任何一个组件 */}
                  <Route path="/login" component={Login}/>                 
                  <Route path="/admin" render={()=>
                  <Admin>
                <Switch>
                      <Route path="/admin/ui/buttons" component={Buttons}/>
                      <Route path="/admin/ui/modals" component={Models}/>
                      <Route path="/admin/ui/loadings" component={Loading}/>
                      <Route path="/admin/ui/notification" component={Notice}/>
                      <Route path="/admin/ui/messages" component={Message}/>
                      <Route path="/admin/ui/tabs" component={Tabs}/>
                      <Route path="/admin/ui/gallery" component={Gallery}/>
                      <Route path='/admin/ui/carousel' component={Carousel}/>
                      <Route path='/admin/form/login' component={FormLogin}/>
                      <Route path='/admin/form/reg' component={Register}/>
                      <Route path='/admin/table/basic' component={Basic}/>
                      <Route path='/admin/table/high' component={HighTables}/>
                      <Route path='/admin/city' component={City}/>
                      <Route path='/admin/order' component={Order}/>
                      <Route component={NoMatch}/>
                </Switch>
                  </Admin>
                }/>
                        <Route path="/common" render={() =>
                    <Common>
                        <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                    </Common>
                        }
                        />
                  
                </App>
            </HashRouter>
        )
    }
}