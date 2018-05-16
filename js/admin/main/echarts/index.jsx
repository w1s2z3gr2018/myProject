import React from 'react';
import ECharts from 'react-echarts';
import { Button, Spin } from 'antd';
import Mock from 'mockjs';
import $ from 'jquery/src/ajax';
import ajax from 'jquery/src/ajax/xhr'
import dataList from './data.js'
import SubEchart from 'echarts';
import 'echarts-gl';

Mock.mock('http://www.sub.com', {
	list: dataList
});
class Echart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			optionItems: {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data: ['销量']
				},
				xAxis: {
					data: ["1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12']
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [10, 10, 12, 12, 12, 1, 21, 2, 1, 12, 12, 1]
				}]
			},
			options: {
				roseType: 'angle',	
				series: [{
					name: '访问来源',
					type: 'pie',
					radius: '55%',
					data: [{
							value: 235,
							name: '视频广告'
						},
						{
							value: 274,
							name: '联盟广告'
						},
						{
							value: 310,
							name: '邮件营销'
						},
						{
							value: 335,
							name: '直接访问'
						},
						{
							value: 400,
							name: '搜索引擎'
						}
					]
				}]
			}
		}
	}
	dataFn(data = []) {
		return data = {
			title: {
				text: '柱状图'
			},
			tooltip: {},
			legend: {
				data: ['销量']
			},
			xAxis: {
				data: ["1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12']
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: data
			}]
		}
	}
	Mock() {
		let arr = [];
		for(var i = 0; i < 12; i++) {
			let nub = Math.floor(Math.random() * 400)
			arr.push(nub);
		}
		Mock.mock('http://www.data.com', {
			list: arr
		});
	}
	initFn() {
		this.Mock();
		this.setState({
			loading: false
		});
		$.ajax({
			type: "get",
			url: "http://www.data.com",
			async: true,
			success: function(data) {
				this.setState({
					optionItems: this.dataFn(JSON.parse(data).list)
				})
			}.bind(this)
		}).always(function() {
			setTimeout(function() {}, 1000)
			this.setState({
				loading: false
			})
		}.bind(this));
	}
	//3d图形
	sdFn(item) {
		console.log(item.list)
		let data = {};
		return data = {
			grid3D: {
				viewControl: {
					// 使用正交投影。
					projection: 'orthographic'
				}
			},
			xAxis3D: {
				// 因为 x 轴和 y 轴都是类目数据，所以需要设置 type: 'category' 保证正确显示数据。
				type: 'category'
			},
			yAxis3D: {
				type: 'log'
			},
			zAxis3D: {},
			visualMap: {
				calculable: true,
				max: 100,
				// 维度的名字默认就是表头的属性名
				dimension: 'Life Expectancy',
				inRange: {
					color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			dataset: {
				source: item.list
			},
			series: [{
				type: 'scatter3D',
				symbolSize: 5,
				encode: {
					// 维度的名字默认就是表头的属性名
					x: 'Country',
					y: 'Population',
					z: 'Income',
					tooltip: [0, 1, 2, 3, 4]
				}
			}]
		}
	}
	subFn() {
		this.setState({
			loading: false
		});
		$.ajax({
			type: "get",
			url: "http://www.sub.com",
			success: function(data) {
				let theData = JSON.parse(data);
				console.log(this.sdFn(theData.list))
				this.setState({
					sdPic: this.sdFn(theData.list)
				})
			}.bind(this)
		}).always(function() {
			setTimeout(function() {}, 1000)
			this.setState({
				loading: false
			})
		}.bind(this));
	}
	render() {
		//console.log(this.state.subFn)
		return(
			<div>
				<Button onClick={()=>{this.initFn()}}>获取数据</Button>
				<Spin spinning={this.state.loading}>
					<div style={{height:"400px"}}>
						<ECharts option ={this.state.optionItems}/>
					</div>
					<Button onClick={()=>{this.subFn()}}>获取数据</Button>
					<div style={{height:'400px'}}>
						<ECharts option ={this.state.options}/>
					</div>
				</Spin>
			</div>
		)
	}
}

export default Echart;