import React from 'react';
import moment from 'moment';
import {Card,Form,Input,Button,message, Icon, Checkbox,Radio,InputNumber,Select, Switch,DatePicker, TimePicker,Upload} from 'antd';
const FormItem=Form.Item;
const Option = Select.Option;
const TextArea=Input.TextArea;
class FormLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={userImg:''}
    }
    handleSubmit=()=>{
        let userinfo=this.props.form.getFieldsValue();
        console.log(JSON.stringify(userinfo));
        message.success(`${userinfo.userName}+${userinfo.pwd}`)
    }
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        const FormItemLayout={
            labelCol:{
                // 左边文本
                xs:24,
                sm:4
                // 屏幕小于576像素时，使用xs
            },
            wrapperCol:{
                // 右边
            xs:24,
            sm:6
            }
        }
        const offsetLayout={
        wrapperCol:{
            xs:24,
            sm:{
                span:12,
                offset:4
            }
        }

        }
        const RadioGroup=Radio.Group;
        return(
            <div>
            <Card title="注册表单">
             <Form layout="horizontal">
             <FormItem label="用户名" {...FormItemLayout}>
                {
                    getFieldDecorator('userName',{
                        initialValue:'',
                        rules:[{
                            required:true,
                            message:'用户名不能为空'
                        }]
                    }
                    
                    )(
                        <Input placeholder="请输入用户名"/>
                    )

                }

             </FormItem>
             <FormItem label="密码" {...FormItemLayout}>
                {
                    getFieldDecorator('pwd',{
                        initialValue:'',
                        rules:[{
                            required:true,
                            message:'密码不能为空'
                        }]
                    }
                    
                    )(
                        <Input type="password" placeholder="请输入密码"/>
                    )

                }

             </FormItem>
             <FormItem label="性别" {...FormItemLayout}>
                {
                    getFieldDecorator('sex',{
                        initialValue:'',
                    }
                    
                    )(
                        <RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>
                        </RadioGroup>
                    )

                }
             </FormItem>
             <FormItem label="年龄" {...FormItemLayout}>
                {
                    getFieldDecorator('age',{
                        initialValue:'18',
                    }
                    
                    )(
                        <InputNumber/>
                    )

                }
             </FormItem>
             <FormItem label="当前状态" {...FormItemLayout}>
                {
                    getFieldDecorator('state',{
                        initialValue:'2',
                    }
                    
                    )(
                        
                        <Select>
                        <Option value="1">鼠标</Option>
                        <Option value="2">外网</Option>
                        <Option value="3">方法</Option>
                        <Option value="4">很好</Option>
                        <Option value="5">去问问</Option>
                        <Option value="6">这种</Option>
                        </Select>
                    )
                }
             </FormItem>
             <FormItem label="爱好" {...FormItemLayout}>
                {
                    getFieldDecorator('interest',{
                        initialValue:['2',"1"],
                    }
                    
                    )(
                        
                        <Select mode="multiple">
                        <Option value="1">鼠标wwwwww</Option>
                        <Option value="2">外网eeeee</Option>
                        <Option value="3">方法rrrrrr</Option>
                        <Option value="4">很好ttttt</Option>
                        <Option value="5">去问问tttt</Option>
                        <Option value="6">这种yy</Option>
                        </Select>
                    )
                }
             </FormItem>
             <FormItem label="是否已婚" {...FormItemLayout}>
                {
                    getFieldDecorator('isMarried',{
                        valuePropName:"checked",
                        initialValue:true
                    }
                    )(
                        
                        <Switch/>
                    )
                }
             </FormItem>
             <FormItem label="生日" {...FormItemLayout}>
                {
                    getFieldDecorator('birthday',{
                        
                        initialValue:moment("2018-08-08") 
                    }
                    )(
                        
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                    )
                }
             </FormItem>
             <FormItem label="地址" {...FormItemLayout}>
                {
                    getFieldDecorator('address',{
                        initialValue:"hhhhhhhhhhhhhhhhhhhhhhhhh"
                    })
                    (
                        <TextArea autosize={{minRows: 4,maxRows:6}}/>
                        
                    )
                }
             </FormItem>
             <FormItem label="早起时间" {...FormItemLayout}>
                {
                    getFieldDecorator('time')
                    (
                        <TimePicker/>
                        
                    )
                }
             </FormItem>
             <FormItem label="头像" {...FormItemLayout}>
                {
                    getFieldDecorator('userImg')
                    (
                        <Upload listType="picture-card"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        onChange={this.handleChange}
                        >
                         {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                        </Upload>
                       
                    )
                }
             </FormItem>
             <FormItem {...offsetLayout}>
                {
                    getFieldDecorator('userImg')
                    (
                    <Checkbox>我已经阅读协议</Checkbox>
                       
                    )
                }
             </FormItem>
             <FormItem {...offsetLayout}>
                {
                    getFieldDecorator('userImg')
                    (
                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                       
                    )
                }
             </FormItem>
             </Form>
            </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);