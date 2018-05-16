import { Row, Col, Menu } from 'antd';

Mock.mock('http://www.menu.com', {
	menu: [{
			key: 'yuwen',
			text: '语文'
		},
		{
			key: 'shuxue',
			text: '数学',
			children: [{
					key: 'xiaoshu',
					text: '小数'
				},
				{
					key: 'zhongshu',
					text: '中数',
					children: [{
							key: 'xiaoxiaoshu',
							text: '小小数'
						},
						{
							key: 'zhongzhongshu',
							text: '中中数',
						},
						{
							key: 'dadashu',
							text: '大大数',
							children: [
								{
									key: 'siji1',
									text: '四级菜单'
								},
								{
									key: 'siji2',
									text: '四级菜单2'
								},
								{
									key: 'siji3',
									text: '四级菜单3'
								},
							]
						}
					]
				},
				{
					key: 'dashu',
					text: '大数'
				}
			]
		},
		{
			key: 'huaxue',
			text: '化学',
			children: [{
					key: 'huaxue1',
					text: '化学1'
				},
				{
					key: 'huaxue2',
					text: '化学2'
				},
				{
					key: 'huaxue3',
					text: '化学3'
				},
			]
		},
		{
			key: 'shengwu',
			text: '生物'
		}
	]
})

class MenuCont extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: [],
			current: ['huaxue']
		}
	}
	theData() {
		axios({
			//method: 'get',
			url: 'http://www.menu.com',
			crossDomain: true,
			//			params: {
			//				name: 'liting'
			//			}
		}).then(item => {
			this.setState({
				menuList: item.data.menu
			})
		})
	}
	menuFn(e) {
		console.log(e)
		this.setState({
			current: [e.key]
		})
	}
	componentWillMount() {
		this.theData()
	}
	render() {
		let menuList = this.state.menuList;
		const menu = menuList => menuList.map((item, index) => {
			if(item.children && item.children.length > 0) {
				return(<Menu.SubMenu key ={item.key} title={item.text}>
									{menu(item.children)}
								</Menu.SubMenu>)
			}
			return <Menu.Item key={item.key}>{item.text}</Menu.Item>;
		})
		return(

			<Row>
				<Menu 
					onClick={this.menuFn.bind(this)} 
					mode='vertical' 
					style={{width:250}}
					selectedKeys={this.state.current}	
					>
					{menu(menuList)}
				</Menu>
			</Row>
		)
	}
}
export default MenuCont;