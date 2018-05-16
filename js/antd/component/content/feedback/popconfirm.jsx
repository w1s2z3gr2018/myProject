import { Card, message, Popconfirm,Button,Spin ,Switch,Alert} from 'antd';

export default class PopconfirmList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}
	delFun(){
		message.success('删除咯!')
	}
	cancelFun(){
		message.error('取消咯!')
	}
	checkFun(e){
		this.setState({
			loading:e
		})
	}
	render(){
		return(
			<div>
				<Card title="气泡确认框">
					<Popconfirm title='确认删除?' 
						onConfirm={this.delFun.bind(this)} 
						onCancel={this.cancelFun.bind(this)}
						okText='确认'
						cancelText="取消"
					>
						<Button type='danger' icon='minus'>删除</Button>
					</Popconfirm>
				</Card>
				<Card title="加载">
					<Spin spinning={this.state.loading} tip="加载中…">
						<Alert message="haohaoxuexi" description='tiantianxiangshang' />
					</Spin>
					<Switch checked={this.state.loading} onChange={this.checkFun.bind(this)} />
				</Card>
			</div>
		)
	}
}