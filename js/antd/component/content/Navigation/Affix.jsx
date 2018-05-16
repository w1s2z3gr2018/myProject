import { Menu, Affix, Button, Breadcrumb, Row, Col, Alert, Dropdown,message } from 'antd';
import { Link } from 'react-router'

class Affixs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuTxt: '下拉菜单'
		}
	}
	componentWillMount() {
		let hashs = window.location.hash;
		console.log('affix:' + hashs);
		window.oncontextmenu = function() {
			return false;
		}
	}
	dropFn(item) {
		console.log(item)
		this.setState({
			menuTxt: item.key
		})

	}
	handleButtonClick(item){
		console.log(item)
		message.info('click left button')
	}
	render() {
		let menu = (
			<Menu onClick={this.dropFn.bind(this)}>
				<Menu.Item key='菜单1'>菜单1</Menu.Item>
				<Menu.Item key='菜单2'>菜单2</Menu.Item>
				<Menu.Item key='菜单3'>菜单3</Menu.Item>
			</Menu>
		)
		return(
			<div>
			    <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
					 <Button>120px to affix top</Button>
				</Affix>
				<span>面包屑</span>
				<Breadcrumb separator=" | ">
				    <Breadcrumb.Item>Home</Breadcrumb.Item>
				    <Breadcrumb.Item><Link to='layoutMenu'>跳转</Link></Breadcrumb.Item>
				    <Breadcrumb.Item>Application List</Breadcrumb.Item>
				    <Breadcrumb.Item>An Application</Breadcrumb.Item>
			    </Breadcrumb>
			    <Row className='btnTop'>
					<Alert message="click it."/>
				</Row>
				<Row className='btnTop'>
					<span>下拉菜单点击触发</span>
					<div>
						<Dropdown overlay={menu} placement ="bottomCenter" trigger={['click']}>
							<Button>{this.state.menuTxt}</Button>
						</Dropdown>
					</div>
				</Row>
				<Row className='btnTop'>
					<span>下拉菜单移入触发</span>
					<div>
						<Dropdown overlay={menu} placement ="bottomLeft">
							<Button>{this.state.menuTxt}</Button>
						</Dropdown>
					</div>
				</Row>
				<Row className='btnTop'>
					<span>下拉菜单鼠标右键触发</span>
					<div>
						<Dropdown overlay={menu} trigger={['contextMenu']}>
							<Button>{this.state.menuTxt}</Button>
						</Dropdown>
					</div>
					<Dropdown.Button
					      onClick={this.handleButtonClick.bind(this)}
					      overlay={menu}
					      style={{ marginLeft: 8 }}
					    >
					      Dropdown.Button
					    </Dropdown.Button>
				</Row>
			</div>
		)
	}
}
export default Affixs;