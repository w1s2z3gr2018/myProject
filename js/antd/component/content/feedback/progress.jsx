import {Progress,Card,Button,Icon,message} from 'antd';
export default class ProgressList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			percent:0,
			nub:0
		}
	}
	reduce(){
		let reduce = this.state.percent-10;
		if(reduce<0){
			reduce=0
		};
		this.setState({
			percent:reduce
		});
	}
	add(){
		let add = this.state.percent+10;
		if(add>100){
			add=100
		};
		this.setState({
			percent:add
		});
	}
	automatic(){
		this.state.nub=0;
		var setTime=function(){
			let s = this.state.nub ;
			s++;
			if(s>90){
				clearInterval(time);
				s=90;
			}
			this.setState({
				nub:s
			})
		}.bind(this)
		axios('http://www.shuju.com').then((data)=>{
			console.log(data)
			setTimeout(function(){clearInterval(time);
				this.setState({
					nub:100
				})
				message.success('数据接收成功!')}.bind(this),4000)
		})
		var time =setInterval(setTime,20)
	}
	componentWillMount(){
		
	}
	render(){
		return (
			<div>
				<Card title="标准的进度条">
					<Progress percent={20}/>
					<Progress percent={100} size='small'/>
					<Progress percent={60} status="active"/>
					<Progress percent ={60} status="exception" />
					<Progress type='circle' percent={50}/>
					<Progress type='circle' percent ={70} />
				</Card>
				<Card className="btnTop" title="动态进度条">
					<Progress percent={this.state.percent} />
					<Progress type="circle" percent={this.state.percent} style={{marginRight:20}}/>
					<Button.Group>
						<Button icon="minus" onClick={this.reduce.bind(this)}></Button>
						<Button icon='plus' onClick={this.add.bind(this)}></Button>
					</Button.Group>
					<Progress percent={this.state.nub}/>
					<Progress percent={this.state.nub} type='circle'/>
					<Button icon="smile" onClick={this.automatic.bind(this)} style={{marginLeft:20}}>start</Button>
				</Card>
				<Card title="自定义进度条" className="btnTop">
					<Progress percent={this.state.nub} type='dashboard' strokeWidth={3}/>
					<Progress percent={this.state.nub} type='dashboard' format={(e) => `仪表盘${e}%`}/>
				</Card>
			</div>
		)
	}
}

