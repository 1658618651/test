import React from 'react';
import {Card,Button,Radio, Modal} from 'antd';
import './ui.less';
export default class Models extends React.Component{
    constructor(props){
        super(props);
        this.state={
        show1:false,
        show2:false,
        show3:false,
        show4:false
        }
    }
    handleOpen=(type)=>{
    this.setState({
        [type]:true
    })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:"你好",
            content:"hello",
            onOK(){
                console.log("ok");
            },
            onCancel(){
                console.log("cancel")
            }
        })
        // this.setState({

        // })
        }
    render(){
        return (
        <div>
        <Card title="基础模态框" className="card-wrap">
        <Button type="primary" onClick={()=>this.handleOpen("show1")}>Open</Button>
        <Button type="primary" onClick={()=>this.handleOpen("show2")}>自定义页脚</Button>
        <Button type="primary" onClick={()=>this.handleOpen("show3")}>顶部20px弹窗</Button>
        <Button type="primary" onClick={()=>this.handleOpen("show4")}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
        <Button type="primary" onClick={()=>this.handleConfirm("confirm")}>Open</Button>
        <Button type="primary" onClick={()=>this.handleConfirm("info")}>自定义页脚</Button>
        <Button type="primary" onClick={()=>this.handleConfirm("success")}>顶部20px弹窗</Button>
        <Button type="primary" onClick={()=>this.handleConfirm("warning")}>水平垂直居中</Button>
        </Card>
        <Modal title="React" visible={this.state.show1} onCancel={()=>this.setState({
            show1:false
        })}>
        hello,everyone
        </Modal>
        <Modal title="React" visible={this.state.show2} okText="下一步" cancelText="算了"
        onCancel={()=>this.setState({
            show2:false
        })}>
        hello,everyone
        </Modal>
        <Modal title="React" visible={this.state.show3} style={{top:20}}
        onCancel={()=>this.setState({
            show3:false
        })}>
        hello,everyone
        </Modal>
        <Modal title="React" visible={this.state.show4} wrapClassName="vertical-center-modal"
        onCancel={()=>this.setState({
            show4:false
        })}>
        hello,everyone
        </Modal>
        </div> 
        )
    }
}