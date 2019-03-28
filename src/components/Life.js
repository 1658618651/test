import React from 'react';
import {Button} from 'antd';
class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    buttonClick=()=>{
        alert("hello9");
    }
    render(){
        return (
            <div>
            <Button onClick={this.buttonClick}>button</Button>
            <h1>sdss</h1>
            </div>
        )
    }
}

export default Life;