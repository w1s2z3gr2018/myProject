import { Card, Tree } from 'antd'
const TreeNode = Tree.TreeNode;

export default class TreeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			checkedKeys: ['keji4'],
			treeData: [{
				title: '0-0',
				key: '0-0',
				children: [{
					title: '0-0-0',
					key: '0-0-0',
					children: [{
							title: '0-0-0-0',
							key: '0-0-0-0'
						},
						{
							title: '0-0-0-1',
							key: '0-0-0-1'
						},
						{
							title: '0-0-0-2',
							key: '0-0-0-2'
						},
					],
				}, {
					title: '0-0-1',
					key: '0-0-1',
					children: [{
							title: '0-0-1-0',
							key: '0-0-1-0'
						},
						{
							title: '0-0-1-1',
							key: '0-0-1-1'
						},
						{
							title: '0-0-1-2',
							key: '0-0-1-2'
						},
					],
				}, {
					title: '0-0-2',
					key: '0-0-2',
				}],
			}, {
				title: '0-1',
				key: '0-1',
				children: [{
						title: '0-1-0-0',
						key: '0-1-0-0'
					},
					{
						title: '0-1-0-1',
						key: '0-1-0-1'
					},
					{
						title: '0-1-0-2',
						key: '0-1-0-2'
					},
				],
			}, {
				title: '0-2',
				key: '0-2',
			}]
		}
	}
	setFun(e) {
		console.log('set:' + e);
	}
	checkFun(e) {
		console.log(e)
		this.setState({
			checkedKeys: e
		})
	}
	renderTreeNodes(data) {
		return data.map((item) => {
			if(item.children) {
				return(
					<TreeNode title={item.title} key={item.key} dataRef={item}>
            			{this.renderTreeNodes(item.children)}
         			 </TreeNode>
				);
			}
			return <TreeNode {...item} />;
		});
	}
	//拖拽
	enterFun(e) {
		this.setState({
      	    expandedKeys: e.expandedKeys,
     	});
	}
	drop(info){
		console.log(info);
		const dropKey = info.node.props.eventKey;
		const dragKey = info.dragNode.props.eventKey;
		const dropPos = info.node.props.pos.split('-');
		const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
		const loop = (data, key, callback) => {
			data.forEach((item, index, arr) => {
				if(item.key === key) {
					return callback(item, index, arr);
				}
				if(item.children) {
					return loop(item.children, key, callback);
				}
			});
		};
		const data = [...this.state.treeData];
		let dragObj;
		loop(data, dragKey, (item, index, arr) => {
			arr.splice(index, 1);
			dragObj = item;
		});
		if(info.dropToGap) {
			let ar;
			let i;
			loop(data, dropKey, (item, index, arr) => {
				ar = arr;
				i = index;
			});
			if(dropPosition === -1) {
				ar.splice(i, 0, dragObj);
			} else {
				ar.splice(i + 1, 0, dragObj);
			}
		} else {
			loop(data, dropKey, (item) => {
				item.children = item.children || [];
				// where to insert 示例添加到尾部，可以是随意位置
				item.children.push(dragObj);
			});
		}
		this.setState({
			treeData: data,
		});
		console.log(data)
	}
	render() {
		return(
			<div>
				<Card title="树形控件">
					<Tree 
						checkedKeys={this.state.checkedKeys}
						showLine
						onSelect={this.setFun.bind(this)}
						onCheck={this.checkFun.bind(this)}	
					>
						<TreeNode title='项目'key='xiangmu'>
							<TreeNode title="科技" key='keji'></TreeNode>
							<TreeNode title="科技2" key='keji2'></TreeNode>
							<TreeNode title="科技3" key='keji3'></TreeNode>
							<TreeNode title="科技4" key='keji4'></TreeNode>
						</TreeNode>
						<TreeNode title="科技5" key='keji5'>
							<TreeNode title="科技6" key='keji6'></TreeNode>
							<TreeNode title="科技7" key='keji7'></TreeNode>
						</TreeNode>
					</Tree>
				</Card>
				<Card title="后台数据生成树状控件/可拖拽" className="btnTop">
					<Tree 
						defaultExpandedKeys={this.state.expandedKeys}
						checkedKeys={this.state.checkedKeys}
						checkable
						checkStrictly
						draggable={true}
						onDragEnter={this.enterFun.bind(this)}
						onDrop={this.drop.bind(this)}
						onSelect={this.setFun.bind(this)}
						onCheck={this.checkFun.bind(this)}
					>
						{this.renderTreeNodes(this.state.treeData)}
					</Tree>
				</Card>
			</div>
		)
	}
}