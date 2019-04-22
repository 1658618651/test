import React from 'react';
import axios from './../../axios/index';
import {Card,Table,Modal,message,Button} from 'antd';
import Utils from "./../../util/util.js"
class Basic extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:[],
            dataSource2:[],
            selectedRowKeys:"",
            selectedRow:"",
            pagination:''

        }
    }
    params={
        page:1
    }
    handleDelete=(()=>{
        let rows=this.state.selectedRows;
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
        })
        Modal.confirm({
            title:"删除提示",
            content:"您确定要删除这些数据吗",           
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
    onRowClick=(record,index)=>{
    let selectKey=[index];
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem:record

    })
    Modal.info({
    title:"信息",
    content:`${record.userName}`
    })
    }
request=()=>{
    let _this=this;
    axios.ajax({
        url:"/table/list",
        data:{
            params:{
                page:_this.params.page
            }
        }
    }).then((res)=>{
        
     if(res.code==0){
        res.result.list.map((item,index)=>{
            item.key=index
           })
         this.setState({
             dataSource2:res.result.list,
             selectedRowKeys:[],
             selectedRows:null,
             pagination:Utils.pagination(res,(current)=>{
             _this.params.page=current
             this.request();
             })
         })
     }
    })
    // axios.get("/table/list").then((res)=>{
    // console.log(JSON.stringify(res));
    // console.log(JSON.stringify(res.data.result));
    // console.log(res.status===200);
    // console.log(res.data.code==="0");
    // if(res.status===200&&res.data.code==="0"){
    //     this.setState({
    //         dataSource2:res.data.result
    //     })
        
    // }
    // console.log(JSON.stringify(this.state.dataSource2));
    // })
}
    componentDidMount(){
        let dataSource=[{
        id:"0",
        userName:"ada",
        sex:"1",
        state:'1',
        birthday:"2019-1-1",
        interest:"1",
        address:"2ww2",
        time:"09:00"
        },{
            id:"1",
            userName:"ada",
            sex:"1",
            state:'1',
            birthday:"2019-1-1",
            interest:"3",
            address:"2ww2",
            time:"09:00"
            },{
                id:"2",
                userName:"ada",
                sex:"1",
                state:'1',
                birthday:"2019-1-1",
                interest:"5",
                address:"2ww2",
                time:"09:00"
                },{
        id:"3",
        userName:"ada",
        sex:"1",
        state:'1',
        birthday:"2019-1-1",
        interest:"2",
        address:"2ww2",
        time:"09:00"
        }]
        dataSource.map((item,index)=>{
            item.key=index;
        })
        this.setState({
            dataSource:dataSource
        })
        this.request();
    }
    render(){
        const Colums=[{
            title:"id",
            dataIndex:"id"
        },{
            title:"用户名",
            dataIndex:"userName"
        },{
            title:"性别",
            dataIndex:"sex",
            render(sex){
            return sex==1?'男':'女'
            }
        },{
            title:"状态",
            dataIndex:"state",
            render(state){
                let config={
                    "1":"我是1",
                    "2":"我是2",
                    "3":"我是3",
                    "4":"我是4",
                    "5":"我是5",
                }
                return config[state];
            }
        },{
            title:"生日",
            dataIndex:"birthday"
        },{
            title:"爱好",
            dataIndex:"interest",
            render(state){
                let config={
                    "1":"我是1",
                    "2":"我是2",
                    "3":"我是3",
                    "4":"我是4",
                    "5":"我是5",
                    "6":"我是6",
                    "7":"我是7",
                    "8":"我是8",
                }
                return config[state];
            }
        },{
            title:"地址",
            dataIndex:"address"
        },{
            title:"日期",
            dataIndex:"time"
        }]
        const rowSelection={
        type:"radio",
        selectedRowKeys:this.state.selectedRowKeys
        }
        const rowCheckSelection={
            type:"checkbox",
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{

            this.setState({
                selectedRowKeys,
                // 当前选中哪些行，哪些文本
                selectedRows
            })
            }
            }
         return (
             <div>
                 <Card title="基础表格">
                <Table columns={Colums} dataSource={this.state.dataSource}
                bordered
                />
                 </Card>
                 <Card title="动态数据渲染表格-Mock" style={{margin:"10px 0"}}>
                <Table columns={Colums} dataSource={this.state.dataSource2}
                bordered
                />
                 </Card>
                 <Card title="Mock-单选" style={{margin:"10px 0"}}>
                <Table columns={Colums} dataSource={this.state.dataSource2} rowSelection={rowSelection}
                bordered onRow={
                    (record,index)=>{
                        return {
                            onClick:()=>{this.onRowClick(record,index)}
                        }
                    }
                }
                />
                 </Card>
                 <Card title="Mock-复选" style={{margin:"10px 0"}}>
                 <div>
                     <Button type="primary" onClick={this.handleDelete}>删除</Button>
                 </div>
                <Table columns={Colums} dataSource={this.state.dataSource2} rowSelection={rowCheckSelection}
                bordered onRow={
                    (record,index)=>{
                        return {
                            onClick:()=>{this.onRowClick(record,index)}
                        }
                    }
                }
                />
                 </Card>
                 <Card title="动态数据渲染表格-Mock" style={{margin:"10px 0"}}>
                <Table columns={Colums} dataSource={this.state.dataSource2} pagination={this.state.pagination}
                bordered
                />
                 </Card>
             </div>
         )

 
        
    }
}
export default Basic;