import { Tabs, Card, Icon, Button, Tag , Timeline } from 'antd';
const Tabpane = Tabs.TabPane;
const CheckableTag = Tag.CheckableTag;

export default class TabsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			cur: '2',
			activeKey: 'ba',
			selectedTags: [],
			tagsFromServer: ['Movies', 'Books', 'Music', 'Sports']
		}
	}
	tabFun(e) {
		console.log(e)
		this.setState({
			activeKey: e
		})
	}
	tabClose(e) {
		console.log(e)
	}
	handleChange(tag, checked) {
		const {
			selectedTags
		} = this.state;
		const nextSelectedTags = checked ? [...selectedTags, tag] :
			selectedTags.filter(t => t !== tag);
		console.log('You are interested in: ', nextSelectedTags);
		this.setState({
			selectedTags: nextSelectedTags
		});
	}
	render() {
		const tabBarExtraContent = (<Button>呵呵</Button>)
		const tagsFromServer = this.state.tagsFromServer || []
		console.log(this.state.selectedTags)
		return(
			<div>
				<Card title="tab切换" >
					<Tabs  tabPosition={'left'}>
						<Tabpane tab={<span><Icon type='heart' />西瓜</span>} key='1'>西瓜</Tabpane>
						<Tabpane tab='苦瓜' key='2'>苦瓜</Tabpane>
						<Tabpane tab='呆瓜' key='3'>呆瓜</Tabpane>
						<Tabpane tab='瓜皮' key='4'>瓜皮</Tabpane>
					</Tabs>
				</Card>
				<Card title="切换" className='btnTop'>
					<Tabs  tabBarExtraContent={tabBarExtraContent} activeKey={this.state.activeKey} onChange={this.tabFun.bind(this)} type='card'>
						<Tabpane tab='狂' key ='kuang'>狂</Tabpane>
						<Tabpane tab='霸' key='ba'>霸</Tabpane>
						<Tabpane tab='炫' key='xuan'>炫</Tabpane>
						<Tabpane tab='酷' key='ku'>酷</Tabpane>
						<Tabpane tab='拽' key='zhuai'>拽</Tabpane>
					</Tabs>
				</Card>
				<Card title="tag标签" className="btnTop">
					<div>
						<Tag>猫猫</Tag>
						<Tag>狗狗</Tag>
						<Tag>猪猪</Tag>
						<Tag closable onClose={this.tabClose.bind(this)}>豆豆</Tag>
					</div>
					<div className="btnTop">
						{
							tagsFromServer.map((item,index)=>{
								return <CheckableTag
									checked={this.state.selectedTags.indexOf(item) > -1}
           							onChange={checked => this.handleChange(item, checked)}
									key={index}>
									{item}
								</CheckableTag>
							})
						}
					</div>
				</Card>
				<Card title="时间轴" className="btnTop">
					<Timeline>
					  <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
					  <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
					  <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
					  <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
					</Timeline>
				</Card>
			</div>
		)
	}
}