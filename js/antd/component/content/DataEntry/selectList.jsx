import { Form, Card, Select, Button, message } from 'antd';
const {
	Option,
	OptGroup
} = Select;
import querystring from 'querystring';
//fetch方法数据交互
import 'whatwg-fetch';
import 'core-js/es6/promise';
import '~/data'

class SelectList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			language: '1',
			SelMore: ['1', '3'],
			selVal: '2',
			dog: {
				key: 'dog'
			}
		}
	}
	//搜索匹配
	filterFun(item, options) {
		let optLow = (options.props.children).toLowerCase()
		if(optLow.indexOf(item.toLowerCase()) >= 0) {
			return options.props.children;
		}
	}
	//下拉多选
	selMoreFun(e) {
		this.setState({
			SelMore: e
		})
	}
	selMoreFuns(e) {
		this.setState({
			SelMores: e
		})
	}
	//json数据传输
	jsonFun() {
		//只应用于get
		const str = querystring.encode({
			code: 'utf-8',
			q: '你',
		});
		jsonp(`https://suggest.taobao.com/sug?${str}`)
			.then(response => response.json())
			.then((data) => {
				message.success('数据来了');
				console.log(data)
			})
			.catch((err) => {
				//数据请求失败后的回调函数
			})
	}
	fetchFun() {
		fetch('https://randomuser.me/api/?results=5')
			.then(response => response.json())
			.then((data) => {
				console.log(data)
				const thedata = data.results.map(user => ({
					text: `${user.name.first} ${user.name.last}`,
					value: user.login.username,
				}));
				this.setState({
					thedata
				});
			});
	}
	animal(e) {
		console.log(e)
		this.setState({
			dog: e
		})
	}
	//fetch
	

	render() {
		return(
			<div>
				<Card>
					<Select onChange={(e)=>{this.setState({language:e})}} value={this.state.language} style={{width:150}}>
						<Select.Option value='1'>中文</Select.Option>
						<Select.Option value='2'>英文</Select.Option>
						<Select.Option value='3' disabled>鸟语</Select.Option>
					</Select>
					<Select 
						onChange={(e)=>{this.setState({searchSel:e})}} 
						placeholder="输入匹配文字/选择项"
						value={this.state.searchSel} 
						style={{width:150 ,marginLeft:15}}
						showSearch
						filterOption={this.filterFun.bind(this)}
						>
							<Select.Option value='1'>Layput</Select.Option>
							<Select.Option value='2'>Form</Select.Option>
							<Select.Option value='3'>中文</Select.Option>
							<Select.Option value='4'>latter</Select.Option>
							<Select.Option value='5'>alert</Select.Option>
							<Select.Option value='6'>focus</Select.Option>
					</Select>
					<Select 
						onChange={this.selMoreFun.bind(this)} 
						placeholder="下拉多选"
						value={this.state.SelMore} 
						style={{width:250 ,marginLeft:15}}
						mode='tags'
						>
							<Select.Option value='1'>Layput</Select.Option>
							<Select.Option value='2'>Form</Select.Option>
							<Select.Option value='3'>中文</Select.Option>
							<Select.Option value='4'>latter</Select.Option>
							<Select.Option value='5'>alert</Select.Option>
							<Select.Option value='6'>focus</Select.Option>
					</Select>
					<Select 
						onChange={this.selMoreFuns.bind(this)} 
						placeholder="下拉多选"
						value={this.state.SelMores} 
						style={{width:250 ,marginLeft:15}}
						mode='multiple'
						>
							<Select.Option value='1'>Layput</Select.Option>
							<Select.Option value='2'>Form</Select.Option>
							<Select.Option value='3'>中文</Select.Option>
							<Select.Option value='4'>latter</Select.Option>
							<Select.Option value='5'>alert</Select.Option>
							<Select.Option value='6'>focus</Select.Option>
					</Select>
					<Select style={{width:150,marginLeft:15}}
						onChange={(e)=>{this.setState({selVal:e})}}
						value={this.state.selVal}
					>
						<OptGroup label='头头'>
							<Option value='1'>一个头</Option>
							<Option value='2'>两个头</Option>
							<Option value='3'>三个头</Option>
							<Option value='4'>四个头</Option>
						</OptGroup>
						<OptGroup label='手手'>
							<Option value='5'>一双手</Option>
							<Option value='6'>两双手</Option>
							<Option value='7'>三双手</Option>
							<Option value='8'>四双手</Option>
						</OptGroup>
					</Select>
				</Card>
				<Card title='数据传输' className='btnTop'>
					<Button onClick={this.jsonFun}>jsonp</Button>
					<Button onClick={this.fetchFun.bind(this)}>fetch</Button>
				</Card>
				<Card title="下拉选择获取label值" className='btnTop'>
					<Select labelInValue onChange={this.animal.bind(this)} value={this.state.dog}>
						<Select.Option value='dog'>狗狗</Select.Option>
						<Select.Option value='cat'>猫猫</Select.Option>
						<Select.Option value='ji'>鸡鸡</Select.Option>
					</Select>
				</Card>
			</div>
		)
	}
}

export default Form.create({})(SelectList);