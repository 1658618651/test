import React from 'react';
import {Card,Button,Radio} from 'antd';
import './ui.less';
export default class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            size:"large"
        }
    }
    handleCloseLoading=()=>{
    this.setState({
        loading:!this.state.loading
    })
    }
    handleChangedaxiao=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
    render(){
        return (
        <div>
        <Card title="基础按钮" className="card-wrap">
        <Button type="primary">主按钮</Button>
        <Button>普通按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button disabled>禁用按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
        <Button icon="plus">创建</Button>
        <Button icon="edit">编辑</Button>
        <Button icon="delete">删除</Button>
        <Button shape="circle" icon="search"></Button>
        <Button type="primary" icon="search">搜索</Button>
        <Button type="primary" icon="download">下载</Button>
        </Card>    

        <Card title="Loading按钮" className="card-wrap">
        <Button type="primary" loading={this.state.loading}>确定</Button>
        <Button type="primary" shape="circle" loading={this.state.loading}></Button>
        <Button loading={this.state.loading}>点击加载</Button>
        <Button shape="circle" loading={this.state.loading}></Button>
        <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>

        </Card>    
        <Card title="按钮组">
            <Button.Group>
            <Button type="primary" icon="left">前进</Button>
            <Button type="primary" icon="right">后退</Button>
            </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
        <Radio.Group value={this.state.size} onChange={this.handleChangedaxiao}>
        <Radio value="small">小</Radio>
        <Radio value="default">中</Radio>
        <Radio value="large">大</Radio>
        </Radio.Group>
        <Button type="primary" size={this.state.size}>确定</Button>
        <Button>imooc</Button>
        <Button type="danger">点击加载</Button>
        <Button type="dashed"></Button>
        <Button >关闭</Button>
        </Card>
        </div> 
        )
    }
}