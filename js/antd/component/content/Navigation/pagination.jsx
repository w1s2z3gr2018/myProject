import { Pagination,Card ,Steps,Button,message} from 'antd';

class Paginations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 2,
			stepNub:1,
			visible:true
		}
	}
	pageFn(page) {
		console.log(page)
	}
	onShowSizeChange(current, pageSize) {
		console.log(current);
		console.log(pageSize);
	}
	onChange(item, index) {
		console.log(item, index)
	}
	changeFn(item) {
		console.log(item)
	}
	change(e) {
		this.setState({
			current: e
		})
		console.log(e)
	}
	preFn(){
		let nub=this.state.stepNub
		nub--;
		this.state.visible=true
		if(nub<0) {
			nub=0;
			message.warn('回到初始.')
		}
		this.setState({
			stepNub:nub
		})
	}
	nextFn(){
		let nub=this.state.stepNub
		nub++;
		if(nub>3) {
			nub=3;
			message.success('完成所有步骤')
			this.state.visible=false
		}
		this.setState({
			stepNub:nub
		})
	}
	render() {
		return(
			<div>
				<div>
					<Pagination 
						defaultCurrent={3} 
						total={500} 
						onClick={this.pageFn.bind(this)} 
						showSizeChanger
						showQuickJumper
						onShowSizeChange={this.onShowSizeChange.bind(this)}
						onChange={this.onChange.bind(this)}
						/>
				</div>
				<div className='btnTop'>
					<Pagination 
						defaultCurrent={3} 
						total={500} 
						size="small"
						/>
				</div>
				<div className='btnTop'>
					<Pagination 
						defaultCurrent={3} 
						total={100} 
						onChange={this.changeFn.bind(this)}
						simple
						/>
				</div>
				<div className='btnTop'>
					<span>受控的页码</span>
					<Pagination 
						current={this.state.current}
						total={100} 
						onChange={this.change.bind(this)}
						simple
						/>
				</div>
				<div className='btnTop'>
					<span></span>
					<Pagination 
						hideOnSinglePage={true}
						defaultCurrent={1}
						total={100} 
						pageSize={11}
						showTotal={total=>`总计:${total}`}
						/>
				</div>
				<div className='btnTop'>
					<Card title="步骤条">
						<Steps current={this.state.stepNub}>
							<Steps.Step title='标题1' description='描述1' />
							<Steps.Step title='标题2' description='描述2' />
							<Steps.Step title='标题3' description='描述3' />
						</Steps>
						<div className="steps-content">
							{this.state.stepNub==1&&<div>1</div>}
							{this.state.stepNub==2&&<div>2</div>}
							{this.state.stepNub==3&&<div>3</div>}
						</div>
						<Button onClick={this.preFn.bind(this)}>上一步</Button>
						{this.state.visible&&<Button onClick={this.nextFn.bind(this)}>下一步</Button>}
					</Card>
				</div>
				<div className='btnTop'>
					<Card title="步骤条">
						<Steps current={2} size='small'>
							<Steps.Step title='标题1' description='描述1' />
							<Steps.Step title='标题2' description='描述2' />
							<Steps.Step title='标题3' description='描述3' />
						</Steps>
					</Card>
				</div>
				<div className='btnTop'>
					<Card title="步骤条">
						<Steps direction="vertical" current={1} size='small' >
							<Steps.Step title='标题1' description='描述1' />
							<Steps.Step title='标题2' description='描述2' />
							<Steps.Step title='标题3' description='描述3' />
						</Steps>
					</Card>
				</div>
				<div className='btnTop'>
					<Card title="步骤条">
						<Steps current={1} progressDot  >
							<Steps.Step title='标题1' description='描述1' />
							<Steps.Step title='标题2' description='描述2' />
							<Steps.Step title='标题3' description='描述3' />
						</Steps>
					</Card>
				</div>
			</div>
		)
	}
}
export default Paginations;