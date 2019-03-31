import React from 'react';
import {Menu} from 'antd';
import './index.less';
import menuConfig from './../../config/menuConfig';
const SubMenu=Menu.SubMenu;
export default class Navleft extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            name:''
        })       
    }
    componentWillMount(){
        const menuTreeNode=this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children)
            {
                return (
                    <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                    </SubMenu>
                    
                    )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render(){
        return (
            <div>
            <div className='logo'>
            <img src='/assets/logo-ant.svg' alt=''/>
            <h1>Imooc MS</h1>
              
            </div>
            <Menu theme='dark'>

        {/* <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          {this.state.menuTreeNode}
        </SubMenu> */}
         {this.state.menuTreeNode}
            </Menu>

            </div>

        )
    }
}