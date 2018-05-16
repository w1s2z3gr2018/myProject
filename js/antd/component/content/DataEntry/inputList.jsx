import { Card, Form, Row, Col, Input, Button, Select, Icon, Table,Tooltip ,InputNumber,Mention,Rate,Radio} from 'antd';
const FormItem = Form.Item;
const { toString, toContentState } = Mention;

class InputList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name3: '',
			columns: [{
				title: 'Name',
				dataIndex: 'name',
			}, {
				title: 'Age',
				dataIndex: 'age',
			}, {
				title: 'Address',
				dataIndex: 'address',
			}],
			selectedRowKeys: ['focus'],
			tipList:[]
		}
	}
	save(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				if(!values.toolTip){
					this.state.tipList.push('click')
					this.setState({
						tipList:this.state.tipList
					})
					this.refs.tooTips.focus();
				}
			}
		})
	}
	selFun(e) {
		console.log(e)
	}
	//搜索
	searchFun(value) {
		console.log(value)
	}
	//动物联动
	animal(e) {
		console.log(e)
	}
	onSelectChange(selectedRowKeys){
		this.setState({
			selectedRowKeys
		});
	}
	menFun(e){
		
	}
	menChange(val){
		console.log(val);
	}
	selMenFun(val){
		console.log(val);
	}
	//评星
	rateFun(e){
		console.log(e)
	}
	//按钮组切换
	radioBtn(e){
		console.log(e.target.value)
	}
	render() {
		const selList = (
			<Select onChange={this.selFun.bind(this)} defaultValue='huaxi'>
				<Select.Option value='huanan'>华南</Select.Option>
				<Select.Option value='huazhong'>华中</Select.Option>
				<Select.Option value='huaxi'>华西</Select.Option>
			</Select>
		);
		const {
			getFieldDecorator
		} = this.props.form;
		const formItemLayout = {
			wrapperCol: {
				span: 20
			},
			labelCol: {
				span: 4
			}
		};
		const search = (
			<Button style={{background:'none',border:'none'}} icon='search' onChange={this.searchFun.bind(this)}></Button>
		);
		const data = [];
		for(let i = 0; i < 46; i++) {
			data.push({
				key: i,
				name: `Edward King ${i}`,
				age: 32,
				address: `London, Park Lane no. ${i}`,
			});
		};
		//按钮组
		const radioData=[{label:'hunan',value:'湖南'},{label:'changsha',value:'长沙'},{label:'lsj',value:'冷水江'}]
		const rowSelection = {
			selectedRowKeys: this.state.selectedRowKeys,
			onChange: this.onSelectChange.bind(this),
		};
		const hasSelected = this.state.selectedRowKeys.length > 0;
		return(
			<div>
				<Card>
					<Form onSubmit={this.save.bind(this)} layout='inline'>
						<FormItem style={{width:'30%'}}>
							{
								getFieldDecorator('name')(
									<Input placeholder="write name1!" style={{width:300}} addonAfter=".com" addonBefore="http://"/>
								)
							}
						</FormItem >
						<FormItem style={{width:'30%'}}>
							{
								getFieldDecorator('usename')(
									<Input placeholder="write name2!" addonBefore={selList}/>
								)
							}
						</FormItem>
						<FormItem style={{width:'33%'}}>
							{
								getFieldDecorator('search')(
									<Input.Search onSearch={this.searchFun} placeholder="search"/>
								)
							}
						</FormItem>
						<div style={{marginTop:20}}>
							<FormItem style={{width:'30%'}}>
								{
									getFieldDecorator('search1')(
										<Input.Search  onSearch={this.searchFun} placeholder="search"/>
									)
								}
							</FormItem>
							<FormItem style={{width:'30%'}}>
								<Input.Group compact>
									<Input placeholder="email" style={{width:'70%'}}/>
									<Button type='primary' size='large' style={{width:'30%'}} icon='search'></Button>
								</Input.Group>
							</FormItem>
							<FormItem style={{width:'30%'}}>
								<Input.Group compact>
									<Input placeholder="email" style={{width:'70%'}}/>
									<Select defaultValue='cat' onChange={this.animal.bind(this)}>
										<Select.Option value='cat'>小猫</Select.Option>
										<Select.Option value='dog'>小狗</Select.Option>
										<Select.Option value='bird'>小鸟</Select.Option>
									</Select>
								</Input.Group>
							</FormItem>
						</div>
						<div style={{marginTop:20}}>
							<FormItem style={{width:'30%'}}>
								{
									getFieldDecorator('suffixUse')(
										<Input placeholder="use" prefix={<Icon type='user' />} />
									)
								}
							</FormItem>
							<FormItem style={{width:'30%'}}>
								{
									getFieldDecorator('suffixUse')(
										<Input placeholder="password" suffix={<Icon type='lock' />} />
									)
								}
							</FormItem>
							<FormItem style={{width:'30%'}}>
								{
									getFieldDecorator('tooTip')(
										<Tooltip 
											title="输入数字" 
											trigger={this.state.tipList}
											placement='topLeft'
										>
											<Input placeholder="it's number" ref='tooTips'/>
										</Tooltip>
									)
								}
							</FormItem>
						</div>
						<div style={{marginTop:20}}>
							<Button htmlType='submit'>提交</Button>
						</div>	
					</Form>
						
				</Card>
				<Card title="输入框只输入数字" className="btnTop">
					<Col span={6}>
						<InputNumber min={1} max={10} defaultValue={1}/>
					</Col>
					<Col span={6}>
						<InputNumber min={1} max={100} step={0.01} defaultValue={50}/>
					</Col>
				</Card>
				<Card title="提及" className="btnTop">
					<Col span={6}>
						<Mention 
							onChange={this.menChange.bind(this)}
							defaultValue={toContentState('@小红帽')}
							suggestions={['张三', '李四', '王五', '小红帽', '大灰狼', 'にほんご']}
							onChange={this.menFun.bind(this)}
							onSelect={this.selMenFun.bind(this)}
						/>
					</Col>
				</Card>
				<Card title="评星" className="btnTop">
					<Col span={6}>
						<Rate onChange={this.rateFun.bind(this)}/>
					</Col>
					<Col span={6}>
						<Rate disabled onChange={this.rateFun.bind(this)} defaultValue={3}/>
					</Col>	
					<Col span={6}>
						<Rate  defaultValue={3} allowHalf character={<Icon type='heart'/>}/>
					</Col>
					<Col span={6}>
						<Rate  defaultValue={3} allowHalf character={<Icon type='user'/>} count={10} />
					</Col>
				</Card>
				<Card title="单选">
					<Row>
						<Radio.Group value={this.state.fruits} onChange={(e)=>{this.setState({fruits:e.target.value})}}>
							<Radio value={0}>麻瓜</Radio>
							<Radio value={1}>傻瓜</Radio>
							<Radio value={2}>呆瓜</Radio>
						</Radio.Group>
						<Radio.Group onChange={this.radioBtn.bind(this)}>
							<Radio.Button value='1'>shang</Radio.Button>
							<Radio.Button value='2'>shan</Radio.Button>
							<Radio.Button value='3'>da</Radio.Button>
							<Radio.Button value='4'>lao</Radio.Button>
							<Radio.Button value='5'>hu</Radio.Button>
						</Radio.Group>
						<Radio.Group options={radioData}></Radio.Group>
					</Row>
				</Card>
			</div>	
		)
	}
}
export default Form.create({})(InputList);