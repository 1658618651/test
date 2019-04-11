import React from 'react';
import {Card,Row,Col,Modal} from 'antd';
import './ui.less';
export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
        currentImg:'',
        visible: false        
        }
    }

    openGallery=(imgSrc)=>{
        this.setState({
            visible:true,
            currentImg:'/gallery/'+imgSrc
        })
    }
    render(){
    const imgs=[
        ['1.png','2.png','3.png','4.png','5.png'],
        ['6.png','7.png','8.png','9.png','10.png'],
        ['11.png','12.png','13.png','14.png','15.png'],
        ['16.png','17.png','18.png','19.png','20.png'],
        ['21.png','22.png','23.png','24.png','25.png']
    ]
    
    const imgList=imgs.map((list)=>list.map(
        (item)=>
    <Card style={{marginBottom:10}} cover={
        <img src={'/gallery/'+item} alt="img" onClick={()=>this.openGallery(item)}/>
    }>
     <Card.Meta title="hello" description="hello world"/>
     {/* //封面信息 */}
    </Card>
    ))
  
        return(           
            <div className="card-wrap">
            <Row gutter={10}>
                <Col md={5}>
                {imgList[0]}
                </Col>
                <Col md={5}>
                {imgList[1]}
                </Col>
                <Col md={5}>
                {imgList[2]}
                </Col>
                <Col md={5}>
                {imgList[3]}
                </Col>
                <Col md={4}>
                {imgList[4]}
                </Col>
            </Row>
            <Modal 
            visible={this.state.visible} 
            onCancel={()=>{this.setState({visible:false})}} 
            footer={null}
            width={300} height={800}
            title="图片画廊">
                <img src={this.state.currentImg} alt="img" style={{width:"100%"}}/>
            </Modal>
            </div>
        )
    }
}