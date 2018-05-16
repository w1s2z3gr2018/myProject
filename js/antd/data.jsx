export default function data() {
	Mock.mock('http://www.shuju.com', {
		cascader: [{
			value: 'zhejiang',
			label: 'Zhejiang',
			children: [{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [{
					value: 'xihu',
					label: 'West Lake',
				}],
			}],
		}, {
			value: 'jiangsu',
			label: 'Jiangsu',
			children: [{
				value: 'nanjing',
				label: 'Nanjing',
				children: [{
					value: 'zhonghuamen',
					label: 'Zhong Hua Men',
				}],
			}],
		}],
		searchData: [{
				value: '1',
				label: '北京'
			},
			{
				value: '2',
				label: '杭州'
			},
			{
				value: '3',
				label: '南京'
			},
			{
				value: '4',
				label: '中南'
			}
		],
		checkData: [{
				key: '1',
				text: '苹果'
			},
			{
				key: '2',
				text: '菠萝'
			},
			{
				key: '3',
				text: '芒果'
			},
			{
				key: '4',
				text: '西红柿'
			},
			{
				key: '5',
				text: '栗子'
			},
		],
		tableData: [
			{
				key: '1',
				name: 'Jo',
				age: 32,
				sex:'boy',
				address: 'New York No. 1 Lake Park',
			}, {
				key: '2',
				name: 'Jim Gre',
				age: 42,
				sex:'girl',
				address: 'London No. 1 Lake Park',
			}, {
				key: '3',
				name: 'Jo',
				age: 32,
				sex:'girl',
				address: 'Sidney No. 1 Lake Park',
			},{
				key: '4',
				name: 'John B',
				age: 32,
				sex:'boy',
				address: 'New York No. 1 Lake Park',
			}, {
				key: '5',
				name: 'Jim ',
				age: 42,
				sex:'girl',
				address: 'London No. 1 Lake Park',
			}, {
				key: '6',
				name: 'Joe Bl',
				age: 32,
				sex:'girl',
				address: 'Sidney No. 1 Lake Park',
			},
			{
				key: '7',
				name: 'J',
				age: 32,
				sex:'boy',
				address: 'New York No. 1 Lake Park',
			}, {
				key: '8',
				name: 'Jieen',
				age: 42,
				sex:'girl',
				address: 'London No. 1 Lake Park',
			}, {
				key: '9',
				name: 'Jlack',
				age: 32,
				sex:'girl',
				address: 'Sidney No. 1 Lake Park',
			},{
				key: '10',
				name: 'Jn',
				age: 32,
				sex:'boy',
				address: 'New York No. 1 Lake Park',
			}, {
				key: '11',
				name: 'J Green',
				age: 42,
				sex:'girl',
				address: 'London No. 1 Lake Park',
			}, {
				key: '12',
				name: 'JoBlack',
				age: 32,
				sex:'girl',
				address: 'Sidney No. 1 Lake Park',
			}
		]
	})
}