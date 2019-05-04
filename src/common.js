import React from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Navleft from './components/Navleft';
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
            <Row className="simple-page">
                <Header menuType="second"/>
                </Row>
               

                <Row className="content">
                {this.props.children}
            </Row>
            </div>
        )
    }
}