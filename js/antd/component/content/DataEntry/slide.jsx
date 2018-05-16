import { message, Card, Slider, Button,Switch } from 'antd';

class SlideList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 30,
			rangeVal: [20, 60],
			markTxt: 25,
			marks: {
				0: '长沙',
				25: '娄底',
				75: '涟源',
				100: {
					style: {
						color: 'red'
					},
					label: < strong > 新化 < /strong>
				}
			},
			checked:true,
			loadState:false
		}
	}
	sliderFun(e) {
		this.setState({
			current: e
		})
	}
	rangeFun(e) {
		console.log(e)
		this.setState({
			rangeVal: e
		})
	}
	//改变后触发
	afterFun(e) {
		console.log(e)
	}
	nextFun() {
		console.log(this.state.markTxt)
		let mark = this.state.marks,
			arr = [],
			m;
		console.log(mark)
		for(let val in mark) {
			arr.push(val);
		};
		arr.map((item, index) => {
			if(this.state.markTxt == item) {
				m = index
			}
		});
		if(m == arr.length - 1) {
			message.success('已经到达终点')
			return false
		};
		this.setState({
			markTxt: parseInt(arr[parseInt(m) + 1])
		});
	}
	switchState(e){
		this.setState({
			checked:!this.state.checked,
			loadState:!this.state.loadState
		})
	}
	render() {
		
		return(
			<div>
				<Card title="划动输入条">
					<Slider value={this.state.current} onChange={this.sliderFun.bind(this)} onAfterChange={this.afterFun.bind(this)}/>
					<Slider range value={this.state.rangeVal} onChange={this.rangeFun.bind(this)}/>
					<Slider tipFormatter={(e)=>{return `${e}%`}}/>
					<Slider  marks={this.state.marks} value={this.state.markTxt} onChange={(e)=>{this.setState({markTxt:e})}}/>
					<Button onClick={this.nextFun.bind(this)}>下一步</Button>
					<Slider tipFormatter={(e)=>{return `${e}%`}} step={25}/>
				</Card>
				<Card>
					<div style={{height:200}}>
						<Slider vertical defaultValue={30} />
					</div>
				</Card>
				<Card title="开关">
					<Switch  checked={this.state.checked} onChange={this.switchState.bind(this)}/>
				</Card>
			</div>
		)
	}
}
export default SlideList