import React from 'react';
import axios from '../../axios';
import {Card,Table,Modal,message,Button, Badge} from 'antd';
import Utils from "../../util/util";

export default class HighTables extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:[],
            dataSource2:[],
            selectedRowKeys:"",
            selectedRow:"",
            pagination:'',
            sortOrder:''

        }
    }
    params={
        page:1
    }
    handleDelete=((item)=>{
        let id=item.id;
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
        url:"/table/high/list",
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
    handleChange=(pagination,filter,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })

    }
    render(){
        const Colums=[{
            title:"id",
            dataIndex:"id",
            width:80
        },{
            title:"用户名",
            dataIndex:"userName",
            width:80
        },{
            title:"性别",
            dataIndex:"sex",
            width:80,
            render(sex){
            return sex==1?'男':'女'
           
            }
        },{
            title:"状态",
            dataIndex:"state",
            width:80,
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
            dataIndex:"birthday",
            width:120

        },{
            title:"爱好",
            dataIndex:"interest",
            width:80,
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
            dataIndex:"address",
            width:80
        },{
            title:"日期",
            dataIndex:"time",
            width:120

        }]
        const Colums2=[{
            title:"id",
            dataIndex:"id",
            fixed:"left",
            width:80
        },{
            title:"用户名",
            dataIndex:"userName",
            fixed:"left",
            width:80
        },{
            title:"性别",
            dataIndex:"sex",
            width:80,
            render(sex){
            return sex==1?'男':'女'
           
            }
        },{
            title:"状态",
            dataIndex:"state",
            width:80,
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
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"生日",
            dataIndex:"birthday",
            width:120

        },{
            title:"爱好",
            dataIndex:"interest",
            width:80,
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
            dataIndex:"address",
            fixed:"right",
            width:80
        },{
            title:"日期",
            dataIndex:"time",
            fixed:"right",
            width:120
        }

    ]
    const Colums3=[{
        title:"id",
        dataIndex:"id",
        width:80
    },{
        title:"用户名",
        dataIndex:"userName",
        width:80
    },{
        title:"性别",
        dataIndex:"sex",
        width:80,
        render(sex){
        return sex==1?'男':'女'
       
        }
    },{
        title:"年龄",
        dataIndex:"age",
        width:80,
        sorter:(a,b)=>{
            return a.age-b.age;
        },
        sortOrder:this.state.sortOrder
    },
    {
        title:"状态",
        dataIndex:"state",
        width:80,
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
        dataIndex:"birthday",
        width:120

    },{
        title:"爱好",
        dataIndex:"interest",
        width:80,
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
        dataIndex:"address",
        width:80
    },{
        title:"日期",
        dataIndex:"time",
        width:120

    }]
    const Colums4=[{
        title:"id",
        dataIndex:"id",
        width:80
    },{
        title:"用户名",
        dataIndex:"userName",
        width:80
    },{
        title:"性别",
        dataIndex:"sex",
        width:80,
        render(sex){
        return sex==1?'男':'女'
       
        }
    },{
        title:"年龄",
        dataIndex:"age",
        width:80,
    },
    {
        title:"状态",
        dataIndex:"state",
        width:80,
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
        dataIndex:"birthday",
        width:120

    },{
        title:"爱好",
        dataIndex:"interest",
        width:80,
        render(state){
            let config={
                "1":<Badge status="success" text="成功" />,
                "2":<Badge status="error" text="错误" />,
                "3":<Badge status="processing" text="进行中" />,
                "4":<Badge status="warning" text="警告" />,
                "5":<Badge status="default" text="默认" />,
                "6":<Badge status="success" text="我是6" />,
                "7":<Badge status="success" text="我是7" />,
                "8":<Badge status="success" text="我是8" />,
            }
            return config[state];
        }
    },{
        title:"地址",
        dataIndex:"address",
        width:80
    },{
        title:"日期",
        dataIndex:"time",
        width:120

    },{
        title:"操作",
        width:120,
        render:(text,item)=>{
            return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
        }

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
        return(
            <div>
                 <Card title="固定">
                <Table columns={Colums} dataSource={this.state.dataSource}
                bordered 
                />
                 </Card>
                 <Card title="左侧固定" style={{margin:"10px 0"}}>
                <Table columns={Colums2} dataSource={this.state.dataSource2}
                bordered  scroll={{x:1935}}
                />
                 </Card>
                 <Card title="头部固定" style={{margin:"10px 0"}}>
                <Table columns={Colums} dataSource={this.state.dataSource2}
                bordered scroll={{y:240}}
                />
                 </Card>
                 <Card title="固定" style={{margin:"10px 0"}}>
                <Table columns={Colums3} dataSource={this.state.dataSource2}
                bordered  onChange={this.handleChange}
                />
                 </Card>
                 <Card title="固定" style={{margin:"10px 0"}}>
                <Table columns={Colums4} dataSource={this.state.dataSource2}
                bordered  onChange={this.handleChange}
                />
                 </Card>
            </div>
        )
    }
}