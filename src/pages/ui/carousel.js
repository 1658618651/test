import React from 'react';
import {Card,Carousel} from 'antd';
import './ui.less';
export default class Carousell extends React.Component{
    constructor(props){
        super(props);
        this.state={
        currentImg:'',
        visible: false        
        }
    }


    render(){

  
        return(           
            <div >
           <Card className="card-wrap" title="文字轮播图">
           <Carousel autoplay effect="fade">
            <div><h3>111111</h3></div>
            <div><h3>222222222</h3></div>
            <div><h3>33333333</h3></div>
            <div><h3>444444444444</h3></div>
           </Carousel>
           </Card>
           <Card className="slider-wrap" title="图片轮播图">
           <Carousel autoplay effect="fade" >
            <div><img src="/carousel-img/carousel-1.jpg" alt="1"/></div>
            <div><img src="/carousel-img/carousel-2.jpg" alt="1"/></div>
            <div><img src="/carousel-img/carousel-1.jpg" alt="1"/></div>
            <div><img src="/carousel-img/carousel-3.jpg" alt="1"/></div>
           </Carousel>
           </Card>
            </div>
        )
    }
}