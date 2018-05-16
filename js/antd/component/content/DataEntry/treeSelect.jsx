import { Card, TreeSelect,TimePicker ,Transfer} from 'antd';
const TreeNode = TreeSelect.TreeNode;
import moment from 'moment';

export default class TreeSelectList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			treeValue: '湖北',
			data: "0-0",
			treeData: [{
				label: 'Node1',
				value: '0-0',
				key: '0-0',
				children: [{
					label: 'Child Node1',
					value: '0-0-1',
					key: '0-0-1',
				}, {
					label: 'Child Node2',
					value: '0-0-2',
					key: '0-0-2',
				}],
			}, {
				label: 'Node2',
				value: '0-1',
				key: '0-1',
			}],
			time:'12-00-00',
			timeO:'12:44',
			mockData:[]
		}
	}
	treeChange(e) {
		console.log(e)
		this.setState({
			treeValue: e
		})
	}
	timeFun(e,val){
		console.log(val)
		this.setState({
			time:e
		})
	}
	componentWillMount(){
		const mockData= [];
		for (var i = 0; i < 20; i++) {
			mockData.push({
				key:i.toString(),
				title:`标题${i+1}`,
				description:`描述${i+1}`,
				disabled:i%3<1
			})
		};
		this.setState({
			mockData:mockData
		});
	}
	//穿梭框
	transChange(item,index,xhr){
//		console.log(item);
//		console.log(index)
//		console.log(xhr)
		this.setState({
			transVal:item
		})
	}
	hundleChange(item,index,xhr){
		console.log(item);
		console.log(index);
	}
	render() {
		const dataTree={
			placeholder:'选择',
			allowClear:true,
			treeData:this.state.treeData,
			value:this.state.data,
			onChange:(e)=>{this.setState({data:e}) ,console.log(e)},
			treeCheckable:true
		}
		console.log(this.state.mockData)
		return(
			<div>
				<Card title='树选择器'>
					<TreeSelect 
						allowClear
						multiple
						showSearch
						style={{width:200}}
						value={this.state.treeValue}
						onChange={this.treeChange.bind(this)}
					>
						<TreeNode value='起风了' key='0-1' title="起风了"></TreeNode>
						<TreeNode value='湖北' key='0-2' title="湖北"></TreeNode>
						<TreeNode value='旅行的意义' key='0-3' title="旅行的意义">
							<TreeNode value='栀子花' key='0-4' title="栀子花"></TreeNode>
							<TreeNode value='行歌' key='0-5' title="行歌">
								<TreeNode value='33' key='0-6' title="33"></TreeNode>
								<TreeNode value='yiyi' key='0-7' title="yiyi"></TreeNode>
								<TreeNode value='cece' key='0-8' title="cece"></TreeNode>
							</TreeNode>
						</TreeNode>
					</TreeSelect>
					<TreeSelect
						style={{marginLeft:10,width:200}}
						showSearch
						value={this.state.data}
						treeData={this.state.treeData}
						onChange={(e)=>{this.setState({data:e})}}
					/>
				</Card>
				<Card title='树选择器2' className="btnTop">
					<TreeSelect {...dataTree} style={{width:300}}/>
				</Card>
				<Card title='时间选择器'>
					<TimePicker user12Hours value={this.state.time?moment(this.state.time,'HH:mm:ss'):null} onChange={this.timeFun.bind(this)}/>
					<TimePicker 
						style={{marginLeft:10}}
						value={this.state.timeO?moment(this.state.timeO,'HH:mm'):null} 
						format='HH:mm'
						onChange={(e)=>{this.setState({timeO:e})}}
					/>
				</Card>
				<Card title="穿梭框" className='btnTop'>
					<Transfer
						showSearch
						dataSource = {this.state.mockData}
						titles={['左边','右边']}
						targetKeys={this.state.transVal}
						onChange={this.transChange.bind(this)}
						onSelectChange={this.hundleChange.bind(this)}
						render={item=>item.title}
					></Transfer>
				</Card>
			</div>
		)
	}
}