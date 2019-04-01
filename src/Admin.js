import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Navleft from './components/Navleft';
import Home from './pages/home/index';
import './style/common.less'
export default class Admin extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            name:''
        })       
    }
    render(){
        return (
            <div>
            <Row className="container">
                <Col span='3' className="nav-left">
                <Navleft/>
                </Col>
                <Col span='21' className="main">
                
                <Header/>
                <Row className="content">
                {/* {this.props.children} */}
                <Home/>
                </Row>
                <Footer/>
                </Col>
            </Row>
            </div>
        )
    }
}