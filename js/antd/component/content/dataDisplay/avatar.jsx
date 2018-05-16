import { Card, Avatar, Badge, Button, Icon } from 'antd';
import avatImg from 'img/11.jpg';
const {
	Meta
} = Card;

export default class AvatorList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nub: 10,
			numb: 0,
			noTitleKey: 'app',
			tabListNoTitle: [{
				key: 'article',
				tab: 'article',
			}, {
				key: 'app',
				tab: 'app',
			}, {
				key: 'project',
				tab: 'project',
			}],

		}
	}
	reduce() {
		let numb = this.state.numb + 1;
		this.setState({
			numb
		});
	}
	add() {
		let numb = this.state.numb - 1;
		this.setState({
			numb
		});
	}
	onTabChange(key, type) {
		console.log(key, type)
		this.setState({
			[type]: key
		})
	}
	render() {
		const gridStyle = {
			width: '25%',
			textAlign: 'center'
		}

		return(
			<div>
				<Card title="头像组">
					<Avatar icon='user' size='small' />
					<Avatar style={{margin:10,curstom:'poiner'}}>用户</Avatar>
					<Avatar src={avatImg} />
					<Avatar shape='square' icon='star' style={{marginLeft:20}}/>
				</Card>
				<Card title='待徽标的头像' className="btnTop">
					<Badge count={this.state.nub}><Avatar src={avatImg} /></Badge>
					<Badge dot >
						<Avatar style={{marginLeft:20,color:'#FFF',background:'#000'}} size='large' >李霆</Avatar>
					</Badge>
				</Card>
				<Card title="徽标数" className='btnTop'>
					<Badge count={4}>
						<a href="http://www.baidu.com" className='head-example' style={{width:50,height:50,display:'inline-block',color:'#fff',background:'#000',textAlign:'center',lineHeight:'50px'}}>百度</a>
					</Badge>
					<Badge count={110} style={{marginLeft:50}}></Badge>
				</Card>
				<Card title="徽标头像变动" className="btnTop" extra="hello" bordered={false}>
					<Badge count={this.state.numb} overflowCount={10}>
						<Avatar icon='mobile' />
					</Badge>
					<Button.Group style={{marginLeft:20,marginRight:20}}>
						<Button onClick={this.reduce.bind(this)}><Icon type="minus" /></Button>
						<Button onClick={this.add.bind(this)}><Icon type="plus" /></Button>
					</Button.Group>
					<Badge status="processing" text='Processing' />
				</Card>
				<Card title="Card Title" className='btnTop'>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				    <Card.Grid style={gridStyle}>Content</Card.Grid>
				</Card>
			</div>
		)
	}
}