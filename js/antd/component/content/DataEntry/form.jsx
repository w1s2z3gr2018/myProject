import { Card, Form, Input, Icon, Button, Row, Col, message, AutoComplete } from 'antd';
const FormItem = Form.Item;

class Forms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			email: '291772144@qq.com',
			autoData: []
		}
	}
	/*表单提交*/
	componentDidMount() {
		this.props.form.validateFields();
		this.state.password = '';
		this.state.useName = 'liting';
		this.state.usename = ''
	}
	handleSumbit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log('Received values of form: ', values);
			}
		});
	}
	errFun(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log(values)
			}
		})
	}
	formFun(e) {
		message.success('ok');
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log(values);
			}
		});
	}
	//自动补全
	autoFun(value) {
		let autoData;
		if(!value) {
			autoData = [];
		} else {
			autoData = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
		}
		this.setState({
			autoData
		});
	}
	//密码与重复密码
	firstPass(item,value,callback){
		if(value&&value!=this.props.form.getFieldValue('pass')){
			callback('密码不一致');
		}else{
			callback();
		}
	}
	nextPass(item,value,callback){
		if(value){
			this.props.forms.validateFields(['confirm'],{force:true})
		}
		callback();
	}
	render() {
		const {
			getFieldDecorator,
			getFieldsError,
			getFieldError,
			isFieldTouched
		} = this.props.form;
		const formItemLayout = {
			labelCol: {
				span: 6
			},
			wrapperCol: {
				span: 14
			}
		}
		const Adata = (this.state.autoData).map(website => (
			<AutoComplete.Option key={website}>{website}</AutoComplete.Option>
		));
		return(
			<div>
				<Card>
					<Form layout='inline' autoComplete='off' onSubmit={this.handleSumbit.bind(this)}>
						<Form.Item
						>
							{
								getFieldDecorator('usename',{
									ininialValue:this.state.usename,
									 rules: [{ type:'',required: true, message: '请输入用户名!' }],
								})(
									<Input prefix={<Icon type='user'/>} placeholder="请输入用户名!" />
								)
							}
						</Form.Item>
						<Form.Item>
							{
								getFieldDecorator('password',{
									 rules: [{ required: true, message: '请输入密码!' }],
								})(
									<Input prefix={<Icon type='lock'/>} type='password' placeholder="请输入密码!" />
								)
							}
						</Form.Item>
						<Form.Item>
							<Button type='primary' htmlType="submit">登 录</Button>
						</Form.Item>
					</Form>
				</Card>
				<Card title="表单值异常处理" className="btnTop">
					<Form layout='horizontal' onSubmit={this.errFun.bind(this)}>
						<FormItem
							{...formItemLayout}
							label="用户名"
						>
							{
								getFieldDecorator('useName',{
									initialValue:this.state.useName,
									rules:[{
										type:'',
										required:true,
										message:'妥妥的'
									}]
								})(
									<Input placeholder='usename' />
								)
							}
						</FormItem>
						<FormItem
							extra='六位数密码'
							{...formItemLayout}
							label="密码"
						>
							{
								getFieldDecorator('passwords',{
									initialValue:this.state.passwords,
									rules:[{
										type:'',
										required:true,
										message:'呦西'
									}]
								})(
									<Input placeholder="输入密码" maxLength='6'/>
								)
							}
						</FormItem>
						<FormItem></FormItem>
						<FormItem></FormItem>
						<Col offset={6}>
							<Button htmlType='submit' type='primary' className="save">保存</Button>
							<Button htmlType="reset">重置</Button>
						</Col>
					</Form>
				</Card>
				<Card className="btnTop">
					<Form layout='horizontal' onSubmit={this.formFun.bind(this)}>
						<FormItem
					          {...formItemLayout}
					          label="E-mail"
					          extra="ps:fake"
					        >
					          {getFieldDecorator('email', {
					          	initialValue:this.state.email,
					            rules: [
						            {type: 'email', message: '输入正确的邮箱格式'}, 
						            {required: true, message: '输入你的邮箱'}
					            ],
					          })(
					            <Input />
					          )}
					    </FormItem>
					    <FormItem
							{...formItemLayout}
							label="use"
					    >
						    {
						    	getFieldDecorator('use',{
						    		ininialVlaue:this.state.use,
						    		rules:[{type:'',required:true,message:'自动补全'}]
						    	})(
						    		<AutoComplete 
						    		dataSource={Adata}
						    		onChange={this.autoFun.bind(this)}
						    		placeholder="输入补全"
						    		/>
						    	)
						    }
					    </FormItem>
					    <FormItem
					    	{...formItemLayout}
					    	label="密码"
					    >
					    	{
					    		getFieldDecorator('pass',{
					    			rules:[
					    				{type:'',required:true,message:'输入正确的密码'},
					    				{validator:this.firstPass.bind(this)}
					    			]
					    		})(
					    			<Input type="password" placeholder="输入密码" />
					    		)
					    	}
					    </FormItem>
					   <FormItem
					    	{...formItemLayout}
					    	label="重复密码"
					    >
						    {
						    	getFieldDecorator('repeatPass',{
						    		rules:[
							    		{required:true,message:'重复密码'},
							    		{validator:this.nextPass.bind(this)}
						    		]
						    	})(
						    		<Input type='password' placeholder='重复密码'/>
						    	)
						    }
					    </FormItem>
					    <Col offset={6}>
							<Button htmlType='submit' type='primary' className="save">保存</Button>
							<Button htmlType="reset">重置</Button>
						</Col>
					</Form>
				</Card>
			</div>
		)
	}
}
export default Form.create({})(Forms);