import React from 'react';
import {Button,Icon,Card,Spin,Alert} from 'antd';
import './ui.less';
export default class Loading extends React.Component{
    
    render(){
        const icon=<Icon type="loading" style={{fontSize:"24"}}/>
        const icon1=<Icon type="plus" style={{fontSize:"24"}}/>
        return(           
            <div>
                <Card title="Spin标签" className="card-wrap">
                <Spin/>
                <Spin size="small" style={{margin:"0 20px"}}/>
                <Spin size="large" />
                <Spin indicator={icon} style={{marginLeft:10}}/>
                <Spin indicator={icon1} style={{marginLeft:10}}/>
                </Card>
            <Card title="Alert标签" className="card-wrap">
                <Alert message="Raect" description="hello React" type="info"/>
                <Alert message="Raect" description="hello React" type="warning"/>
                <Spin>
                <Alert message="Raect" description="hello React" type="warning"/>
                </Spin>
                <Spin tip="loading">
                <Alert message="Raect" description="hello React" type="warning" />
                </Spin>
                <Spin tip="loading" indicator={icon} >
                <Alert message="Raect" description="hello React" type="info" style={{margin:"10px"}} />
                </Spin>
            </Card>
            </div>
        )
    }
}