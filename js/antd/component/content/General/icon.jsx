import { Button ,Icon,Row} from 'antd'
Mock.mock('http://www.ceshi.com', {
	data: [{
		name: 'YY'
	}, {
		name: 'UU'
	}]
})
class IconList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}
	fetchFn() {
		axios({
			method:'post',
			url:'http://www.shuju.com',
//			params: {
//				name: 'liting'
//			}
		}).then(res=>{
			console.log(res)
		})
	}
	componentWillMount() {
		this.fetchFn()
	}
	render() {
		return(
			<div>
				<Button loading={this.state.loading} onClick={this.fetchFn.bind(this)}>fetch获取数据</Button>	
				<Button loading={true} shape='circle' ></Button>
				<Icon type="check-circle" />
				<Row className='btnTop'>
					<Icon type="star"  spin={true}/><Icon type="heart-o" style={{color:'red'}}/><Icon type="chrome"  spin={true}/>
				</Row>
			</div>
		)
	}
}
export default IconList;