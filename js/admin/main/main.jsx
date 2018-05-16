import React from 'react';
import Mock from 'mockjs';
import $ from 'jquery';
import { Button ,message,loading,Card} from 'antd';
import NoState from './noState';
import Echarts from './echarts/index'

console.log(Mock);
Mock.mock('http://www.cishi.com',
	{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    data:[{name:'假数据假接口'},{name:'呵呵'}]
   }
);

Mock.mock('http://www.duoge.com',
	{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    data:[{name:'另一个接口'},{name:'呵呵'}]
   }
);

Mock.mock('http://www.jiantou.com',
	{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    data:[{name:'箭头函数绑定'},{name:'呵呵'}]
   }
);
//获取随机数据
Mock.Random.extend({
    data: function(date) {
        var data = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(data)
    }
})

var time =  Mock.Random.date('yyyy-MM-dd HH:MM:SS'),
	imgs =  Mock.Random.image('200x100','#fb0a2a')
Mock.mock('http://www.liting.com',{
    data: '@DATA',
    time: time,
    img:imgs
})


class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
			txt:'',
			time:'',
			img:''
		}
		this.loadData=this.loadData.bind(this);  
	};
	
	loadData(data) {
		$.ajax({
			method: "get",
			dataType: "json",
			crossDomain: false,
			url:"http://www.cishi.com",
			data: {},
			success: function(data) {
				message.success('数据来了')
				console.log(data);
				this.setState({
					list:data.data
				})
			}.bind(this),
			}).always(function() {
				
		}.bind(this));
	};
	btnFn() {
		$.ajax({
			method: "get",
			dataType: "json",
			crossDomain: false,
			url:"http://www.duoge.com",
			data: {},
			success: function(data) {
				message.success('btnfn数据来了')
				console.log(data);
				this.setState({
					list:data.data
				})
			}.bind(this),
			}).always(function() {
				
		}.bind(this));
	}
	bindFn(a) {
		console.log(a)
		$.ajax({
			method: "get",
			dataType: "json",
			crossDomain: false,
			url:"http://www.liting.com",
			data: {},
			success: function(data) {
				message.success('随机数据');
				console.log(data);
				this.setState({
					txt:data.data,
					time:data.time,
					img:data.img
				})
			}.bind(this),
			}).always(function() {
				
		}.bind(this));
	}
	componentWillMount(){
		
	}
	componentDidUpdate(){
		
	}
	render(){
		return (
			<div className="container">
				<Button onClick={this.loadData}>mock请求数据</Button>
				<Button type="primary" onClick={this.btnFn.bind(this)}>另一个接口</Button>
				<Button type="danger" onClick={()=>{this.bindFn(1)}}>随机数据</Button>
				
				<Card title="卡片">
					<p>{this.state.txt}</p>
					<p>{this.state.time}</p>
					<NoState name='无状态组件的创建'/>
					<div>
						{
							this.state.list.map((item,index)=>{
								return (
									<p key={index}>{item.name}</p>
								)
							})
						}
					</div>
					<img src={this.state.img}/>
				</Card>
				<Echarts />
			</div>
		)
	}
}
export default Main;

