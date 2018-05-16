import { Card,DatePicker, Radio,Row} from 'antd';
const {MonthPicker,WeekPicker,RangePicker} = DatePicker;
import moment from 'moment';
console.log(sub);
class DatePickers extends React.Component {
	constructor(props){
		super(props);
		this.state={
			nowTime:undefined,
			rangeTxt:[moment('2017-10-12',"YYYY-MM-DD"),moment('2018-10-12',"YYYY-MM-DD")]
		}
	}
	dataFun(str,time){
		console.log(str);
		console.log(time);
		this.setState({
			nowTime:str
		})
	}
	monthFun(str,time){
		console.log(str);
		console.log(time);
	}
	weekFuns(str,time){
		console.log(str);
		console.log(time);
	}
	rangeFun(str,time){
		console.log(str);
		console.log(time);
		this.setState({
			rangeTxt:str
		})
	}
	/*时间控制器大小控制*/
	radValFun(e){
		this.setState({
			timeSize:e.target.value
		})
	}
	/*关闭时调用*/
	closeFun(xhr){
		console.log(xhr);//boolean
	}
	componentWillMount(){
		let time=new Date().toLocaleDateString();
		this.state.nowTime=moment(time,'YYYY/MM/DD');
	}
	render() {
		return(
			<div>
				<Card title="日期时间选择器">
					<span style={{margin:10}}>年月日:</span>
					<DatePicker onChange={this.dataFun.bind(this)} value={this.state.nowTime}/>
					<span style={{margin:10}}>年月 :</span>
					<MonthPicker onChange={this.monthFun.bind(this)}/>
					<span style={{margin:10}}>范围日期选择:</span>
					<RangePicker onChange={this.rangeFun.bind(this)} value={this.state.rangeTxt}/>
				</Card>
				<Card title='时间选择器大小控制'>
					<Radio.Group value={this.state.radVal} onChange={this.radValFun.bind(this)}>
						<Radio.Button value='large'>large</Radio.Button>
						<Radio.Button value='default'>default</Radio.Button>
						<Radio.Button value="small">small</Radio.Button>
					</Radio.Group>
					<Row className='btnTop'>
						<span style={{margin:10}}>年月日:</span>
						<DatePicker size={this.state.timeSize} onChange={this.dataFun.bind(this)} value={this.state.nowTime}/>
						<span style={{margin:10}}>年月 :</span>
						<MonthPicker size={this.state.timeSize} onChange={this.monthFun.bind(this)}/>
						<span style={{margin:10}}>范围日期选择:</span>
						<RangePicker size={this.state.timeSize} onChange={this.rangeFun.bind(this)} value={this.state.rangeTxt}/>
					</Row>
				</Card>
				<Card>
					<DatePicker 
						showTime 
						format="YYYY-MM-DD HH:mm:ss" 
						renderExtraFooter={() => '一步一流年'} 
						style={{width:200}}
						onOpenChange={this.closeFun.bind(this)}
						/>
				</Card>
			</div>
		)
	}
}
export default DatePickers;