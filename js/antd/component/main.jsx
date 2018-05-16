import React from 'react';
import Menus from '~/component/menu/menu';
import Content from '~/component/content/content';
import {Col,Row} from 'antd';
import data from "~/data.jsx";
data();
class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'liting'
		}
	}
	componentWillMount(){
		let keys = window.location.hash;
		this.setState({
			menuKey:keys
		})
	}
	render(){
		return(
			<div className="wrapper">
				<div className="menu"><Menus menuKey={this.state.menuKey}/></div>
				<div className='contentBox'><Content /></div>
			</div>
		)
	}
}
export default Main;
