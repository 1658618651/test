import React from 'react';
import {Button,Card,Radio,notification} from 'antd';
import './ui.less';
export default class Notice extends React.Component{
    openNotification=(type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:"hello",
            description:"hello everyone"
        });
    }
    render(){

        return(           
            <div>
                <Card title="通知提醒框" className="card-wrap">
                <Button type="primary" onClick={()=>this.openNotification("success")}>成功</Button>
                <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
            </Card>
            <Card title="通知提醒框" className="card-wrap">
                <Button type="primary" onClick={()=>this.openNotification("success","topRight")}>成功</Button>
                <Button type="primary" onClick={()=>this.openNotification("warning","topLeft")}>warning</Button>
                <Button type="primary" onClick={()=>this.openNotification("info","bottomLeft")}>info</Button>
                <Button type="primary" onClick={()=>this.openNotification("error","bottomRight")}>error</Button>
            </Card>
            </div>
        )
    }
}