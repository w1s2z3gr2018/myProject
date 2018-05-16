import { Form, Modal, Input, Button, message, Card, loading, Spin ,Select,Checkbox} from 'antd';
const FormItem = Form.Item;
class FormModule extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			loading: false,
			usename:'少先队员',
			chechData:[{label:'沙拉',value:'shala'},{label:'栗子',value:'lizi'},{label:'苹果',value:"pingguo"}]
		}
	}
	//点击按钮函数
	visibleFun() {
		this.setState({
			show: true,
			loading:true
		});
		setTimeout(function() {
			this.setState({
				loading:false
			})
		}.bind(this),200)
	}
	//弹出框取消
	showFun(e){
		this.subFun(e);
	}
	cancelFun(){
		this.setState({
			show:false
		})
	}
	//保存
	subFun(e){
		e.preventDefault();
		this.props.form.validateFields((err,values)=>{
			if(!err){
				console.log(values)
				this.setState({
					show:false
				})
				
			}
		})
	}
	changeFun(value){
		this.setState({
			welcome:`hi,${value}`
		})
		this.props.form.setFieldsValue({
	      sel: `Hi, ${value}!`,
	    });
	}
	//多选控件改变时
	normalizeFun(value,xhr=[]){
		console.log(value);
		console.log(xhr);
		return value
	}
	checkFun(e){
		console.log(e)
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			wrapperCol: {
				span: 10
			},
			labelCol: {
				span: 8
			},
			
		}
		return(
			<Card title="表单弹出框">
				<Button onClick={this.visibleFun.bind(this)}>弹出框</Button>
				<Modal
					visible={this.state.show}
					title='新建表单'
					okText='保存'
					onOk={this.showFun.bind(this)}
					onCancel={this.cancelFun.bind(this)}
				>
					<Form layout='horizontal' onSubmit={this.subFun.bind(this)}>
						<Spin spinning={this.state.loading}>
							<FormItem 
								{...formItemLayout}
								label="usename"
								extra="I'm a boy！"
							>
								{
									getFieldDecorator('usename',{
										initialValue:this.state.usename,
										rules:[{type:'',required:true,message:'必填项!'}]
									})(
										<Input placeholder="write usename" />
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="password"
							>
								{
									getFieldDecorator('pass',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'密码不能为空'}]
									})(
										<Input type="password" placeholder="write password"/>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="warn"
								hasFeedback
								validateStatus="warning"
							>
								{
									getFieldDecorator('warn',{
										initialValue:this.state.welcome,
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'思密达'}]
									})(
										<Input placeholder="write password" id="warning"/>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="Validating"
								hasFeedback
								validateStatus="validating"
							>
								{
									getFieldDecorator('validating',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'嗯啊'}]
									})(
										<Input placeholder="write password"/>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="error"
								hasFeedback
								validateStatus="error"
							>
								{
									getFieldDecorator('error',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'呵呵'}]
									})(
										<Input placeholder="write password"/>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="success"
								hasFeedback
								validateStatus="success"
							>
								{
									getFieldDecorator('success',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'success'}]
									})(
										<Input placeholder="write password"/>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="sex"
								hasFeedback
								validateStatus="success"
							>
								{
									getFieldDecorator('sex',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'success'}]
									})(
										<Select placeholder="write password" onChange={this.changeFun.bind(this)}>
											<Select.Option value='帅哥'>帅哥</Select.Option>
											<Select.Option value='美女'>美女</Select.Option>
										</Select>
									)
								}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="sel"
								hasFeedback
								validateStatus="warning"
							>
								{
									getFieldDecorator('sel',{
										validateTrigger: ['onChange', 'onBlur'],
										rules:[{type:'',required:true,message:'success'}]
									})(
										<Input placeholder='xxx' />
									)
								}
							</FormItem>
							<FormItem 
								{...formItemLayout}
								label="改变控件的状态"	
							>
								{
									getFieldDecorator('checkboxs',{
										normalize:this.normalizeFun
									})(
										<Checkbox.Group options={this.state.chechData} onChange={this.checkFun.bind(this)}/>
									)
								}
							</FormItem>
						</Spin>
					</Form>
				</Modal>
			</Card>
		)
	}
}
export default Form.create({})(FormModule);