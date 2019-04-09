import React from 'react';
import {Button,Card,message,Tabs,Icon} from 'antd';
import './ui.less';
export default class Tab extends React.Component{
    showMessage=(type)=>{
    message[type]("hello everyone");
    }
    
    render(){
        const TabPane=Tabs.TabPane;
        return(           
            <div>
                <Card title="Tab页签" className="card-wrap">
            <Tabs defaultActiveKey="1" >
            <TabPane tsb="tab 1" key="1">1</TabPane>
            <TabPane tsb="tab 2" key="2">2</TabPane>
            <TabPane tsb="tab 3" key="3">3</TabPane>
            <TabPane tsb="tab 4" key="4">4</TabPane>
            </Tabs>
            </Card>
            </div>
        )
    }
}