import { AutoComplete, Card, Input, Button, Icon, Cascader,Checkbox } from 'antd';

class AutoCompletes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ['aa', 'dasd', 'dwd', 'reqwr', 'uiyt', 'lkmnb', 'tty', 'ewqe', 'dueijh', 'dkjtkjlsasd'],
			theData: [],
			casData: [],
			searchData:[],
			checkVal:['2'],
			checkData:[]
		}
	}
	selFn(item) {
		console.log(item);
	}
	searchFns(val) {
		this.state.theData = [];
		val && this.state.data.map((item, index) => {
			if(item.indexOf(val) != -1) {
				this.state.theData.push(item)
			}
		});
		this.setState({
			theData: this.state.theData
		});
	}
	/*三级联动 Cascader*/
	casFn(e, index) {
		console.log(e)
		console.log(index)
		this.setState({
			defaVal: e
		})
	}
	cascaderData() {
		axios('http://www.shuju.com').then(item => {
			this.setState({
				defaVal: [item.data.cascader[0].value, item.data.cascader[0].children[0].value, item.data.cascader[0].children[0].children[0].value],
				casData: item.data.cascader
			})
		})
	}
	searchFn(){
		axios('http://www.shuju.com').then(item=>{
			this.setState({
				searchData:item.data.searchData,
				searchVal:[item.data.searchData[0].value]
			})
		})
	}
	searchFun(e){
		console.log(e)
		this.setState({
			searchVal:e
		})
	}
	filterFun(val,path){
		return (path.some(option => (option.label).indexOf(val) > -1))
	}
	checkValFun(e){
		console.log(e)
		this.setState({
			checkVal:e
		})
	}
	checkValFuns(e){
		console.log(e)
		this.setState({
			checkVals:e
		})
	}
	/*多选数据源获取*/
	checkDataFun(){
		axios('http://www.shuju.com').then(item=>{
			let theData=[];
			if(item.data){
				let data=item.data.checkData;
				data.map(item =>{
					theData.push({
						value:item.key,
						label:item.text
					})
				});
				theData[1].disabled=true;
				console.log(theData)
				this.setState({
					checkData:theData
				});
			}
		})
	}
	componentWillMount() {
		this.cascaderData();
		this.searchFn();
		this.checkDataFun()
	}
	render() {
		return(
			<div>
				<Card title="自动完成">
					<AutoComplete 
						dataSource={this.state.theData.length>0?this.state.theData:this.state.data}
						style={{width:200}} 
						placeholder="输入中"
						onSelect={this.selFn.bind(this)}
						onSearch={this.searchFns.bind(this)}
					/>
				</Card>
				<Card title="自动完成">
					<AutoComplete 
						dataSource={this.state.theData.length>0?this.state.theData:this.state.data}
						style={{width:200}} 
						placeholder="输入中"
						backfill={true}
						onSelect={this.selFn.bind(this)}
						onSearch={this.searchFns.bind(this)}>
						<Input style={{width:200}}
				           suffix={<Icon type="search" className="certain-category-icon" />}
				          />
					</AutoComplete>
				</Card>
				<Card title='Cascader级联选择' style={{marginTop:'15px'}}>
					<div>
						<Cascader value={this.state.defaVal} options={this.state.casData} onChange={this.casFn.bind(this)} placeholder="Please select" style={{width:250}}/>
					</div>
				</Card>
				<Card title='Cascader级联选择+搜索' style={{marginTop:'15px'}}>
					<div>
						<Cascader 
							value={this.state.searchVal} 
							options={this.state.searchData} 
							onChange={this.searchFun.bind(this)} 
							placeholder="Please select" 
							showSearch={this.filterFun}
							notFoundContent='暂无数据'
							style={{width:150}}/>
					</div>
				</Card>
				<Card title='多选' style={{marginTop:'15px'}}>
					<div>
						<Checkbox.Group value={this.state.checkVal} onChange={this.checkValFun.bind(this)}>
							<Checkbox value='1'>苹果</Checkbox>
							<Checkbox value='2'>巴拉</Checkbox>
							<Checkbox value='3'>香蕉</Checkbox>
						</Checkbox.Group>
					</div>
				</Card>
				<Card title='多选数据源获取' style={{marginTop:'15px'}}>
					<div>
						<Checkbox.Group options={this.state.checkData} value={this.state.checkVals} onChange={this.checkValFuns.bind(this)}>
						</Checkbox.Group>
					</div>
				</Card>
			</div>
		)
	}
}
export default AutoCompletes;