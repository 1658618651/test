import React from 'react';
import {Card,Button,Form,Select,Table,Modal,message,DatePicker} from 'antd';
import Utils from "../../../util/util";
import axios from '../../../axios';
import BaseForm from '../../../components/BaseForm'
const FormItem=Form.Item;
const Option = Select.Option;
export default class Order extends React.Component{
    constructor(props){
        super(props);
           this.state={
            orderInfo:{},
            orderConfirmVisble:false,
            selectedItem:''
            
        }
    }
    params={
        page:1
    }
    formList = [//项目工程化，表单结构化
        {
            type:'SELECT',
            label:'城市',
            field:'city',
            placeholder:'全部',
            initialValue:'1',
            width:80,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
        },
        {
            type:'INPUT',
            label:'模式',
            field:'mode',
            placeholder:'请输入模式',
            initialValue:'2',
            width:180
        },
        {
            type: '时间查询'
        },
        {
            type: 'SELECT',
            label: '订单状态',
            field:'order_status',
            placeholder: '全部',
            initialValue: '1',
            width: 80,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
        }
    ]
    handleFilter = (params)=>{
        this.params = params;//params是BaseForm的this.props.filterSubmit(fieldValue);的调用方法，fieldValue传递值
        this.requestList();
    }
    componentDidMount(){
        this.requestList();
    }
    handleFilter=(params)=>{
    this.params=params;
    this.requestList();
    }
    requestList=()=>{
        let _this=this;
    axios.ajax({
        url:'/order/list',
        data:{
            // params:{
            //     page:this.params.page
            // }
            params:{
                page:this.params
            }
        }
    }).then((res)=>{
        this.setState({
            list:res.result.item_list.map((item,index)=>{
                item.key=index;
                return item;
            }),
            pagination:Utils.pagination(res,(current)=>{
                _this.params.page=current;
                _this.requestList();
            })

        })
    })
    }
    // 订单结束确认
    handleConfirm = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        axios.ajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    orderId: item.id
                }
            }
        }).then((res)=>{
            if(res.code ==0 ){
                this.setState({
                    orderInfo:res.result,
                    orderConfirmVisble: true
                })
            }
        })
    }

    // 结束订单
    handleFinishOrder = ()=>{
        let item = this.state.selectedItem;
        axios.ajax({
            url: '/order/finish_order',
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }
    openOrderDetail=()=>{
    let item=this.state.selectedItem;
    if(!item){
        Modal.info({
            title:"信息",
            content:"请先选择一条订单"
        })
        return;
    }
    // window.location.href=`/#/common/order/detail/${item.id}`
    window.open(`/#/common/order/detail/${item.id}`,"_blank");
    }
    render(){
        const Columns=[{
            title:"订单编号",
            dataIndex:"order_sn"
        },{
            title:"车辆编号",
            dataIndex:"bike_sn"
        },{
            title:"用户名",
            dataIndex:"mobile"
        },{
            title:"里程",
            dataIndex:"distance"
        },{
            title:"行驶时长",
            dataIndex:"total_time"
        },{
            title:"状态",
            dataIndex:"status"
        },{
            title:"开始时间",
            dataIndex:"start_time"
        },{
            title:"结束时间",
            dataIndex:"end_time"
        },{
            title:"订单金额",
            dataIndex:"total_fee"
        },{
            title:"实付金额",
            dataIndex:"user_pay"
        }]
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                {/* <FilterForm/> */}
                <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                {/* formList是父级 */}
                </Card>
                <Card style={{marginTop:"10px"}}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
            <Table
                columns={Columns}
                dataSource={this.state.list}
                pagination={this.state.pagination}
                rowSelection={rowSelection}
                onRow={(record, index) => {
                    return {
                        onClick: () => {
                            this.onRowClick(record, index);
                        }
                    };
                }}
                />
            </div>
            <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisble:false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}
class FilterForm extends React.Component{
    render(){
        const {getFieldDecorator} =this.props.form;
        //双向绑定
        return(
            <div>
            <Form layout="inline">
            <FormItem label="城市">
            {
                getFieldDecorator("cityId")(
                    <Select placeholder="全部" style={{width:100,margin:"0 20px"}}>
                    <Option value="">全部</Option>
                    <Option value="1">北京</Option>
                    <Option value="2">上海</Option>
                    <Option value="3">南京</Option>
                    <Option value="4">苏州</Option>
                </Select>
                )                
            }
            </FormItem>
            <FormItem label="订单时间">
            {
                getFieldDecorator("start_time")(
                    <DatePicker showtime format="YYYY-MM-DD HH:mm:ss"/>
                )                
            }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator("end_time")(
                    <DatePicker showtime format="YYYY-MM-DD HH:mm:ss"/>
                )                
            }
            </FormItem>
            <FormItem label="订单状态">
            {
                getFieldDecorator("order_status")(
                    <Select placeholder="全部" style={{width:100,margin:"0 20px"}}>
                    <Option value="">全部</Option>
                    <Option value="1">进行中</Option>
                    <Option value="2">结束行程</Option>                    
                </Select>
                )                
            }
            </FormItem>
            <FormItem>
            <Button type="primary" style={{margin:"0 20px"}}>查询</Button>
            <Button>重置</Button>
            </FormItem>
            </Form>
            </div>
        )
    }
}
FilterForm=Form.create({})(FilterForm);