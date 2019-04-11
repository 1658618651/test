import React from 'react';
import {Button,Card,message,Tabs,Icon} from 'antd';
import './ui.less';
export default class Tab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            panes:[]
            
        }
    }
    newTabIndex=0;
    callback=(key)=>{
    message.success("hello"+key);
    }
    onChange=(activeKey)=>{
        this.setState({
            activeKey
        })
    }
    onEdit=(targetKey,action)=>{
    this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      }
    componentDidMount(){
        const panes=[
            {
                title:"Tab1",
                content:"hello 1",
                key:"1"
            },{
                title:"Tab2",
                content:"hello 2",
                key:"2"
            },{
                title:"Tab3",
                content:"hello 3",
                key:"3"
            }
        ]
        this.setState({
            activeKey:panes[0].key,
            panes:panes
        })

    }
    render(){
        const TabPane=Tabs.TabPane;
        return(           
            <div>
            <Card title="Tab页签" className="card-wrap">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="tab 1" key="1">111111111111111111</TabPane>
            <TabPane tab="tab 2" key="2">22222222222222222</TabPane>
            <TabPane tab="tab 3" key="3">333333333333333</TabPane>
            <TabPane tab="tab 4" key="4">44444444444444444</TabPane>
            </Tabs>
            </Card>
            <Card title="Tab带图的页签" className="card-wrap">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><Icon type="plus"></Icon></span>} key="1">111111111111111111</TabPane>
            <TabPane tab={<span><image src="../../../public/assets/bike.jpg"></image></span>} key="2" disabled>22222222222222222</TabPane>
            <TabPane tab={<span><Icon type="delete"></Icon></span>} key="3">333333333333333</TabPane>
            <TabPane tab={<span><Icon type="edit"></Icon></span>} key="4">44444444444444444</TabPane>
            </Tabs>
            </Card>
            <Card title="Tab带图的页签" className="card-wrap" >
            <Tabs
             defaultActiveKey="1" 
             onChange={this.onChange} 
             type="editable-card" 
             activeKey={this.state.activeKey}
             onEdit={this.onEdit}>
            {
                this.state.panes.map((panel)=>{
                    return (
                        <TabPane tab={panel.title}  key={panel.key}/>
                    )
                })
            }
            </Tabs>

            </Card>
            </div>
        )
    }
}