import {Card,Alert,Icon,Button,Modal,message,Tabs,notification} from 'antd';
const Tabpane = Tabs.TabPane;
const confirm = Modal.confirm;

export default class AlertList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			confirmLoading:false
		}
	}
	oncloseFun(e){
		console.log(e)
	}
	visiFun(){
		this.setState({
			visible:true
		})
	}
	onOkFUn(){
		this.setState({
			confirmLoading:true
		});
		setTimeout(function(){
			this.setState({
				confirmLoading:false,
				visible:false
			})
			message.success('保存成功!')
		}.bind(this),2000)
	}
	onCancel(){
		this.setState({
			visible:false
		})
		console.log('取消/关闭')
	}
	confireFun(){
		confirm({
			title:'真的要删除吗?',
			content:'删除后组件不可用!',
			okText:'删除',
			okType: 'danger',
			cancelText:'取消',
			onOk(){
				message.success('成功删除!')
			},
			onCancel(){
				message.warning('取消!')
			}
		})
	}
	successFun(){
		Modal.success({
			title:'success',
			content:'提交成功后可继续操作'
		})
	}
	//消息提示框
	notificationFun(){
		notification.open({
			message:'您有最新的消息!',
			description:'余额有变动，请注意!'
		})
		notification.success({
			message:'您有最新的消息!',
			description:'余额有变动，请注意!'
		})
		notification.error({
			message:'您有最新的消息!',
			description:'余额有变动，请注意!'
		})
	}
	componentWillMount(){
		this.notificationFun()
	}
	render(){
		return (
			<div>
				<Alert message='这是一段说明!' type='warning' showIcon={false} banner iconType='heart'/>
				<Card title="警告提示">
					<Alert message='success text' type='success' showIcon />
					<Alert showIcon message='info text' type='info' style={{margin:'10px 0px'}} banner/>
					<Alert showIcon message='error text' type= 'error' description="描述。。。" closable onClose={this.oncloseFun.bind(this)}/>
				</Card>
				<Card title="弹框" className="btnTop">
					<Button onClick={this.visiFun.bind(this)} icon='lock'>弹出</Button>
					<Modal 
						title="标题"
						visible={this.state.visible}
						onOk={this.onOkFUn.bind(this)}
						confirmLoading={this.state.confirmLoading}
						onCancel={this.onCancel.bind(this)}
						okText='保存'
						cancelText='取消'
					>
						<Tabs>
							<Tabpane tab='穷奇' key='qiongqi'>
								贪							
							</Tabpane>
							<Tabpane tab='饕餮' key='taotie'>圣兽2</Tabpane>
						</Tabs>
					</Modal>
					<Button  style={{margin:'0 10px'}} onClick={this.confireFun.bind(this)}>确认</Button>
					<Button onClick={this.successFun.bind(this)}>成功弹出</Button>
				</Card>
				<Card title="消息提示框" className="btnTop">
					<Button onClick={this.notificationFun.bind(this)}>消息提示框</Button>
				</Card>
			</div>
		)
	}
}
