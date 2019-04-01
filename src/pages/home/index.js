import React from 'react';
import './index.less';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            name:''
        })       
    }
    render(){
        return (
            <div className="home-wrap">
               版权所有：天问䢳凡人歌CET和融入方VR给我儿给我二哥忍忍吧
            </div>
        )
    }
}