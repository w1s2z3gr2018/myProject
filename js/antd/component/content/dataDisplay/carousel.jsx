import { Card, Carousel, Collapse, List, Popover, Button, Tooltip } from 'antd';
import banner1 from 'img/logo.jpg';
import banner2 from 'img/timg.jpg';
const Panel = Collapse.Panel

export default class CarouselLsit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			actKey: '2',
			title: false,
			data: [{
					title: 'Ant Design Title 1',
				},
				{
					title: 'Ant Design Title 2',
				},
				{
					title: 'Ant Design Title 3',
				},
				{
					title: 'Ant Design Title 4',
				}
			]
		}
	}
	actFun(e) {
		let arr = [];
		arr = e.length > 1 ? e[e.length - 1] : e;
		this.setState({
			actKey: arr
		})
	}
	btnFun() {
		this.setState({
			title: !this.state.title
		})
	}
	render() {
		const content = (<div>
			<Button>{(this.state.title).toString()}</Button>
		</div>)
		return(
			<div>
				<Card title="走马灯">
					<Carousel autoplay className='carouseList'>
						<div><img src={banner1} /></div>
						<div><img src={banner2} /></div>
						<div><img src={banner1} /></div>
					</Carousel>
				</Card>
				<Collapse style={{width:200}} className="btnTop" activeKey={this.state.actKey} onChange={this.actFun.bind(this)}>
					<Panel header="湖南" key='1'>
						<p>长沙</p>
						<p>娄底</p>
						<p>湘潭</p>
					</Panel>
					<Panel header="动物" key='2'>
						<p>狗狗</p>
						<p>猫猫</p>
						<p>猪猪</p>
					</Panel>
					<Panel header="植物" key='3'>
						<p>蘑菇</p>
						<p>水仙花</p>
						<p>狗尾巴草</p>
					</Panel>
				</Collapse>
				<Card title="气泡卡片" className="btnTop">
					<Popover content={content} title='标题' trigger="click" placement="topLeft">
						<Button onClick={this.btnFun.bind(this)}>Hover me</Button>
					</Popover>
				</Card>
				<Card title='提示消息'>
					<Tooltip title="记得带把刀" >
						<span>上山打老虎</span>
					</Tooltip>
				</Card>
			</div>
		)
	}

}