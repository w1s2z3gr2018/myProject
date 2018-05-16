import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import logo from 'img/logo.jpg';
import {data} from '~/component/menu/menuData';

class Menus extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			rootSubmenuKeys:['sub1', 'sub2', 'sub4'],
			openKeys:['sub1'],
			selectedKeys:['button']
		}
	}
	handleClick(item){
		window.location.hash=item.key
	}
	componentWillMount(){
		let hashs = window.location.hash.split('/');
		console.log(hashs)
		let arr = [];
		arr.push(hashs[1]);
		data.map((item,index)=>{
			if(item.children&&item.children.length>0){
				item.children.map((item)=>{
					if(item.key==hashs[1]){
						this.state.openKeys[0]=data[index].key;
					}
				})
			}else{
				if(item.text==hashs[1]){
					this.state.openKeys[0]=data[index].key;
				}
			}
		})
		this.setState({
			openKeys:this.state.openKeys,
			selectedKeys:arr
		})
	}
	onOpenChange(openKeys){
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if(this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({
				openKeys
			});
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	}
	render() {
		const menu = menuList => menuList.map((item, index) => {
			if(item.children && item.children.length > 0) {
				return(<Menu.SubMenu key ={item.key} title={<span><span><Icon type={item.icon} />{item.text}</span></span>}>
									{menu(item.children)}
								</Menu.SubMenu>)
			}
			return <Menu.Item key={item.key}>{item.text}</Menu.Item>;
		})
		return(
			<div>
				<div className="logo">
					<img src={logo} />
				</div>
				<Menu
			        mode="inline"
			        defaultSelectedKeys={this.state.selectedKeys}
			        onClick={this.handleClick.bind(this)} 
			        openKeys={this.state.openKeys}
			        onOpenChange={this.onOpenChange.bind(this)}
			        theme={'dark'}
				 >
			        {menu(data)}
	     		</Menu>
     		</div>
		)
	}
}
export default Menus;
