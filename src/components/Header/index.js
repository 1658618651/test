import React from 'react';
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../util/util.js'
import axios from '../../axios'
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'ada',
            SysTime:''
        }      
    }
    componentWillMount(){
        setInterval(()=>{
            let SysTime=Util.formateDate(new Date().getTime());
            this.setState({
                SysTime
            })
        },1000);
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        let city="北京";
    axios.jsonp({
        url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
        if(res.status==='success'){
            let data=res.results[0].weather_data[0];
            this.setState({
                dayPictureUrl:data.dayPictureUrl,
                weather:data.weather
            })
        }
    })
    }
    render(){
        const menuType=this.props.menuType;
        return (
           
            <div className="header">
               <Row className="header-top">
               {
                   menuType?
                   <Col span="6" className="logo">
                   <img src="./assets/logo-ant.svg" alt="logo"/>
                   <span>统一管理系统</span>
                   </Col>:''
               }
                   <Col span={menuType?18:24}>
                   <span>欢迎，{this.state.username}</span>
                   <a href="#">退出</a>
                   </Col>
                   </Row>
{
    menuType?'':
    <Row className="breadcrumb">
    <Col span="4" className="breadcrumb-title">
    首页
    </Col>
    <Col span="20" className="weather">
    <span className="date">{this.state.SysTime}</span>
    <span className="weather-img">
    <img src={this.state.dayPictureUrl} alt=''/>
    <span className="weather-detail">{this.state.weather}</span>
    </span>
    </Col>
</Row>
}
               
            </div>
        )
    }
}
//搜索百度APIlocation输出当前例子ak值开发者账号里面的百度账号
//安装jsonp