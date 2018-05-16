import { Form, Button, Input, Icon, Checkbox ,message} from 'antd';
import './login.less';
const FormItem = Form.Item;

class Logins extends React.Component {
	constructor(props){
		super(props);
		this.state={
			userName:'',
			password:''
			}
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if(!err) {
				console.log('Received values of form: ', values);
				if(values.userName=='admin'&&values.password=='123456'){
					window.location.hash='index'
				}else{
					message.error('账号或密码不正确')
				}
			}
		});
	}
	componentWillMount(){
		this.setState({
			userName:'',
			password:''
		})
	}
	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return(
			<div className='login'>
				<div className='loginBox'>
						<div className="loginLeft">
							<p>欢迎进入后台登录界面</p>
						</div>
						
						<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
					        <FormItem >
						        {getFieldDecorator('userName', {
						            rules: [
						            	{ required: true, message: '输入账号',
						            	  initialValue: this.state.userName
						            	}
						            ],
								        })(
								            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}  />} placeholder="账号admin" />
								        )
							    }
					        </FormItem>
					        <FormItem>
						        {getFieldDecorator('password', {
						            rules: [{
							            	required: true, message: '输入密码' ,
							            	initialValue: this.state.userName}],
							            })(
							           		 <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码123456" />
							            )}
					        </FormItem>
					        <FormItem>
						        {getFieldDecorator('remember', {
						            valuePropName: 'checked',
						            initialValue: true,
							        })(
							           	<Checkbox>记住</Checkbox>
							        )}
						            <a className="login-form-forgot" href="">忘记密码</a>
						          	<Button type="primary" htmlType="submit" className="login-form-button">登录 </Button>
					        </FormItem>
				        </Form>
				</div>      
			</div>
		)
	}
}
export default Form.create()(Logins);