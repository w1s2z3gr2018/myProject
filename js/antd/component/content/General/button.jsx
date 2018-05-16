import { Button, Row, Col, Radio, Icon, Dropdown, Menu, message } from 'antd';
Mock.mock('http://www.ceshi.com', {
	data: {
		nub: '假数据来了'
	}
})

class ButtonList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mess: '按钮哟',
			size: 'large',
			direction: 'up',
			wait: '',
			loading: false
		}
		this.colosSend = this.colosSend.bind(this)
	}
	componentWillMount() {
		
	}
	sizeFn(e) {
		this.setState({
			size: e.target.value
		})
	}
	menuFn(item) {
		console.log(item)
	}
	directionFn() {
		this.setState({
			direction: this.state.direction == 'down' ? 'up' : 'down'
		})
	}
	sendFn() {
		this.colosSend()
	}
	colosSend() {
		this.setState({
			loading: true,
			wait: '请等待'
		})
		$.ajax({
			type: "post",
			url: "http://www.ceshi.com",
			async: true,
			data:{
				name:'liting'
			},
			success: function(data) {
				console.log(data)
				let theData = JSON.parse(data);
				setTimeout(function() {
					message.success('数据获取成功')
					this.setState({
						nub: theData.data.nub,
						loading: false,
						wait: '重新发送'
					})
				}.bind(this), 2000);
			}.bind(this),
		}).always(function(){
			
		}.bind(this))
	}
	//axios 获取数据
	axiosFn() {
		const data = {
			name: 'liting'
		};
		this.setState({
			loadingAxios: true
		})
		//		axios.post(`http://www.ceshi.com`,{
		//			name:'liting'
		//		}).then(data=>{
		//			setTimeout(function(){
		//				message.success('数据来了!')
		//				this.setState({
		//					axiosTxt:data.data.data.nub,
		//					loadingAxios:false
		//				})
		//			}.bind(this),1500)})
		//			.catch(error=> {
		//			    console.log(error);
		//			});
		axios({
			method: 'post',
			url: 'http://www.ceshi.com',
//			params: {
//				name: 'liting'
//			}
		}).then(data => {
			setTimeout(function() {
				message.success('数据来了!')
				this.setState({
					axiosTxt: data.data.data.nub,
					loadingAxios: false
				})
			}.bind(this), 1500);
		})
	}
	btnGroupFn(e){
		console.log(e)
	}
	render() {
		const menu = (
			<Menu onClick={this.menuFn.bind(this)}>
				<Menu.Item key='yuwen'>语文</Menu.Item>
				<Menu.Item key='shuxue'>数学</Menu.Item>
				<Menu.Item key='English'>英语</Menu.Item>
			</Menu>
		);
		return(
			<div>
				<Row gutter={16}>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>		
							<Button>{this.state.mess}</Button>
						</div>	
					</Col>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>
							<Button type="primary">{this.state.mess}</Button>
						</div>	
					</Col>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>
							<Button type="danger">{this.state.mess}</Button>
						</div>
					</Col>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>
							<Button type="dashed">{this.state.mess}</Button>
						</div>	
					</Col>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>
							<Button icon='search'>{this.state.mess}</Button>
						</div>	
					</Col>
					<Col className="gutter-row" span={4}>
						<div className='gutter-box'>
							<Button icon='search' shape='circle'></Button>
						</div>	
					</Col>
				</Row>
				<Row className='btnTop' >
					<Radio.Group value={this.state.size} onChange={this.sizeFn.bind(this)}>
						<Radio.Button value='large'>大按钮</Radio.Button>
						<Radio.Button value='default'>中按钮</Radio.Button>
						<Radio.Button value='small'>小按钮</Radio.Button>
					</Radio.Group>
				</Row>
				<Row className='btnTop'>
					<Button type="primary" size={this.state.size}>Primary</Button>
			        <Button size={this.state.size} disabled>Normal</Button>
			        <Button type="dashed" size={this.state.size}>Dashed</Button>
			        <Button type="danger" size={this.state.size} >Danger</Button>
				</Row>
				<Row className='btnTop'>
					<Button.Group size={this.state.size}>
						<Button type="primary"><Icon type='left' />Left</Button>
						<Button type="primary">Right<Icon type='right' /></Button>
					</Button.Group>
				</Row>
				<Row className='btnTop'>
					<Dropdown overlay={menu} onClick={this.directionFn.bind(this)}>
						<Button size='large'>目录<Icon type={this.state.direction}/></Button>
					</Dropdown>
				</Row>
				<Row className='btnTop'>
					<Button loading={this.state.loading} onClick={this.sendFn.bind(this)}>{this.state.wait?this.state.wait:'发送'}</Button>
					<Button ghost type='danger'>背景透明</Button>
					<Button><Icon type='search' />{this.state.nub}</Button>
				</Row>
				<Row className='btnTop'>
					<div>axios获取数据 <Button onClick={this.axiosFn.bind(this)} loading={this.state.loadingAxios}>获取数据</Button></div>
					<span>{this.state.axiosTxt}</span>
				</Row>
				<Row className='btnTop'>
					<Button.Group onClick={this.btnGroupFn.bind(this)}>
						<Button value='1'>按钮<sup>1</sup></Button>
						<Button value='2'>按钮<sup>2</sup></Button>
						<Button value='3'>按钮<sup>3</sup></Button>
					</Button.Group>
				</Row>
			</div>
		)
	}
}
export default ButtonList;